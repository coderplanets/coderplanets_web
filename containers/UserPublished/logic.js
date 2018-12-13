import R from 'ramda'

import {
  makeDebugger,
  dispatchEvent,
  $solver,
  asyncRes,
  asyncErr,
  EVENT,
  TYPE,
  ERR,
  THREAD,
  pagedFilter,
} from '../../utils'

import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:UserPublished')
/* eslint-enable no-unused-vars */

let store = null

const beforeQuery = page => {
  store.markState({ curView: TYPE.LOADING })
  // args
  return {
    userId: store.viewingUser.id,
    filter: pagedFilter(page),
  }
}
export const loadPosts = (page = 1) => {
  const args = beforeQuery(page)
  sr71$.query(S.publishedPosts, args)
}

export const loadJobs = (page = 1) => {
  const args = beforeQuery(page)
  sr71$.query(S.publishedJobs, args)
}

export const loadVideos = (page = 1) => {
  const args = beforeQuery(page)
  sr71$.query(S.publishedVideos, args)
}

export const loadRepos = (page = 1) => {
  const args = beforeQuery(page)
  sr71$.query(S.publishedRepos, args)
}

export function reload(page) {
  switch (store.curThread) {
    case THREAD.JOB: {
      return loadJobs(page)
    }
    case THREAD.VIDEO: {
      return loadVideos(page)
    }
    case THREAD.REPO: {
      return loadRepos(page)
    }
    default: {
      return loadPosts(page)
    }
  }
}

export function onThreadChange(curThread) {
  // TODO: markRoute
  store.markState({ curThread })
  reload()
}

export function onTitleSelect(data) {
  debug('onTitleSelect --> ', data)
  debug('onTitleSelect thread --> ', store.curThread)
  const { curThread: thread } = store

  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE[`PREVIEW_${R.toUpper(thread)}_VIEW`],
    thread,
    data,
  })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('publishedPosts'),
    action: ({ publishedPosts }) => store.markPagedData(publishedPosts),
  },
  {
    match: asyncRes('publishedJobs'),
    action: ({ publishedJobs }) => store.markPagedData(publishedJobs),
  },
  {
    match: asyncRes('publishedVideos'),
    action: ({ publishedVideos }) => store.markPagedData(publishedVideos),
  },
  {
    match: asyncRes('publishedRepos'),
    action: ({ publishedRepos }) => store.markPagedData(publishedRepos),
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

  if (sub$) return loadPosts()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  loadPosts()
}

export function uninit() {
  if (store.curView === TYPE.LOADING) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
