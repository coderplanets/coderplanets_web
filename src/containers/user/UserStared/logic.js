import R from 'ramda'
import { useEffect } from 'react'

import { TYPE, EVENT, ERR, THREAD } from '@/constant'
import { asyncSuit, buildLog, send, pagedFilter, errRescue } from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:UserStared')

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

export const loadPosts = (page = 1) =>
  sr71$.query(S.staredPosts, getQueryArgs(page))

export const loadJobs = (page = 1) =>
  sr71$.query(S.staredJobs, getQueryArgs(page))

export const loadVideos = (page = 1) =>
  sr71$.query(S.staredVideos, getQueryArgs(page))

export const onReload = page => {
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
  store.mark({ curThread })
  onReload()
}

export const onPreview = data => {
  const { curThread: thread } = store

  send(EVENT.PREVIEW_OPEN, {
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
    action: () => {},
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'UserStared' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'UserStared' }),
  },
]

// ###############################
// init & uninit handlers
// ###############################

export const useInit = _store => {
  useEffect(() => {
    store = _store

    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    loadPosts()
    return () => {
      if (!sub$) return false
      sub$.unsubscribe()
    }
  }, [_store])
}
