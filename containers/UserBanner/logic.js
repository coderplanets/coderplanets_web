// import R from 'ramda'

import { makeDebugger, $solver, asyncRes } from 'utils'
import SR71 from 'utils/async/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:UserBanner')

let store = null

export const loadUser = () => {
  const userHasLogin = store.isLogin
  sr71$.query(S.user, { login: store.viewingUser.login, userHasLogin })
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

export const init = _store => {
  store = _store

  if (sub$) return
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  // loadUser()
}
