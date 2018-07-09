// import R from 'ramda'

import { makeDebugger, $solver, asyncRes } from '../../utils'
import S from './schema'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:PostBanner')
/* eslint-enable no-unused-vars */

let store = null

export function loadPost() {
  const id = store.curRoute.subPath

  sr71$.query(S.post, { id })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('post'),
    action: ({ post }) => store.setViewing({ post }),
  },
]
const ErrSolver = []

export function init(_store) {
  if (store) return false
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  /* loadPost() */
}
