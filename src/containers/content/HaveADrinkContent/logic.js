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

/**
 * change the main view type
 *
 * @param {string} view, view type
 */
export const setView = view => store.mark({ view })

/**
 * start the refresh internal timer
 * @private
 */
const startTimer = () => {
  const { timerIntervalVal } = store
  let { timer } = store

  timer = setInterval(() => {
    console.log('setInterval: ', timer)
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
