// import R from 'ramda'
import { useEffect } from 'react'

import { ERR } from '@constant'
import { buildLog, $solver, asyncErr, errRescue } from '@utils'

import SR71 from '@utils/async/sr71'
// import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const log = buildLog('L:HaveADrinkContent')

// class name of the animate timer components
export const ANIMATE_TIMER_CLASS = 'animate-timer'

/**
 * change the main view type
 *
 * @param {string} view, view type
 */
export const setView = view => store.mark({ view })

/**
 * restart element's animation
 * see: https://stackoverflow.com/questions/6268508/restart-animation-in-css3-any-better-way-than-removing-the-element
 * @param {string} elementClassName
 * @return void
 * @priate
 */
const resetAnimation = elementClassName => {
  const elements = document.querySelectorAll(`.${elementClassName}`)

  // first timer switch the animate part is not visiable
  if (elements.length === 0) return

  elements.forEach(el => {
    el.style.animation = 'none'
    el.offsetHeight /* trigger reflow */
    el.style.animation = null
  })
}

/**
 * start the refresh internal timer
 * @private
 */
const startTimer = () => {
  const { timerIntervalVal } = store
  let { timer } = store

  resetAnimation(ANIMATE_TIMER_CLASS)

  timer = setInterval(() => {
    refreshSentence()
  }, timerIntervalVal)

  store.mark({ timer })
}

/**
 * stop the refresh internal timer
 * @private
 */
const stopTimer = () => {
  const { timer } = store

  clearInterval(timer)
  store.mark({ timer: null })
}

/**
 * toggle the refresh internal timer
 * @private
 */
export const toggleTimer = () => {
  const { timer } = store
  timer ? stopTimer() : startTimer()
}

/**
 * set the internal val of the timer
 * @param {string} timerInterval, interval of the timer: 3s | 5s | 10s
 * @private
 */
export const setTimerInterval = timerInterval => {
  stopTimer()
  store.mark({ timerInterval })
  startTimer()
}

export const refreshSentence = () => {
  const { pool, poolIdx } = store

  let nextPoolIdx
  if (poolIdx >= pool.length - 1) {
    nextPoolIdx = 0
  } else {
    nextPoolIdx = poolIdx + 1 // pool.length
  }

  store.mark({ poolIdx: nextPoolIdx })
  // return  pool[poolIdx]
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      // cancleLoading()
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      // cancleLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'HaveADrinkContent' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      // cancleLoading()
      errRescue({ type: ERR.NETWORK, path: 'HaveADrinkContent' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(() => {
    store = _store
    log('effect init: ', store)

    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    return () => {
      if (!sub$) return false
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
