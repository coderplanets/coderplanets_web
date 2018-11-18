import R from 'ramda'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  EVENT,
  ERR,
  THREAD,
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

export const onTagSelect = tag => store.selectTag(tag)

const NO_TAG_THREADS = [THREAD.USER, THREAD.CHEATSHEET, THREAD.WIKI]

export function loadTags(topic = TOPIC.POST) {
  const { curThread } = store
  if (R.contains(curThread, NO_TAG_THREADS)) return false

  const community = store.curCommunity.raw
  const thread = R.toUpper(curThread)

  const args = { community, thread, topic }

  debug('#### loadTags --> ', args)
  sr71$.query(S.partialTags, args)
}

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

export function init(_store, thread, topic, active) {
  let activeTag = R.pick(['id', 'title', 'color'], active)
  if (R.isEmpty(activeTag.title)) activeTag = null

  if (store) {
    return store.markState({ thread, topic, activeTag })
  }

  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  store.markState({ thread, topic, activeTag })
}
