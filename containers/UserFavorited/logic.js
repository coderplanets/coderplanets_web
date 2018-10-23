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
} from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:UserFavorited')
/* eslint-enable no-unused-vars */

let store = null

export const backToCategoryList = () => {
  store.markState({ parentView: 'CATEGORY_LIST' })
}

export const onCatSelect = curCategory => {
  store.markState({ curCategory, parentView: 'CATEGORY_DETAIL' })
  loadPosts()
}

const beforeQuery = page => {
  store.markState({ curView: TYPE.LOADING })
  // args
  return {
    userId: store.viewingUser.id,
    filter: pagedFilter(page),
    categoryId: store.curCategory.id,
  }
}

export function loadPosts(page = 1) {
  const args = beforeQuery(page)
  sr71$.query(S.favoritedPosts, args)
}

export function loadJobs(page = 1) {
  const args = beforeQuery(page)
  sr71$.query(S.favoritedJobs, args)
}

export function loadVideos(page = 1) {
  const args = beforeQuery(page)
  sr71$.query(S.favoritedVideos, args)
}

export function loadRepos(page = 1) {
  const args = beforeQuery(page)
  sr71$.query(S.favoritedRepos, args)
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

export const changeFavoriteThread = curThread => {
  store.markState({ curThread })
  // TODO:  change route
  reload()
}

export function onTitleSelect(data) {
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

export function init(_store) {
  if (store) {
    //  return loadPosts()
    return false
  }
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  //  loadPosts()
}
