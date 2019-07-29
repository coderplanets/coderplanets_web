// import R from 'ramda'
import { useEffect } from 'react'

import { EVENT, ERR } from '@constant'
import { asyncSuit, buildLog, send, errRescue } from '@utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:ArticleAuthorCard')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

export const loadUser = user => {
  if (!store.isLogin) return false
  const { login } = user

  store.markState({ user })
  sr71$.query(S.user, { login, userHasLogin: store.isLogin })
}

export const onListUsers = (type, data) =>
  send(EVENT.USER_LISTER_OPEN, { type, data })

export const onFollow = userId => {
  store.markState({ following: true })
  sr71$.mutate(S.follow, { userId })
}
export const onUndoFollow = userId => {
  store.markState({ following: true })
  sr71$.mutate(S.undoFollow, { userId })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('user'),
    action: ({ user }) => store.updateUser(user),
  },
  {
    match: asyncRes('follow'),
    action: ({ follow: user }) => {
      store.markState({ following: false })
      store.updateUser(user)
    },
  },
  {
    match: asyncRes('undoFollow'),
    action: ({ undoFollow: user }) => {
      store.markState({ following: false })
      store.updateUser(user)
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => store.markState({ following: false }),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      store.markState({ following: false })
      errRescue({ type: ERR.TIMEOUT, details, path: 'ArticleAuthorCard' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      store.markState({ following: false })
      errRescue({ type: ERR.NETWORK, path: 'ArticleAuthorCard' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, user) => {
  useEffect(() => {
    store = _store

    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    loadUser(user)

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, user])
}
