import R from 'ramda'

import { makeDebugger, $solver, ERR } from '../../utils'
import SR71 from '../../utils/network/sr71'
import S from './schema'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:AccountViewer')
/* eslint-enable no-unused-vars */

const sr71$ = new SR71()

let accountViewer = null

export function loadUser() {}

export function loadAccount() {
  // load contributes ..
  // load posts ...
  sr71$.query(S.account, {})
}

export function changeTheme(name) {
  accountViewer.changeTheme(name)
}

const DataSolver = [
  {
    match: R.has('account'),
    action: res => {
      const data = res.account
      accountViewer.updateAccount(data)
    },
  },
]

const ErrSolver = [
  {
    match: R.pathEq(['error'], ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: R.pathEq(['error'], ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: R.pathEq(['error'], ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]
export function init(selectedStore) {
  accountViewer = selectedStore
  sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
