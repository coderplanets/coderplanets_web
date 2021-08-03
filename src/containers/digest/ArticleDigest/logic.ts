import { useEffect } from 'react'
import { merge, toUpper } from 'ramda'

import type { TScrollDirection } from '@/spec'
import { TYPE, EVENT, ERR, THREAD } from '@/constant'
import asyncSuit from '@/utils/async'
import { send, errRescue } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import type { TStore } from './store'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:ArticleDigest')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  /* @ts-ignore */
  receive: [EVENT.REFRESH_REACTIONS],
})

let sub$ = null
let store = null

export const inAnchor = (): void => {
  if (store) store.mark({ inViewport: true })
}

export const outAnchor = (): void => {
  if (store) store.mark({ inViewport: false })
}

export const onReaction = (action, userDid, { id }): void => {
  if (!store.isLogin) return store.authWarning()
  if (store.loading) return
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

export const onListReactionUsers = (type, data): void =>
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
    action: () => {
      //
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) =>
      errRescue({ type: ERR.TIMEOUT, details, path: 'AccountEditor' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'ArticleDigest' }),
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (
  _store: TStore,
  scrollDirection: TScrollDirection,
): void => {
  useEffect(() => {
    store = _store
    // log('effect init')
    if (!sub$) {
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    }

    store.mark({ scrollDirection })

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, scrollDirection])
}
