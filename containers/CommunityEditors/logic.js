// import R from 'ramda'

import { makeDebugger, $solver, asyncRes } from '../../utils'

import S from './schema'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:CommunityEditors')
/* eslint-enable no-unused-vars */

let store = null

export function loadCommunityEditors() {
  debug('loadCommunityEditors ..')

  sr71$.query(S.pagedUsers, { filter: { page: 1, size: 20 } })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('pagedUsers'),
    action: ({ pagedUsers }) => {
      store.markState({ pagedEditors: pagedUsers })
      /*
         let curView = TYPE.RESULT
         if (pagedPosts.entries.length === 0) {
         curView = TYPE.RESULT_EMPTY
         }
         store.markState({ curView, pagedPosts })
       */
    },
  },
]
const ErrSolver = []

export function init(_store) {
  if (store) return false
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  loadCommunityEditors()
}
