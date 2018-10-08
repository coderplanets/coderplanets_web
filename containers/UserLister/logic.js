// import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  holdPage,
  unholdPage,
  ERR,
  EVENT,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.USER_LISTER_OPEN],
})

let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:UserLister')
/* eslint-enable no-unused-vars */

let store = null

export function onClose() {
  store.markState({ show: false })
  unholdPage()
}

const loadUsers = () => {
  sr71$.query(S.pagedUsers, { filter: { page: 1, size: 20 } })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes(EVENT.USER_LISTER_OPEN),
    action: () => {
      loadUsers()
      store.markState({ show: true })
      holdPage()
    },
  },
  {
    match: asyncRes('pagedUsers'),
    action: ({ pagedUsers }) => store.markState({ pagedUsers }),
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
