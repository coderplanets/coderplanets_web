// import R from 'ramda'
import { useEffect } from 'react'

import { makeDebugger, $solver, asyncErr, ERR, errRescue } from '@utils'

import SR71 from '@utils/async/sr71'
// import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:CommunityContent')

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
  useEffect(
    () => {
      store = _store
      debug('effect init', store)
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

      return () => {
        // debug('effect uninit')
        sr71$.stop()
        sub$.unsubscribe()
      }
    },
    [_store]
  )
}
