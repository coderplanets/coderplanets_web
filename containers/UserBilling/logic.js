// import R from 'ramda'
import { PAGE_SIZE } from '../../config'

import {
  makeDebugger,
  $solver,
  asyncErr,
  ERR,
  EVENT,
  PAYMENT_USAGE,
  asyncRes,
} from '../../utils'

import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.NEW_BILLS],
})
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:UserBilling')

let store = null

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
    action: ({ details }) => {
      debug('ERR.GRAPHQL -->', details)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export const init = _store => {
  store = _store

  loadBilRecords()

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadBilRecords()
}
