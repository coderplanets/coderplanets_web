// import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncErr,
  dispatchEvent,
  ERR,
  EVENT,
} from '../../utils'

import SR71 from '../../utils/network/sr71'

// import S from './schema'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:ArticleAuthorCard')
/* eslint-enable no-unused-vars */

const sr71$ = new SR71()
let sub$ = null
let store = null

export const onListUsers = (type, data) =>
  dispatchEvent(EVENT.USER_LISTER_OPEN, { type, data })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
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
  store = _store

  debug(store)
  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export function uninit() {
  if (!sub$) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
