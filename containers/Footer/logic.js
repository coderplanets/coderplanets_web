// import R from 'ramda'

import { makeDebugger, $solver, PAYMENT_USAGE } from '../../utils'
import SR71 from '../../utils/network/sr71'

// import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Footer2')
/* eslint-enable no-unused-vars */

let store = null

export function toggleSponsorHelper() {
  // if (!store.isLogin) return store.authWarning()
  store.markState({
    showSponsor: !store.showSponsor,
  })
}

export const onLogin = () => store.authWarning({ hideToast: true })
export const onPay = num =>
  store.cashierHelper({ paymentUsage: PAYMENT_USAGE.DONATE, faceValue: num })
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = []

export function init(_store) {
  if (store) return false
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
