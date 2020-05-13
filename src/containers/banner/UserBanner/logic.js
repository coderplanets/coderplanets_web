// import R from 'ramda'
import { useEffect } from 'react'

import { asyncSuit, buildLog } from '@/utils'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:UserBanner')

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
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
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    return () => sub$.unsubscribe()
  }, [_store])
