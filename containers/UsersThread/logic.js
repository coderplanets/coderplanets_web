// import R from 'ramda'

import { makeDebugger, $solver, asyncRes, asyncErr, ERR } from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:UsersThread')

let store = null

export const loadGeoData = () => {
  markLoading(true)
  const { id } = store.curCommunity
  sr71$.query(S.communityGeoInfo, { id })
}

const markLoading = (maybe = true) => store.markState({ geoDataLoading: maybe })
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('communityGeoInfo'),
    action: ({ communityGeoInfo: geoInfos }) => {
      debug('communityGeoInfo->:  ', geoInfos)
      markLoading(false)
      store.markState({ geoInfos })
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: ({ details }) => {
      debug('ERR.GRAPHQL -->', details)
      markLoading(false)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
      markLoading(false)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
      markLoading(false)
    },
  },
]

export const init = _store => {
  store = _store

  if (sub$) return loadGeoData()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadGeoData()
}

export const uninit = () => {
  if (store.geoDataLoading) return false
  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
