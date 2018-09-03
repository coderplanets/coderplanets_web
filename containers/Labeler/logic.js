import R from 'ramda'

import { makeDebugger, $solver, asyncRes } from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Labeler')
/* eslint-enable no-unused-vars */

let store = null

export function loadTags() {
  const communityId = store.curCommunity.id
  const thread = R.toUpper(store.curThread)

  const args = { communityId, thread }
  sr71$.query(S.partialTags, args)
}

export function loadTagsIfNeed() {
  loadTags()
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags }) =>
      store.markState({
        tags: partialTags,
      }),
  },
]
const ErrSolver = []

export function init(_store) {
  if (store) return false
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
