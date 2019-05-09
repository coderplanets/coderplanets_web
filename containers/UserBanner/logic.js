import { useEffect } from 'react'
// import R from 'ramda'

import { makeDebugger, $solver, asyncRes } from '@utils'
import SR71 from '@utils/async/sr71'

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

// ###############################
// init & uninit
// ###############################
export const useInit = _store =>
  useEffect(
    () => {
      store = _store
      // debug('effect init')
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
      return () => sub$.unsubscribe()
    },
    [_store]
  )
