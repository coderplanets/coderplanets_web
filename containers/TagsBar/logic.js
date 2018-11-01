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

const sr71$ = new SR71({
  resv_event: [EVENT.COMMUNITY_CHANGE],
})
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:TagsBar')
/* eslint-enable no-unused-vars */

let store = null

export function onTagSelect(tag) {
  store.selectTag(tag)
}

export function loadTags() {
  // NOTE: do not use viewing.community, it's too slow
  const { mainPath: community } = store.curRoute
  const thread = R.toUpper(store.thread)

  const args = { community, thread }
  /*
  if (community === ROUTE.HOME) {
    args.topic = R.merge(args, { topic })
  }
  */

  debug('#### loadTags --> ', args)
  sr71$.query(S.partialTags, args)
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags: tags }) => {
      debug('partialTags get: ', tags)
      store.markState({ tags })
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
  if (R.isEmpty(store.tagsData) || thread !== store.thread) {
    loadTags()
  }
}

export function init(_store, thread) {
  if (store) {
    store.markState({ thread })
    return loadIfNeed(thread)
  }
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  store.markState({ thread })
  loadIfNeed(thread)
}
