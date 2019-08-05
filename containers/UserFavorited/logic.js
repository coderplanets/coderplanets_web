import R from 'ramda'
import { useEffect } from 'react'

import { TYPE, EVENT, THREAD } from '@constant'
import { asyncSuit, buildLog, send, pagedFilter } from '@utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:UserFavorited')

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

export const backToCategoryList = () => {
  store.mark({ parentView: 'CATEGORY_LIST' })
}

export const onCatSelect = curCategory => {
  store.mark({ curCategory, parentView: 'CATEGORY_DETAIL' })
  loadPosts()
}

const getQueryArgs = page => {
  store.mark({ curView: TYPE.LOADING })
  // args
  return {
    userId: store.viewingUser.id,
    filter: pagedFilter(page),
    categoryId: store.curCategory.id,
  }
}

export const loadPosts = (page = 1) =>
  sr71$.query(S.favoritedPosts, getQueryArgs(page))

export const loadJobs = (page = 1) =>
  sr71$.query(S.favoritedJobs, getQueryArgs(page))

export const loadVideos = (page = 1) =>
  sr71$.query(S.favoritedVideos, getQueryArgs(page))

export const loadRepos = (page = 1) =>
  sr71$.query(S.favoritedRepos, getQueryArgs(page))

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

export const changeFavoriteThread = curThread => {
  store.mark({ curThread })
  // TODO:  change route
  onReload()
}

export const onPreview = data => {
  const { curThread: thread } = store

  send(EVENT.PREVIEW_OPEN, {
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
    match: asyncRes('favoritedPosts'),
    action: ({ favoritedPosts }) => store.markPagedData(favoritedPosts),
  },
  {
    match: asyncRes('favoritedJobs'),
    action: ({ favoritedJobs }) => store.markPagedData(favoritedJobs),
  },
  {
    match: asyncRes('favoritedVideos'),
    action: ({ favoritedVideos }) => store.markPagedData(favoritedVideos),
  },
  {
    match: asyncRes('favoritedRepos'),
    action: ({ favoritedRepos }) => store.markPagedData(favoritedRepos),
  },
]
const ErrSolver = []

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(() => {
    store = _store
    if (sub$) return false
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      sub$.unsubscribe()
      sub$ = null
    }
  }, [_store])
}
