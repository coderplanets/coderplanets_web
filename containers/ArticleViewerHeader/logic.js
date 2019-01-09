import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  dispatchEvent,
  ERR,
  TYPE,
  EVENT,
  THREAD,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:ArticleViewerHeader')
/* eslint-enable no-unused-vars */

const sr71$ = new SR71()
let sub$ = null
let store = null

export function onReaction(thread, action, userDid, { id }) {
  /* debug('onReaction thread: ', thread) */
  if (action === TYPE.FAVORITE) {
    // call favoriteSetter
    return dispatchEvent(EVENT.SET_FAVORITE_CONTENT, {
      data: { thread },
    })
  }
  // debug('onReaction userDid: ', store.isLogin)
  /* debug('onReaction id: ', id) */

  const args = { id, thread: R.toUpper(thread), action }

  return userDid
    ? sr71$.mutate(S.undoReaction, args)
    : sr71$.mutate(S.reaction, args)
}

export const onListReactionUsers = (type, data) =>
  dispatchEvent(EVENT.USER_LISTER_OPEN, { type, data })

const afterReaction = id => {
  const thread = store.activeThread
  switch (thread) {
    case THREAD.JOB: {
      return sr71$.query(S.jobReactionRes, { id })
    }
    case THREAD.VIDEO: {
      return sr71$.query(S.videoReactionRes, { id })
    }
    case THREAD.REPO: {
      return sr71$.query(S.repoReactionRes, { id })
    }
    default: {
      return sr71$.query(S.postReactionRes, { id })
    }
  }
}

const markLoading = (maybe = true) => store.markState({ loading: maybe })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('post'),
    action: ({ post }) => {
      store.setViewing({ post: R.merge(store.viewingData, post) })
      store.syncViewingItem(post)
      markLoading(false)
    },
  },
  {
    match: asyncRes('job'),
    action: ({ job }) => {
      store.setViewing({ job: R.merge(store.viewingData, job) })
      store.syncViewingItem(job)
      markLoading(false)
    },
  },
  {
    match: asyncRes('video'),
    action: ({ video }) => {
      markLoading(false)
      store.setViewing({ video: R.merge(store.viewingData, video) })
      // store.syncViewingItem(video)
    },
  },
  {
    match: asyncRes('reaction'),
    action: ({ reaction: { id } }) => afterReaction(id),
  },
  {
    match: asyncRes('undoReaction'),
    action: ({ undoReaction: { id } }) => afterReaction(id),
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

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export function uninit() {
  if (!sub$) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
