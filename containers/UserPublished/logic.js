// import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
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

export const loadPosts = (page = 1) => {
  const args = {
    userId: store.viewingUser.id,
    filter: pagedFilter(page),
  }

  store.markState({ curView: TYPE.LOADING })
  sr71$.query(S.publishedPosts, args)
}

export function onPageChange(page) {
  switch (store.curThread) {
    case THREAD.JOB: {
      return debug('load job')
    }
    default: {
      return loadPosts(page)
    }
  }
}

export function onThreadChange(curThread) {
  // TODO: markRoute
  store.markState({ curThread })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('publishedPosts'),
    action: ({ publishedPosts: pagedPosts }) => {
      let curView = TYPE.RESULT
      if (pagedPosts.entries.length === 0) {
        curView = TYPE.RESULT_EMPTY
      }
      store.markState({ curView, pagedPosts })
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
    return loadPosts()
  }
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  return loadPosts()
}
