import R from 'ramda'

import {
  makeDebugger,
  dispatchEvent,
  $solver,
  asyncRes,
  asyncErr,
  TYPE,
  THREAD,
  EVENT,
  ERR,
  pagedFilter,
  errRescue,
} from 'utils'

import SR71 from 'utils/network/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:UserPublishedComments')

const getQueryArgs = page => {
  store.markState({ curView: TYPE.LOADING })
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

export const onThreadChange = curThread => {
  // TODO: markRoute
  store.markState({ curThread })
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

export const onPreview = data => {
  const thread = store.curThread
  debug('onPreview data: ', data[thread])

  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE[`PREVIEW_${R.toUpper(thread)}_VIEW`],
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
      debug('get publishedRepoComments: ', publishedRepoComments)
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

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  loadPostComments()
}
