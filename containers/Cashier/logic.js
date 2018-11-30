// import R from 'ramda'

import {
  makeDebugger,
  $solver,
  holdPage,
  asyncRes,
  asyncErr,
  Global,
  EVENT,
  ERR,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

// import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.CALL_CASHIER],
})
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Cashier')
/* eslint-enable no-unused-vars */

let store = null

export const sidebarViewOnChange = sidebarView =>
  store.markState({ sidebarView, contentView: sidebarView })

export const payMethodOnChange = payMethod => store.markState({ payMethod })

export const subContentViewOnChange = subContentView =>
  store.markState({ subContentView })

export const transferAccountChange = ({ target: { value } }) =>
  store.markState({ transferAccount: value })

export const onClose = () => {
  const confirmed = Global.confirm('若已付款，请确保您填写了账户信息')

  if (confirmed) return store.markState({ show: false, subContentView: 'pay' })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes(EVENT.CALL_CASHIER),
    action: () => {
      store.markState({ show: true })
      holdPage()
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
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

export function init(_store) {
  if (store) return false
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
