import { useEffect } from 'react'

import { EVENT, ERR, ARTICLE_THREAD } from '@/constant'
import asyncSuit from '@/utils/async'
import { buildLog } from '@/utils/logger'
import { singular, errRescue } from '@/utils/helper'

import type { TCommunity } from '@/spec'
import type { TStore } from './store'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:CommunityJoinBadge')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
/* @ts-ignore */
const sr71$ = new SR71({ receive: [EVENT.COMMUNITY_CHANGE] })

let sub$ = null
let store: TStore | undefined

const loadCommunity = () => {
  const userHasLogin = store.isLogin
  const { raw } = store.curCommunity

  markLoading(true)

  sr71$.query(S.community, { raw, userHasLogin })
}

export const onSubscribe = (community: TCommunity): void => {
  if (!store.isLogin) return store.authWarning()
  if (store.subscribeLoading) return

  // log('onSubscribe: ', community)
  store.mark({ subscribeLoading: true })
  sr71$.mutate(S.subscribeCommunity, { communityId: community.id })
}

export const onCancleSubscribe = (community: TCommunity): void => {
  if (!store.isLogin) return store.authWarning()
  if (store.subscribeLoading) return

  store.mark({ subscribeLoading: true })
  sr71$.mutate(S.unsubscribeCommunity, { communityId: community.id })
}

const markLoading = (maybe = true): void =>
  store.mark({ loading: maybe, subscribeLoading: maybe })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('community'),
    action: ({ community }) => {
      markLoading(false)
      const { subPath } = store.curRoute
      log('community: ', community)
      const activeThread = singular(subPath) || ARTICLE_THREAD.POST
      store.setViewing({ community, activeThread })
    },
  },
  {
    match: asyncRes('subscribeCommunity'),
    action: ({ subscribeCommunity }) => {
      store.addSubscribedCommunity(subscribeCommunity)
      loadCommunity()
    },
  },
  {
    match: asyncRes('unsubscribeCommunity'),
    action: ({ unsubscribeCommunity }) => {
      store.removeSubscribedCommunity(unsubscribeCommunity)
      loadCommunity()
    },
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => loadCommunity(),
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
      errRescue({ type: ERR.TIMEOUT, details, path: 'AccountEditor' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      markLoading(false)
      errRescue({ type: ERR.NETWORK, path: 'CommunityDigest' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      if (sub$ && !store.loading) {
        sr71$.stop()
        sub$.unsubscribe()
      }
      // log('effect uninit')
    }
  }, [_store])
}
