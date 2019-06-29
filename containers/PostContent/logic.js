// import R from 'ramda'
import { useEffect } from 'react'

import { EVENT, ERR } from '@constant'
import { asyncSuit, buildLog, errRescue } from '@utils'

import S from './schema'

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  resv_event: [EVENT.REFRESH_POSTS],
})

let sub$ = null
let store = null

/* eslint-disable-next-line */
const log = buildLog('L:PostContent')

const loadPost = () => {
  const { id } = store.viewingData
  sr71$.query(S.post, { id, userHasLogin: store.isLogin })
}

export const callInformer = () => store.callInformer()

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('post'),
    action: ({ post }) => store.setViewing({ post }),
  },
  {
    match: asyncRes(EVENT.REFRESH_POSTS),
    action: () => loadPost(),
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
      errRescue({ type: ERR.TIMEOUT, details, path: 'PostContent' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'PostContent' }),
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store, attachment) => {
  useEffect(() => {
    store = _store
    // log('effect init')

    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    return () => {
      if (!sub$) return false
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, attachment])
}
