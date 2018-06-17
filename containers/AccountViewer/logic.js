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

let accountViewer = null
let sub$ = null

export function loadUser() {}

export function loadAccount() {
  // load contributes ..
  // load posts ...
  sr71$.query(S.account, {})
}

export function changeTheme(name) {
  accountViewer.changeTheme(name)
}

export function logout() {
  accountViewer.logout()
  dispatchEvent(EVENT.LOGOUT)
}

export function editProfile() {
  dispatchEvent(EVENT.NAV_EDIT, {
    type: TYPE.PREVIEW_ACCOUNT_EDIT,
  })
}

const DataSolver = [
  {
    match: asyncRes('account'),
    action: res => {
      const data = res.account
      accountViewer.updateAccount(data)
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

export function init(selectedStore) {
  accountViewer = selectedStore

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
