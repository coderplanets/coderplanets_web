// import R from 'ramda'

import { makeDebugger, $solver, PAYMENT_USAGE } from '../../utils'
import SR71 from '../../utils/network/sr71'

// import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:Footer2')

let store = null

export const toggleSponsorHelper = () =>
  store.markState({
    showSponsor: !store.showSponsor,
  })

export const toggleSeniorHelper = () => store.upgradeHepler()

export const onLogin = () => store.authWarning({ hideToast: true })
export const onPay = num => {
  if (!store.isLogin) return store.authWarning()
  store.cashierHelper({ paymentUsage: PAYMENT_USAGE.DONATE, amount: num })
}
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = []

export function init(_store) {
  store = _store

  debug(store)
  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
