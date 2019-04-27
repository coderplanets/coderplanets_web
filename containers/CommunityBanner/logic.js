import { useEffect } from 'react'
// import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  ERR,
  EVENT,
  TYPE,
  dispatchEvent,
  subPath2Thread,
  thread2Subpath,
  errRescue,
} from 'utils'

import SR71 from 'utils/async/sr71'
import S from './schema'

const sr71$ = new SR71({ resv_event: [EVENT.COMMUNITY_CHANGE] })
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:CommunityBanner')

let store = null

const loadCommunity = () => {
  const userHasLogin = store.isLogin
  const { raw } = store.curCommunity

  markLoading(true)

  sr71$.query(S.community, { raw, userHasLogin })
}

export const tabberChange = activeThread => {
  const subPath = thread2Subpath(activeThread)
  // debug('EVENT.activeThread -----> ', activeThread)
  // debug('EVENT.subPath -----> ', subPath)

  store.markRoute({ subPath })
  store.setViewing({ activeThread })

  dispatchEvent(EVENT.TABBER_CHANGE, { data: { activeThread, topic: subPath } })
}

export const onSubscribe = community => {
  if (!store.isLogin) return store.authWarning()
  if (store.subscribeLoading) return false

  // debug('onSubscribe: ', community)
  store.markState({ subscribeLoading: true })
  sr71$.mutate(S.subscribeCommunity, { communityId: community.id })
}

export const onUndoSubscribe = community => {
  if (!store.isLogin) return store.authWarning()
  if (store.subscribeLoading) return false

  // debug('onUndoSubscribe: ', community)
  store.markState({ subscribeLoading: true })
  sr71$.mutate(S.unsubscribeCommunity, { communityId: community.id })
}

export const onShowEditorList = () => {
  const type = TYPE.USER_LISTER_COMMUNITY_EDITORS
  const data = {
    id: store.viewing.community.id,
    brief: store.viewing.community.title,
  }

  dispatchEvent(EVENT.USER_LISTER_OPEN, { type, data })
}

export const onShowSubscriberList = () => {
  const type = TYPE.USER_LISTER_COMMUNITY_SUBSCRIBERS
  const data = {
    id: store.viewing.community.id,
    brief: store.viewing.community.title,
  }

  dispatchEvent(EVENT.USER_LISTER_OPEN, { type, data })
}

const markLoading = (maybe = true) =>
  store.markState({ loading: maybe, subscribeLoading: maybe })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('community'),
    action: ({ community }) => {
      markLoading(false)
      const { subPath } = store.curRoute
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
export const useInit = _store => {
  useEffect(
    () => {
      store = _store
      // debug('effect init')
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

      return () => {
        // debug('effect uninit')
        sr71$.stop()
        sub$.unsubscribe()
      }
    },
    [_store]
  )
}
