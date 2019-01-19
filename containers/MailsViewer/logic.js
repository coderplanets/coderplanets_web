// import R from 'ramda'

import { PAGE_SIZE } from '../../config'
import { makeDebugger, $solver, asyncRes, asyncErr, ERR } from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:MailsViewer')

let store = null

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
    action: ({ details }) => {
      debug('ERR.GRAPHQL -->', details)
      markLoading(false)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
      markLoading(false)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
      markLoading(false)
    },
  },
]

export const init = _store => {
  store = _store

  if (sub$) return loadMentions()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  loadMentions()
}

export const uninit = () => {
  if (store.loading || !sub$) return false
  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
