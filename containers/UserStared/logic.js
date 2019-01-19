import R from 'ramda'

import {
  makeDebugger,
  dispatchEvent,
  $solver,
  asyncRes,
  asyncErr,
  ERR,
  TYPE,
  EVENT,
  THREAD,
  pagedFilter,
} from '../../utils'

import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:UserStared')

let store = null

const getQueryArgs = page => {
  store.markState({ curView: TYPE.LOADING })
  // args
  return {
    userId: store.viewingUser.id,
    filter: pagedFilter(page),
  }
}

export const loadPosts = (page = 1) =>
  sr71$.query(S.staredPosts, getQueryArgs(page))

export const loadJobs = (page = 1) =>
  sr71$.query(S.staredJobs, getQueryArgs(page))

export const loadVideos = (page = 1) =>
  sr71$.query(S.staredVideos, getQueryArgs(page))

export const reload = page => {
  switch (store.curThread) {
    case THREAD.JOB:
      return loadJobs(page)

    case THREAD.VIDEO:
      return loadVideos(page)

    default:
      return loadPosts(page)
  }
}

export const onThreadChange = curThread => {
  // TODO: markRoute
  store.markState({ curThread })
  reload()
}

export const onPreview = data => {
  const { curThread: thread } = store

  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE[`PREVIEW_${R.toUpper(thread)}_VIEW`],
    thread: store.curThread,
    data,
  })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('staredPosts'),
    action: ({ staredPosts }) => store.markPagedData(staredPosts),
  },
  {
    match: asyncRes('staredJobs'),
    action: ({ staredJobs }) => store.markPagedData(staredJobs),
  },
  {
    match: asyncRes('staredVideos'),
    action: ({ staredVideos }) => store.markPagedData(staredVideos),
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: ({ details }) => {
      debug('ERR.GRAPHQL -->', details)
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

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadPosts()
}
