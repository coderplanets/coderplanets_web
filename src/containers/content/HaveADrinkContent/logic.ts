import { useEffect } from 'react'
import { find, propEq } from 'ramda'

import { ERR } from '@/constant'

import { errRescue } from '@/utils/helper'
import asyncSuit from '@/utils/async'
import { buildLog } from '@/utils/logger'
import { scrollToTop, lockPage, unlockPage } from '@/utils/dom'

import { ANIMATE_TIMER_CLASS, VIEW } from './constant'
import type { TDrinkCategory } from './spec'
import demo from './demo'
import type { TStore } from './store'

const { SR71, $solver, asyncErr } = asyncSuit
// import S from './schema'

const sr71$ = new SR71()
let sub$ = null

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:HaveADrinkContent')

export const changeCategory = (category: string): void => {
  store.mark({ category, drinkIdx: 0 })
  setView(VIEW.DEFAULT)
}

export const getCategoryByTitle = (title: string): TDrinkCategory => {
  return find(propEq('title', title), demo) as TDrinkCategory
}

/**
 * change the main view type, and stop timer
 *
 * @param {string} view, view type
 */
export const setView = (view: string): void => {
  store.mark({ view })
  stopTimer()
}

/**
 * change the setting
 *
 * @param {key} optionObj, setting key
 * @param {val} string, setting value
 */
export const setSetting = (key: string, val: string): void => {
  store.mark({ [key]: val })
  setView('default')
}

/**
 * restart element's animation
 * see: https://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element
 * @param {string} elementClassName
 * @return void
 * @priate
 */
const resetAnimation = (elementClassName: string): void => {
  const elements = document.querySelectorAll(`.${elementClassName}`)

  // first timer switch the animate part is not visible
  if (elements.length === 0) return

  elements.forEach((el: HTMLElement) => {
    el.style.animation = 'none'
    el.offsetHeight /* trigger reflow */
    el.style.animation = null
  })
}

/**
 * start the refresh internal timer
 * @private
 */
const startTimer = (): void => {
  const { timerIntervalVal } = store
  let { timer } = store

  resetAnimation(ANIMATE_TIMER_CLASS)

  // @ts-ignore
  timer = setInterval(() => {
    refreshDrink()
  }, timerIntervalVal)

  store.mark({ timer })
}

/**
 * stop the refresh internal timer
 * @private
 */
const stopTimer = (): void => {
  const { timer } = store

  clearInterval(timer)
  store.mark({ timer: null })
}

/**
 * toggle the refresh internal timer
 * @private
 */
export const toggleTimer = (): void => {
  const { timer } = store
  timer ? stopTimer() : startTimer()
}

/**
 * set the internal val of the timer
 * @param {string} timerInterval, interval of the timer: 3s | 5s | 10s
 * @private
 */
export const setTimerInterval = (timerInterval: string): void => {
  stopTimer()
  store.mark({ timerInterval })
  startTimer()
}

export const refreshDrink = (): void => {
  const { drinks, drinkIdx } = store

  let nextDrinkIdx
  if (drinkIdx >= drinks.length - 1) {
    nextDrinkIdx = 0
  } else {
    nextDrinkIdx = drinkIdx + 1 // pool.length
  }

  store.mark({ drinkIdx: nextDrinkIdx })

  scrollToTop()
  lockPage()
  setTimeout(() => unlockPage(), 1000)
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      // cancelLoading()
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      // cancelLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'HaveADrinkContent' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      // cancelLoading()
      errRescue({ type: ERR.NETWORK, path: 'HaveADrinkContent' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    log('effect init: ', store)

    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    return () => {
      if (!sub$) return
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
