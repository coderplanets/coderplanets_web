import { useEffect } from 'react'

import { ERR } from '@/constant'
import { asyncSuit, buildLog, errRescue } from '@/utils'

// import S from './schema'
const { SR71, $solver, asyncErr } = asyncSuit

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const log = buildLog('L:MeetupsContent')

export const changeGalleryType = ({ key: activeGalleryType }) => {
  store.mark({ activeGalleryType })
}

// const const cancelLoading = () => {}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      // cancelLoading()
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      // cancelLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'MeetupsContent' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      // cancelLoading()
      errRescue({ type: ERR.NETWORK, path: 'MeetupsContent' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store) => {
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
