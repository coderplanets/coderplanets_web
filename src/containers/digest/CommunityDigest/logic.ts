import { useEffect } from 'react'

import type { TID } from '@/spec'
import { TYPE, EVENT, ERR, ARTICLE_THREAD } from '@/constant'

import asyncSuit from '@/utils/async'
import { errRescue, singular, listUsers } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import type { TStore } from './store'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:CommunityDigest')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
// @ts-ignore
const sr71$ = new SR71({ receive: [EVENT.COMMUNITY_CHANGE] })

let sub$ = null
let store: TStore | undefined

export const subscribeCommunity = (communityId: TID): void => {
  sr71$.mutate(S.subscribeCommunity, { communityId })
}

export const unsubscribeCommunity = (communityId: TID): void => {
  sr71$.mutate(S.unsubscribeCommunity, { communityId })
}

const loadCommunity = (): void => {
  const userHasLogin = store.isLogin
  const { raw } = store.curCommunity

  markLoading(true)

  sr71$.query(S.community, { raw, userHasLogin })
}

// 查看当前社区志愿者列表
export const onShowEditorList = (): void => {
  listUsers(TYPE.USER_LISTER_COMMUNITY_EDITORS)
}

export const onShowSubscriberList = (): void => {
  // const type = TYPE.USER_LISTER_COMMUNITY_SUBSCRIBERS
  // const data = {
  //   id: store.curCommunity.id,
  //   brief: store.curCommunity.title,
  // }
  // send(EVENT.USER_LISTER_OPEN, { type, data })

  listUsers(TYPE.USER_LISTER_COMMUNITY_SUBSCRIBERS)
}

const markLoading = (maybe = true) => store.mark({ loading: maybe })

/**
 * set digest visible in current viewport
 * @param {Boolean} inView
 */
export const setViewport = (inViewport: boolean): void => {
  store.mark({ inViewport })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('community'),
    action: ({ community }) => {
      markLoading(false)
      const { subPath } = store.curRoute
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
    action: () => {
      loadCommunity()
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
