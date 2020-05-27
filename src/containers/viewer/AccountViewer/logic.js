import { useEffect } from 'react'

import { TYPE, EVENT, ERR } from '@/constant'
import { asyncSuit, buildLog, send, Global, errRescue } from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:AccountViewer')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  recieve: [EVENT.LOGIN],
})

let store = null
let sub$ = null

export const loadAccount = () => {
  store.mark({ viewingType: 'account', loading: true })
  return sr71$.query(S.user, {})
}

export const loadUser = user => {
  store.mark({ viewingType: 'user', viewingUser: user })
  sr71$.query(S.user, { login: user.login })
}

export const changeTheme = name => {
  store.changeTheme(name)
  send(EVENT.SET_C11N, { data: { theme: name } })
}

export const editProfile = () =>
  send(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_ACCOUNT_EDIT })

export const onLogout = () => {
  store.logout()

  setTimeout(() => {
    Global.location.reload(false)
  }, 2000)
  // send(EVENT.LOGOUT)
}

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('user'),
    action: ({ user }) => {
      store.mark({ loading: false })
      if (store.viewingType === 'user') {
        return store.mark({ viewingUser: user })
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
    action: () => store.mark({ loading: false }),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      store.mark({ loading: false })
      errRescue({ type: ERR.TIMEOUT, details, path: 'AccountViewer' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      store.mark({ loading: false })
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
  useEffect(() => {
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    loadUserInfo(user)

    return () => {
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, user])
}
