import { useEffect } from 'react'
// import R from 'ramda'

import { makelogger, $solver, asyncRes, asyncErr, ERR, errRescue } from '@utils'

import SR71 from '@utils/async/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const log = makelogger('L:UsersThread')

export const loadGeoData = () => {
  markLoading(true)
  const { id } = store.curCommunity
  sr71$.query(S.communityGeoInfo, { id })
}

export const ToggleNumBashboard = () =>
  store.markState({ showNums: !store.showNums })

const markLoading = (maybe = true) => store.markState({ geoDataLoading: maybe })
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('communityGeoInfo'),
    action: ({ communityGeoInfo: geoInfos }) => {
      markLoading(false)
      store.markState({ geoInfos })
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => markLoading(false),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      markLoading(false)
      errRescue({ type: ERR.TIMEOUT, details, path: 'UsersThread' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      markLoading(false)
      errRescue({ type: ERR.NETWORK, path: 'UsersThread' })
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

      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
      loadGeoData()

      return () => {
        if (store.geoDataLoading) return false
        log('===== do uninit')
        sr71$.stop()
        sub$.unsubscribe()
      }
    },
    [_store]
  )
}
