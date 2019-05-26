// import R from 'ramda'
import { useEffect } from 'react'

import {
  asyncRes,
  asyncErr,
  makeDebugger,
  $solver,
  ERR,
  dispatchEvent,
  EVENT,
  TYPE,
  Global,
  errRescue,
} from '@utils'

import SR71 from '@utils/async/sr71'
import S from './schema'

/* eslint-disable-next-line */
const debug = makeDebugger('L:AccountViewer')

const sr71$ = new SR71({
  resv_event: [EVENT.LOGIN],
})

let store = null
let sub$ = null

export const loadAccount = () => {
  store.markState({ viewingType: 'account', loading: true })
  return sr71$.query(S.user, {})
}

export const loadUser = user => {
  store.markState({ viewingType: 'user', viewingUser: user })
  sr71$.query(S.user, { login: user.login })
}

export const changeTheme = name => {
  store.changeTheme(name)
  dispatchEvent(EVENT.SET_C11N, { data: { theme: name } })
}

export const editProfile = () =>
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_ACCOUNT_EDIT })

export const onLogout = () => {
  store.logout()

  setTimeout(() => {
    Global.location.reload(false)
  }, 2000)
  // dispatchEvent(EVENT.LOGOUT)
}

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('user'),
    action: ({ user }) => {
      store.markState({ loading: false })
      if (store.viewingType === 'user') {
        return store.markState({ viewingUser: user })
      }
      return store.updateAccount(user)
    },
  },
  {
    match: asyncRes(EVENT.LOGIN),
    action: () => loadAccount(),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => store.markState({ loading: false }),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      store.markState({ loading: false })
      errRescue({ type: ERR.TIMEOUT, details, path: 'AccountViewer' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      store.markState({ loading: false })
      errRescue({ type: ERR.NETWORK, path: 'AccountViewer' })
    },
  },
]

export const loadUserInfo = user => {
  if (user) return loadUser(user)
  loadAccount()
}

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, user) => {
  useEffect(
    () => {
      store = _store
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

      loadUserInfo(user)

      return () => {
        sr71$.stop()
        sub$.unsubscribe()
      }
    },
    [_store, user]
  )
}
