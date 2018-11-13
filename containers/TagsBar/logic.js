import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  EVENT,
  ERR,
  TOPIC,
} from '../../utils'
import SR71 from '../../utils/network/sr71'

import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.COMMUNITY_CHANGE, EVENT.TABBER_CHANGE],
})
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:TagsBar')
/* eslint-enable no-unused-vars */

let store = null

export function onTagSelect(tag) {
  store.selectTag(tag)
}

export function loadTags(topic = TOPIC.POST) {
  // NOTE: do not use viewing.community, it's too slow
  const community = store.curCommunity.raw
  const thread = R.toUpper(store.curThread)

  const args = { community, thread, topic }

  debug('#### loadTags --> ', args)
  sr71$.query(S.partialTags, args)
}

const colorOrder = {
  red: 0,
  orange: 1,
  yellow: 2,
  green: 3,
  cyan: 4,
  blue: 5,
  purple: 6,
  dodgerblue: 7,
  yellowgreen: 8,
  brown: 9,
  grey: 10,
}

export const sortByColor = source =>
  source.sort((t1, t2) => colorOrder[t1.color] - colorOrder[t2.color])

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags: tags }) => store.markState({ tags }),
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => loadTags(),
  },
  {
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: data => {
      const { topic } = data[EVENT.TABBER_CHANGE].data
      loadTags(topic)
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

export function init(_store, thread, topic) {
  if (store) {
    store.markState({ thread, topic })
    return false
    // return loadIfNeed(thread)
  }
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  store.markState({ thread, topic })
}
