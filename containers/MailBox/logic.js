// import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  dispatchEvent,
  TYPE,
  EVENT,
  ERR,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:MailBox')
/* eslint-enable no-unused-vars */

let store = null

/*
   export const panelVisiableOnChange = panelVisiable =>
   store.markState({ panelVisiable })
 */

export const selectChange = ({ raw: activeRaw }) =>
  store.markState({ activeRaw })

export const previewUser = user => {
  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_USER_VIEW,
    data: user,
  })
}

export const loadMailboxStates = () => sr71$.query(S.mailBoxStatus, {})

export function loadMentions() {
  // debug('loadMentions')
  sr71$.query(S.mentions, { filter: { page: 1, size: 10, read: false } })
}

export const seeAll = () =>
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_MAILS_VIEW })

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
