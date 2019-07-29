// import R from 'ramda'
import { useEffect } from 'react'

import { EVENT, ERR } from '@constant'
import { asyncSuit, buildLog, errRescue } from '@utils'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:VideoContent')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  recieve: [EVENT.REFRESH_VIDEOS],
})

let sub$ = null
let store = null

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
    match: asyncErr(ERR.GRAPHQL),
    action: () => {},
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) =>
      errRescue({ type: ERR.TIMEOUT, details, path: 'VideoContent' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'VideoContent' }),
  },
]

export const holder = 1

// ###############################
// init & uninit
// ###############################
export const useInit = _store =>
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
