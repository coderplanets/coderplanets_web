// import R from 'ramda'
import { useEffect } from 'react'

import { ERR } from '@constant'
import { asyncSuit, buildLog, errRescue } from '@utils'
// import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:RepoContent')

const { SR71, $solver, asyncErr } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

export const someMethod = () => {}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {},
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: () => {},
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'RepoContent' }),
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = _store =>
  useEffect(() => {
    store = _store
    log('init store: ', store)
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
