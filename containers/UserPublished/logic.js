import R from 'ramda'
import { useEffect } from 'react'

import {
  makelogger,
  dispatchEvent,
  $solver,
  asyncRes,
  asyncErr,
  EVENT,
  TYPE,
  ERR,
  THREAD,
  pagedFilter,
  errRescue,
} from '@utils'

import SR71 from '@utils/async/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const log = makelogger('L:UserPublished')

const getQueryArgs = page => {
  store.markState({ curView: TYPE.LOADING })
  // args
  return {
    userId: store.viewingUser.id,
    filter: pagedFilter(page),
  }
}
export const loadPosts = (page = 1) =>
  sr71$.query(S.publishedPosts, getQueryArgs(page))

export const loadJobs = (page = 1) =>
  sr71$.query(S.publishedJobs, getQueryArgs(page))

export const loadVideos = (page = 1) =>
  sr71$.query(S.publishedVideos, getQueryArgs(page))

export const loadRepos = (page = 1) =>
  sr71$.query(S.publishedRepos, getQueryArgs(page))

export const onReload = page => {
  switch (store.curThread) {
    case THREAD.JOB:
      return loadJobs(page)

    case THREAD.VIDEO:
      return loadVideos(page)

    case THREAD.REPO:
      return loadRepos(page)

    default:
      return loadPosts(page)
  }
}

export const onThreadChange = curThread => {
  store.markState({ curThread })
  onReload()
}

export const onPreview = data => {
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
    match: asyncErr(ERR.GRAPHQL),
    action: () => {},
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'UserPublished' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'UserPublished' }),
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(
    () => {
      store = _store
      // log('effect init')
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
      loadPosts()

      return () => {
        // log('effect uninit')
        if (store.curView === TYPE.LOADING || !sub$) return false
        log('===== do uninit')
        sr71$.stop()
        sub$.unsubscribe()
        sub$ = null
      }
    },
    [_store]
  )
}
