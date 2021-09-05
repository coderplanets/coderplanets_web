import { useEffect } from 'react'
import { toUpper, merge } from 'ramda'

import { TYPE, EVENT, ERR, THREAD } from '@/constant'

import asyncSuit from '@/utils/async'
import { send, errRescue } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:ArticleViewerHeader')

// EVENT.REFRESH_REACTIONS handles FAVORITE action when
// user set it from FavoriteSetter
const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  receive: [EVENT.REFRESH_REACTIONS],
})

let sub$ = null
let store = null

export const onReaction = (action, userDid, { id }) => {
  if (!store.isLogin) return store.authWarning()
  if (store.loading) return false

  const thread = store.activeThread

  store.mark({ action })
  /* log('onReaction thread: ', thread) */
  if (action === TYPE.FAVORITE) {
    // call favoriteSetter
    return send(EVENT.SET_FAVORITE_CONTENT, {
      data: { thread },
    })
  }

  markLoading(true)
  const args = { id, thread: toUpper(thread), action }

  return userDid
    ? sr71$.mutate(S.undoReaction, args)
    : sr71$.mutate(S.reaction, args)
}

export const onListReactionUsers = (type, data) =>
  send(EVENT.USER_LISTER_OPEN, {
    type,
    data: { ...data, thread: store.activeThread },
  })

const afterReaction = (id) => {
  const thread = store.activeThread
  switch (thread) {
    case THREAD.JOB:
      return sr71$.query(S.job, { id })

    case THREAD.REPO:
      return sr71$.query(S.repo, { id })

    default:
      return sr71$.query(S.post, { id })
  }
}

const markLoading = (maybe = true) => store.mark({ loading: maybe })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('post'),
    action: ({ post }) => {
      store.setViewing({ post: merge(store.viewingArticle, post) })
      store.syncViewingItem(post)
      markLoading(false)
    },
  },
  {
    match: asyncRes('job'),
    action: ({ job }) => {
      store.setViewing({ job: merge(store.viewingArticle, job) })
      store.syncViewingItem(job)
      markLoading(false)
    },
  },
  {
    match: asyncRes('repo'),
    action: ({ repo }) => {
      store.setViewing({ repo: merge(store.viewingArticle, repo) })
      store.syncViewingItem(repo)
      markLoading(false)
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
  {
    match: asyncRes(EVENT.REFRESH_REACTIONS),
    action: (e) => {
      markLoading(true)
      const { id } = e[EVENT.REFRESH_REACTIONS].data
      afterReaction(id)
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => markLoading(false),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      markLoading(false)
      errRescue({ type: ERR.TIMEOUT, details, path: 'ArticleViewerHeader' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      markLoading(false)
      errRescue({ type: ERR.NETWORK, path: 'ArticleViewerHeader' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store) => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
