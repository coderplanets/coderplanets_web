import { useEffect } from 'react'

import type { TID, TThread, TUser } from '@/spec'
import { TYPE, EVENT, ERR } from '@/constant'

import asyncSuit from '@/utils/async'
import { send, errRescue } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import type { TStore } from './store'

import S from './schema'

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

/* eslint-disable-next-line */
const log = buildLog('L:UserContent')

export const followUser = (userId: TID): void => {
  if (!store.isLogin) return store.authWarning()

  log('followUser: ', userId)
  store.mark({ following: true })
  sr71$.mutate(S.follow, { userId })
}

export const undoFollowUser = (userId: TID): void => {
  if (!store.isLogin) return store.authWarning()

  log('undoFollowUser: ', userId)
  store.mark({ following: true })
  sr71$.mutate(S.undoFollow, { userId })
}

const getUserFollowStates = (): void => {
  const { login } = store.viewingUser

  sr71$.query(S.user, { login, userHasLogin: store.isLogin })
}

export const showFollowings = (user: TUser): void => {
  const type = TYPE.USER_LISTER_FOLLOWINGS
  const data = {
    id: user.id,
    brief: user.nickname,
  }

  send(EVENT.USER_LISTER_OPEN, { type, data })
}

export const showFollowers = (user: TUser): void => {
  const type = TYPE.USER_LISTER_FOLLOWERS
  const data = {
    id: user.id,
    brief: user.nickname,
  }

  send(EVENT.USER_LISTER_OPEN, { type, data })
}

export const tabOnChange = (activeThread: TThread): void => {
  store.mark({ activeThread })
  store.markRoute({ tab: activeThread })
}

// ###############################
// Data & Error handlers
// ###############################

const loadEditableCommunities = () => {
  const { login } = store.viewingUser
  const filter = { page: 1, size: 7 }

  sr71$.query(S.editableCommunities, { login, filter })
}

const loadPublishedWorks = (): void => {
  const { viewingUser: user } = store
  if (!user.isMaker) return

  const filter = { page: 1, size: 10 }
  sr71$.query(S.pagedPublishedWorks, { login: user.login, filter })
}

const DataSolver = [
  {
    match: asyncRes('follow'),
    action: () => getUserFollowStates(),
  },
  {
    match: asyncRes('undoFollow'),
    action: () => getUserFollowStates(),
  },
  {
    match: asyncRes('editableCommunities'),
    action: ({ editableCommunities }) => {
      store.mark({ pagedEditableCommunities: editableCommunities })
      loadPublishedWorks()
    },
  },
  {
    match: asyncRes('pagedPublishedWorks'),
    action: ({ pagedPublishedWorks }) => {
      store.mark({ pagedWorks: pagedPublishedWorks })
    },
  },
  {
    match: asyncRes('user'),
    action: ({ user }) => {
      store.updateViewingUser(user)
      store.mark({ following: false })
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      store.mark({ following: false })
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      store.mark({ following: false })
      errRescue({ type: ERR.TIMEOUT, details, path: 'UserContent' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      store.mark({ following: false })
      errRescue({ type: ERR.NETWORK, path: 'UserContent' })
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
    // TODO: query before judage
    loadEditableCommunities()

    return () => {
      if (!sub$) return
      sub$.unsubscribe()
    }
  }, [_store])
}
