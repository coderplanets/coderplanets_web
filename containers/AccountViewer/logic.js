// import R from 'ramda'
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
} from 'utils'

import SR71 from 'utils/network/sr71'
import S from './schema'

/* eslint-disable-next-line */
const debug = makeDebugger('L:AccountViewer')

const sr71$ = new SR71({
  resv_event: [EVENT.LOGIN],
})

let store = null
let sub$ = null

export const loadAccount = () => {
  markLoading(true)

  store.markState({ viewingType: 'account' })
  return sr71$.query(S.user, {})
}

export const loadUser = user => {
  store.markState({ viewingType: 'user', viewingUser: user })
  sr71$.query(S.user, { login: user.login })
}

export const changeTheme = name => store.changeTheme(name)

export const editProfile = () =>
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_ACCOUNT_EDIT })

export const onLogout = () => {
  store.logout()

  setTimeout(() => {
    Global.location.reload(false)
  }, 2000)
  // dispatchEvent(EVENT.LOGOUT)
}

const markLoading = (maybe = true) => store.markState({ loading: maybe })

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('user'),
    action: ({ user }) => {
      markLoading(false)
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
    action: () => markLoading(false),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      markLoading(false)
      errRescue({ type: ERR.TIMEOUT, details, path: 'AccountViewer' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      markLoading(false)
      errRescue({ type: ERR.NETWORK, path: 'AccountViewer' })
    },
  },
]

export const loadUserInfo = user => {
  if (user) return loadUser(user)
  loadAccount()
}

export const init = (_store, user) => {
  store = _store

  if (sub$) return loadUserInfo(user)
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  return loadUserInfo(user)
}

export const uninit = () => {
  if (store.loading || !sub$) return false
  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
