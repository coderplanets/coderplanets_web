// import R from 'ramda'
import { useEffect } from 'react'

import {
  makeDebugger,
  asyncRes,
  asyncErr,
  $solver,
  dispatchEvent,
  TYPE,
  EVENT,
  ERR,
  errRescue,
} from '@utils'

import SR71 from '@utils/async/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:UserContent')

export const followUser = userId => {
  if (!store.isLogin) return store.authWarning()

  debug('followUser: ', userId)
  store.markState({ following: true })
  sr71$.mutate(S.follow, { userId })
}

export const undoFollowUser = userId => {
  if (!store.isLogin) return store.authWarning()

  debug('undoFollowUser: ', userId)
  store.markState({ following: true })
  sr71$.mutate(S.undoFollow, { userId })
}

const getUserFollowStates = () => {
  const { login } = store.viewingUser

  sr71$.query(S.user, { login, userHasLogin: store.isLogin })
}

export const showFollowings = user => {
  const type = TYPE.USER_LISTER_FOLLOWINGS
  const data = {
    id: user.id,
    brief: user.nickname,
  }

  dispatchEvent(EVENT.USER_LISTER_OPEN, { type, data })
}

export const showFollowers = user => {
  const type = TYPE.USER_LISTER_FOLLOWERS
  const data = {
    id: user.id,
    brief: user.nickname,
  }

  dispatchEvent(EVENT.USER_LISTER_OPEN, { type, data })
}

export const tabOnChange = activeThread => {
  store.markState({ activeThread })
  store.markRoute({ tab: activeThread })
}

// ###############################
// Data & Error handlers
// ###############################

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
    match: asyncRes('user'),
    action: ({ user }) => {
      store.updateViewingUser(user)
      store.markState({ following: false })
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      store.markState({ following: false })
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      store.markState({ following: false })
      errRescue({ type: ERR.TIMEOUT, details, path: 'UserContent' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      store.markState({ following: false })
      errRescue({ type: ERR.NETWORK, path: 'UserContent' })
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
        if (!sub$) return false
        sub$.unsubscribe()
      }
    },
    [_store]
  )
}
