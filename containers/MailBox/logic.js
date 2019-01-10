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

/* eslint-disable-next-line */
const debug = makeDebugger('L:MailBox')

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

export const loadMailboxStates = () => {
  markLoading(true)
  sr71$.query(S.mailBoxStatus, {})
}

export function loadMentions() {
  // debug('loadMentions')
  markLoading(true)
  sr71$.query(S.mentions, { filter: { page: 1, size: 10, read: false } })
}

export const seeAll = () =>
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_MAILS_VIEW })

const markLoading = (maybe = true) => store.markState({ loading: maybe })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('user'),
    action: ({ user: { mailBox: mailStatus } }) => {
      markLoading(false)
      store.markState({ mailStatus })
    },
  },
  {
    match: asyncRes('mentions'),
    action: ({ mentions: pagedMentions }) => {
      debug('get pagedMentions: ', pagedMentions)
      markLoading(false)
      store.markState({ pagedMentions })
      loadMailboxStates()
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
  store = _store

  if (sub$) return loadMailboxStates()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadMailboxStates()
}

export function uninit() {
  if (store.loading || !sub$) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
