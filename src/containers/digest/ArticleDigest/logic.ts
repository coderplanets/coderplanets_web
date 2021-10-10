import { useEffect } from 'react'
import { merge } from 'ramda'

import type { TScrollDirection } from '@/spec'
import { EVENT, ERR } from '@/constant'
import asyncSuit from '@/utils/async'
import { send, errRescue } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import type { TStore } from './store'
// import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:ArticleDigest')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

export const inAnchor = (): void => {
  if (store) store.mark({ inViewport: true })
}

export const outAnchor = (): void => {
  if (store) store.mark({ inViewport: false })
}

export const onListReactionUsers = (type, data): void =>
  send(EVENT.USER_LISTER_OPEN, {
    type,
    data: { ...data, thread: store.activeThread },
  })

const markLoading = (maybe = true) => store.mark({ loading: maybe })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('post'),
    action: ({ post }) => {
      store.setViewing({ post: merge(store.viewingArticle, post) })
      store.syncArticle(post)
      markLoading(false)
    },
  },
  {
    match: asyncRes('job'),
    action: ({ job }) => {
      store.setViewing({ job: merge(store.viewingArticle, job) })
      store.syncArticle(job)
      markLoading(false)
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
