import { useEffect } from 'react'
import { toUpper } from 'ramda'

import { TYPE, EVENT, ERR, THREAD } from '@/constant'
import {
  asyncSuit,
  buildLog,
  send,
  pagedFilter,
  errRescue,
  scrollToHeader,
} from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:UserPublishedComments')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

const getQueryArgs = page => {
  store.mark({ curView: TYPE.LOADING })
  // args
  return {
    userId: store.viewingUser.id,
    filter: pagedFilter(page),
  }
}

export const loadPostComments = (page = 1) =>
  sr71$.query(S.publishedPostComments, getQueryArgs(page))

export const loadJobComments = (page = 1) =>
  sr71$.query(S.publishedJobComments, getQueryArgs(page))

export const loadVideoComments = (page = 1) =>
  sr71$.query(S.publishedVideoComments, getQueryArgs(page))

export const loadRepoComments = (page = 1) =>
  sr71$.query(S.publishedRepoComments, getQueryArgs(page))

export const threadOnChange = curThread => {
  // TODO: markRoute
  store.mark({ curThread })
  // reload()
  switch (store.curThread) {
    case THREAD.JOB:
      return loadJobComments()

    case THREAD.VIDEO:
      return loadVideoComments()

    case THREAD.REPO:
      return loadRepoComments()

    default:
      return loadPostComments()
  }
}

export const onPageChange = (page = 1) => {
  scrollToHeader()
  switch (store.curThread) {
    case THREAD.JOB:
      return loadJobComments(page)

    case THREAD.VIDEO:
      return loadVideoComments(page)

    case THREAD.REPO:
      return loadRepoComments(page)

    default:
      return loadPostComments(page)
  }
}

export const onPreview = data => {
  const thread = store.curThread

  send(EVENT.PREVIEW_OPEN, {
    type: TYPE[`PREVIEW_${toUpper(thread)}_VIEW`],
    data: data[thread],
    thread,
  })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('publishedPostComments'),
    action: ({ publishedPostComments }) =>
      store.markPagedData(publishedPostComments),
  },
  {
    match: asyncRes('publishedJobComments'),
    action: ({ publishedJobComments }) =>
      store.markPagedData(publishedJobComments),
  },
  {
    match: asyncRes('publishedVideoComments'),
    action: ({ publishedVideoComments }) =>
      store.markPagedData(publishedVideoComments),
  },
  {
    match: asyncRes('publishedRepoComments'),
    action: ({ publishedRepoComments }) => {
      log('get publishedRepoComments: ', publishedRepoComments)
      store.markPagedData(publishedRepoComments)
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
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'UserPublishedComments' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () =>
      errRescue({ type: ERR.NETWORK, path: 'UserPublishedComments' }),
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    loadPostComments()

    return () => {
      // log('effect uninit')
      if (!sub$) return false
      // log('===== do uninit')
      sub$.unsubscribe()
    }
  }, [_store])
}
