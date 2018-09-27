// import R from 'ramda'

import { makeDebugger, $solver, asyncRes, asyncErr, ERR } from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:UsersThread')
/* eslint-enable no-unused-vars */

let store = null

// citiesGeoInfo
export function loadGeoData() {
  debug('loadGeoData')
  store.markState({ geoDataLoading: true })
  sr71$.query(S.citiesGeoInfo, {})
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('citiesGeoInfo'),
    action: ({ citiesGeoInfo }) => {
      store.markState({
        geoInfos: citiesGeoInfo.entries,
        geoDataLoading: false,
      })
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export function init(_store) {
  if (store) {
    return loadGeoData()
  }
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadGeoData()
}
