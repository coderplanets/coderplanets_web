// import R from 'ramda'
import { SENIOR_AMOUNT_THRESHOLD } from '../../config'

import { makeDebugger, $solver, PAYMENT_USAGE } from '../../utils'

import SR71 from '../../utils/network/sr71'
/* import S from './schema' */

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:UpgradePackges')

let store = null

export const upgrade = () => {
  if (!store.isLogin) return store.authWarning()

  store.cashierHelper({
    paymentUsage: PAYMENT_USAGE.SENIOR,
    amount: SENIOR_AMOUNT_THRESHOLD,
  })
}

export const close = () => store.markState({ show: !store.show })

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
