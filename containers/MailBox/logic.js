// import R from 'ramda'

import { makeDebugger, $solver, asyncRes, asyncErr, ERR } from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:MailBox')
/* eslint-enable no-unused-vars */

let store = null

export function selectChange(data) {
  store.markState({
    activeRaw: data.raw,
  })
}

export function loadMailboxStates() {
  console.log('loadMailboxStates')
  sr71$.query(S.mailBoxStatus, {})
}

export function loadMentions() {
  console.log('loadMentions')
  sr71$.query(S.mentions, { filter: { page: 1, size: 10, read: false } })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('user'),
    action: ({ user: { mailBox: mailStatus } }) => {
      store.markState({ mailStatus })
    },
  },
  {
    match: asyncRes('mentions'),
    action: ({ mentions: pagedMentions }) => {
      store.markState({ pagedMentions })
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
  if (store) {
    return loadMailboxStates()
  }
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  return loadMailboxStates()
}
