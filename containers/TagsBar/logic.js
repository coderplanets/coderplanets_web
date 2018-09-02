import R from 'ramda'

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

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:TagsBar')
/* eslint-enable no-unused-vars */

let store = null

export function onTagSelect(tag) {
  store.selectTag(tag)
}

export function loadTags(pthread) {
  // NOTE: do not use viewing.community, it's too slow
  const { mainPath } = store.curRoute
  const community = mainPath
  const thread = R.toUpper(pthread)

  const args = { community, thread }
  debug('#### loadTags --> ', args)
  sr71$.query(S.partialTags, args)
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags }) => {
      console.log('partialTags --> ', partialTags)
      store.markState({
        tags: partialTags,
      })
    },
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => loadTags(),
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

export const loadIfNeed = thread => {
  if (R.isEmpty(store.tagsData)) {
    loadTags(thread)
  }
}

export function init(_store) {
  if (store) return false
  store = _store

  debug(store)
  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}
