// import R from 'ramda'
import { useEffect } from 'react'

import { PAGE_SIZE } from '@config'

import { buildLog, $solver, asyncRes, asyncErr, ERR, errRescue } from '@utils'

import SR71 from '@utils/async/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const log = buildLog('L:MailsViewer')

export const selectChange = ({ raw: activeRaw }) =>
  store.markState({ activeRaw })

export const loadMentions = (page = 1) => {
  markLoading(false)
  const read = store.readState
  sr71$.query(S.mentions, {
    filter: { page, size: PAGE_SIZE.M, read },
  })
  /* sr71$.query(S.mentions, { filter: { page: 1, size: 10 } }) */
}
export const toggleReadState = () => {
  store.markState({ readState: !store.readState })
  loadMentions()
}

const markLoading = (maybe = true) => store.markState({ loading: maybe })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('mentions'),
    action: ({ mentions: pagedMentions }) => {
      markLoading(false)
      store.markState({ pagedMentions })
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => markLoading(false),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      markLoading(false)
      errRescue({ type: ERR.TIMEOUT, details, path: 'MailsViewer' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      markLoading(false)
      errRescue({ type: ERR.NETWORK, path: 'MailsViewer' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = _store =>
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    loadMentions()

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
