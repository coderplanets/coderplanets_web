// import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  ERR,
  errRescue,
} from 'utils'

import SR71 from 'utils/async/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:UsersThread')

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
      debug('communityGeoInfo->:  ', geoInfos)
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
