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
} from '../../utils'

import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:UserPublishedComments')

let store = null

const beforeQuery = page => {
  store.markState({ curView: TYPE.LOADING })
  // args
  return {
    userId: store.viewingUser.id,
    filter: pagedFilter(page),
  }
}

export function loadPostComments(page = 1) {
  const args = beforeQuery(page)
  sr71$.query(S.publishedPostComments, args)
}

export function loadJobComments(page = 1) {
  const args = beforeQuery(page)
  sr71$.query(S.publishedJobComments, args)
}

export function loadVideoComments(page = 1) {
  const args = beforeQuery(page)
  sr71$.query(S.publishedVideoComments, args)
}

export function loadRepoComments(page = 1) {
  const args = beforeQuery(page)
  sr71$.query(S.publishedRepoComments, args)
}

export function onThreadChange(curThread) {
  // TODO: markRoute
  store.markState({ curThread })
  // reload()
  switch (store.curThread) {
    case THREAD.JOB: {
      return loadJobComments()
    }
    case THREAD.VIDEO: {
      return loadVideoComments()
    }
    case THREAD.REPO: {
      return loadRepoComments()
    }
    default: {
      return loadPostComments()
    }
  }
}

export function onPreview(data) {
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
    return loadPostComments()
  }
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  loadPostComments()
}
