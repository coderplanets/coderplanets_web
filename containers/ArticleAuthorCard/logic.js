// import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  dispatchEvent,
  ERR,
  EVENT,
} from '../../utils'

import SR71 from '../../utils/network/sr71'

import S from './schema'

/* eslint-disable-next-line */
const debug = makeDebugger('L:ArticleAuthorCard')

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
  dispatchEvent(EVENT.USER_LISTER_OPEN, { type, data })

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
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
      store.markState({ following: false })
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
      store.markState({ following: false })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
      store.markState({ following: false })
    },
  },
]

export const init = (_store, user) => {
  store = _store

  debug(store)
  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadUser(user)
}

export const uninit = () => {
  if (!sub$) return false
  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
