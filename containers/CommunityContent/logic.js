// import R from 'ramda'
import { useEffect } from 'react'

import { ERR } from '@constant'
import { asyncSuit, buildLog, errRescue } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('L:CommunityContent')

// import S from './schema'
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
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'CommunityContent' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      errRescue({ type: ERR.NETWORK, path: 'CommunityContent' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(() => {
    store = _store
    log('effect init', store)
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
