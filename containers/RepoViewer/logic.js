import { useEffect } from 'react'
import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  ERR,
  TYPE,
  EVENT,
  errRescue,
} from '@utils'

import SR71 from '@utils/async/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.PREVIEW_CLOSED],
})

let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:RepoViewer')

const loadRepo = id => {
  markLoading(true)
  const userHasLogin = store.isLogin
  sr71$.query(S.repo, { id, userHasLogin })
}

const openAttachment = att => {
  if (!att) return false
  const { type } = att
  if (type === TYPE.PREVIEW_REPO_VIEW) {
    // TODO: merge default empty repo
    store.setViewing({ rep: att })
    loadRepo(att.id)
  }
}

const markLoading = (maybe = true) => store.markState({ loading: maybe })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('repo'),
    action: ({ repo }) => {
      markLoading(false)
      store.setViewing({ repo: R.merge(store.viewingData, repo) })
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
      errRescue({ type: ERR.TIMEOUT, details, path: 'RepoViewer' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      markLoading(false)
      errRescue({ type: ERR.NETWORK, path: 'RepoViewer' })
    },
  },
]

export const holder = 1
// ###############################
// init & uninit
// ###############################
export const useInit = (_store, attachment) => {
  useEffect(
    () => {
      store = _store
      // debug('effect init')
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
      openAttachment(attachment)

      return () => {
        // debug('effect uninit')
        sr71$.stop()
        sub$.unsubscribe()
      }
    },
    [_store, attachment]
  )
}
