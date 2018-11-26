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
} from '../../utils'
import SR71 from '../../utils/network/sr71'
import S from './schema'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:AccountViewer')
/* eslint-enable no-unused-vars */

const sr71$ = new SR71({
  resv_event: [EVENT.LOGIN],
})

let store = null
let sub$ = null

export const loadAccount = () => {
  store.markState({ viewingType: 'account' })
  return sr71$.query(S.user, {})
}

export const loadUser = user => {
  store.markState({ viewingType: 'user', viewingUser: user })
  sr71$.query(S.user, { id: user.id })
}

export const changeTheme = name => store.changeTheme(name)

export function logout() {
  store.logout()
  dispatchEvent(EVENT.LOGOUT)
}

export const editProfile = () =>
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_ACCOUNT_EDIT })

const DataSolver = [
  {
    match: asyncRes('user'),
    action: ({ user }) => {
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
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export const loadUserInfo = user => {
  if (user) return loadUser(user)
  loadAccount()
}

export function init(_store, user) {
  debug('DDDDD ---> init')
  if (store) {
    return loadUserInfo(user)
  }
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  return loadUserInfo(user)
}
