// import R from 'ramda'
import { useEffect } from 'react'

import { PAGE_SIZE } from '@/config'
import { ERR } from '@/constant'
import { asyncSuit, buildLog, errRescue } from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:MailsViewer')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

export const selectChange = ({ raw: activeRaw }) => store.mark({ activeRaw })

export const loadMentions = (page = 1) => {
  markLoading(false)
  const read = store.readState
  sr71$.query(S.mentions, {
    filter: { page, size: PAGE_SIZE.M, read },
  })
  /* sr71$.query(S.mentions, { filter: { page: 1, size: 10 } }) */
}
export const toggleReadState = () => {
  store.mark({ readState: !store.readState })
  loadMentions()
}

const markLoading = (maybe = true) => store.mark({ loading: maybe })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('mentions'),
    action: ({ mentions: pagedMentions }) => {
      markLoading(false)
      store.mark({ pagedMentions })
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
