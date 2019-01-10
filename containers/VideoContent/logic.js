// import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  EVENT,
  ERR,
} from '../../utils'

import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.REFRESH_VIDEOS],
})
let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:VideoContent')

const loadVideo = () => {
  const { id } = store.viewingData
  sr71$.query(S.video, { id, userHasLogin: store.isLogin })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('video'),
    action: ({ video }) => store.setViewing({ video }),
  },
  {
    match: asyncRes(EVENT.REFRESH_VIDEOS),
    action: () => loadVideo(),
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
  store = _store

  debug(store)
  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export function uninit() {
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
