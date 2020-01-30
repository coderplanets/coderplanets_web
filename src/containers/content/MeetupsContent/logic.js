// import R from 'ramda'

import { useEffect } from 'react'

import { ERR } from '@constant'
import { buildLog, $solver, asyncErr, errRescue } from '@utils'

import SR71 from '@utils/async/sr71'
// import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const log = buildLog('L:MeetupsContent')

export const someMethod = () => {}

// const const cancleLoading = () => {}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      // cancleLoading()
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      // cancleLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'MeetupsContent' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      // cancleLoading()
      errRescue({ type: ERR.NETWORK, path: 'MeetupsContent' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(() => {
    store = _store
    log('effect init: ', store)

    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    return () => {
      if (!sub$) return false
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
