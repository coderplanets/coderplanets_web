import R from 'ramda'
import { useEffect } from 'react'

import {
  buildLog,
  $solver,
  asyncRes,
  asyncErr,
  ERR,
  TYPE,
  EVENT,
  errRescue,
} from '@utils'
import { githubApi } from '@services'

import SR71 from '@utils/async/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.PREVIEW_CLOSED, EVENT.SYNC_REPO],
})

let sub$ = null
let store = null

/* eslint-disable-next-line */
const log = buildLog('L:RepoViewer')

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
  {
    match: asyncRes('updateRepo'),
    action: ({ updateRepo }) => {
      markLoading(false)
      store.setViewing({ repo: R.merge(store.viewingData, updateRepo) })
    },
  },
  {
    match: asyncRes(EVENT.SYNC_REPO),
    action: () => {
      markLoading(true)
      log('should sync repo: ', store.viewingData)
      const { id, ownerName, title } = store.viewingData

      githubApi
        .searchRepo(ownerName, title)
        .then(res =>
          sr71$.mutate(S.updateRepo, { id, ...githubApi.transformRepo(res) })
        )
        .catch(e => store.handleError(githubApi.parseError(e)))
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
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    openAttachment(attachment)

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, attachment])
}
