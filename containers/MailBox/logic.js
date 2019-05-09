import { useEffect } from 'react'
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
  errRescue,
} from '@utils'

import SR71 from '@utils/async/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:MailBox')

/*
   export const panelVisiableOnChange = panelVisiable =>
   store.markState({ panelVisiable })
 */

export const selectChange = ({ raw: activeRaw }) =>
  store.markState({ activeRaw })

export const previewUser = user =>
  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_USER_VIEW,
    data: user,
  })

export const loadMailboxStates = () => {
  if (!store.isLogin) return false
  markLoading(true)
  sr71$.query(S.mailBoxStatus, {})
}

const loadMentions = () => {
  // debug('loadMentions')
  markLoading(true)
  sr71$.query(S.mentions, { filter: { page: 1, size: 10, read: false } })
}

export const visibleOnChange = visible => {
  if (visible) loadMentions()

  store.markState({ visible })
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
      markLoading(false)
      store.markState({ pagedMentions })
      loadMailboxStates()
    },
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
      errRescue({ type: ERR.TIMEOUT, details, path: 'MailBox' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'MailBox' }),
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(
    () => {
      store = _store
      debug('effect init')
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
      loadMailboxStates()

      return () => {
        // debug('effect uninit')
        if (store.loading || !sub$) return false
        debug('===== do uninit')
        sr71$.stop()
        sub$.unsubscribe()
        sub$ = null
      }
    },
    [_store]
  )
}
