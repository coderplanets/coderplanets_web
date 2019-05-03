import { useEffect } from 'react'
// import R from 'ramda'

import {
  makeDebugger,
  $solver,
  dispatchEvent,
  EVENT,
  PAYMENT_USAGE,
} from 'utils'
import SR71 from 'utils/async/sr71'

// import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:Footer2')

let store = null

export const toggleSponsorHelper = () =>
  store.markState({ showSponsor: !store.showSponsor })

export const toggleSeniorHelper = () => store.upgradeHepler()
export const toggleBusBanner = () =>
  store.markState({ showBusBanner: !store.showBusBanner })

export const onLogin = () => store.authWarning({ hideToast: true })
export const onPay = num => {
  if (!store.isLogin) return store.authWarning()
  store.cashierHelper({ paymentUsage: PAYMENT_USAGE.DONATE, amount: num })
}

export const queryDoraemon = data =>
  dispatchEvent(EVENT.QUERY_DORAMON, { data })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = []

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(
    () => {
      store = _store
      // debug('effect init')
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

      return () => {
        sub$.unsubscribe()
      }
    },
    [_store]
  )
}
