import { useEffect } from 'react'

import { TYPE, EVENT, ERR } from '@/constant'
import {
  asyncSuit,
  buildLog,
  send,
  subPath2Thread,
  thread2Subpath,
  errRescue,
} from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:CommunityBanner')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({ receive: [EVENT.COMMUNITY_CHANGE] })

let sub$ = null
let store = null

const loadCommunity = () => {
  const userHasLogin = store.isLogin
  const { raw } = store.curCommunity

  markLoading(true)

  sr71$.query(S.community, { raw, userHasLogin })
}

export const tabberChange = (activeThread) => {
  const subPath = thread2Subpath(activeThread)
  // log('EVENT.activeThread -----> ', activeThread)
  // log('EVENT.subPath -----> ', subPath)

  store.markRoute({ subPath })
  store.setViewing({ activeThread })

  send(EVENT.TABBER_CHANGE, { data: { activeThread, topic: subPath } })
}

export const onSubscribe = (community) => {
  if (!store.isLogin) return store.authWarning()
  if (store.subscribeLoading) return false

  // log('onSubscribe: ', community)
  store.mark({ subscribeLoading: true })
  sr71$.mutate(S.subscribeCommunity, { communityId: community.id })
}

export const onUndoSubscribe = (community) => {
  if (!store.isLogin) return store.authWarning()
  if (store.subscribeLoading) return false

  // log('onUndoSubscribe: ', community)
  store.mark({ subscribeLoading: true })
  sr71$.mutate(S.unsubscribeCommunity, { communityId: community.id })
}

export const onShowEditorList = () => {
  const type = TYPE.USER_LISTER_COMMUNITY_EDITORS
  const data = {
    id: store.viewing.community.id,
    brief: store.viewing.community.title,
  }

  send(EVENT.USER_LISTER_OPEN, { type, data })
}

export const onShowSubscriberList = () => {
  const type = TYPE.USER_LISTER_COMMUNITY_SUBSCRIBERS
  const data = {
    id: store.viewing.community.id,
    brief: store.viewing.community.title,
  }

  send(EVENT.USER_LISTER_OPEN, { type, data })
}

export const toggleDescExpand = () => {
  const { descExpand } = store

  store.mark({ descExpand: !descExpand })
}

const markLoading = (maybe = true) =>
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
      store.setViewing({
        community,
        activeThread: subPath2Thread(subPath),
      })
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
      errRescue({ type: ERR.NETWORK, path: 'CommunityBanner' })
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
      if (sub$ && !store.loading) {
        sr71$.stop()
        sub$.unsubscribe()
      }
      // log('effect uninit')
    }
  }, [_store])
}
