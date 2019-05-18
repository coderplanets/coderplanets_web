import R from 'ramda'

import {
  makeDebugger,
  dispatchEvent,
  $solver,
  asyncRes,
  TYPE,
  pagedFilter,
  THREAD,
  EVENT,
} from '@utils'
import SR71 from '@utils/async/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:UserFavorited')

let store = null

export const backToCategoryList = () => {
  store.markState({ parentView: 'CATEGORY_LIST' })
}

export const onCatSelect = curCategory => {
  store.markState({ curCategory, parentView: 'CATEGORY_DETAIL' })
  loadPosts()
}

const getQueryArgs = page => {
  store.markState({ curView: TYPE.LOADING })
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

export const reload = page => {
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
  store.markState({ curThread })
  // TODO:  change route
  reload()
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

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
