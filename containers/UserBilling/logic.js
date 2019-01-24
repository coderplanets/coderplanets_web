// import R from 'ramda'
import { PAGE_SIZE } from 'config'

import {
  makeDebugger,
  $solver,
  asyncErr,
  ERR,
  EVENT,
  PAYMENT_USAGE,
  asyncRes,
  errRescue,
} from 'utils'

import SR71 from 'utils/async/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.NEW_BILLS],
})
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:UserBilling')

export const upgradeHepler = () => store.upgradeHepler()
export const sponsorHepler = () => store.sponsorHepler()
export const girlVerifier = () => store.callGirlVerifier()

export const seniorOnPay = () =>
  store.cashierHelper({ paymentUsage: PAYMENT_USAGE.DONATE, amount: '51.2' })

export const loadBilRecords = (page = 1) => {
  if (!store.isSelfViewing) return false

  sr71$.query(S.pagedBillRecords, { filter: { page, size: PAGE_SIZE.D } })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('pagedBillRecords'),
    action: ({ pagedBillRecords }) => store.markState({ pagedBillRecords }),
  },
  {
    match: asyncRes(EVENT.NEW_BILLS),
    action: () => loadBilRecords(),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {},
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) =>
      errRescue({ type: ERR.TIMEOUT, details, path: 'UserBilling' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'UserBilling' }),
  },
]

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadBilRecords()
}
