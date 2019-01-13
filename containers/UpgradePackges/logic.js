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

export const init = _store => {
  store = _store

  debug(store)
  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
