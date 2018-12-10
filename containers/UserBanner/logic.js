// import R from 'ramda'

import { makeDebugger, $solver, asyncRes } from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:UserBanner')
/* eslint-enable no-unused-vars */

let store = null

export const loadUser = () => {
  const userHasLogin = store.isLogin
  sr71$.query(S.user, { id: store.viewingUser.id, userHasLogin })
}
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('user'),
    action: ({ user }) => store.setViewing({ user }),
  },
]
const ErrSolver = []

export function init(_store) {
  store = _store

  if (sub$) return
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  // loadUser()
}
