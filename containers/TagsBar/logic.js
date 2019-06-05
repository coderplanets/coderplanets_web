import R from 'ramda'
import { useEffect } from 'react'

import {
  buildLog,
  $solver,
  asyncRes,
  asyncErr,
  EVENT,
  ERR,
  THREAD,
  TOPIC,
  errRescue,
} from '@utils'

import SR71 from '@utils/async/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.COMMUNITY_CHANGE, EVENT.TABBER_CHANGE],
})
let sub$ = null
let store = null

/* eslint-disable-next-line */
const log = buildLog('L:TagsBar')

/* eslint-disable no-unused-vars */
export const onTagSelect = R.curry((tag, cb, e) => {
  store.selectTag(tag)
  cb(tag)
})

const NO_TAG_THREADS = [THREAD.USER, THREAD.CHEATSHEET, THREAD.WIKI]

export const loadTags = (topic = TOPIC.POST) => {
  const { curThread } = store
  if (R.contains(curThread, NO_TAG_THREADS)) return false

  const community = store.curCommunity.raw
  const thread = R.toUpper(curThread)

  const args = { community, thread, topic }

  /* log('#### loadTags --> ', args) */
  store.markState({ loading: true })
  sr71$.query(S.partialTags, args)
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags: tags }) =>
      store.markState({ tags, loading: false }),
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => {
      loadTags()
      store.markState({ activeTag: null })
    },
  },
  {
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: data => {
      const { topic } = data[EVENT.TABBER_CHANGE].data
      loadTags(topic)
      store.markState({ activeTag: null })
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      store.markState({ loading: false })
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      store.markState({ loading: false })
      errRescue({ type: ERR.TIMEOUT, details, path: 'AccountEditor' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      store.markState({ loading: false })
      errRescue({ type: ERR.NETWORK, path: 'AccountEditor' })
    },
  },
]

// ###############################
// init & uninit
// ###############################

export const useInit = (_store, thread, topic, active) => {
  useEffect(
    () => {
      store = _store
      log('effect init')
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
      let activeTag = R.pick(['id', 'title', 'color'], active)
      if (R.isEmpty(activeTag.title)) activeTag = null
      store.markState({ thread, topic, activeTag })

      return () => {
        log('effect uninit')
        sub$.unsubscribe()
        sr71$.stop()
      }
    },
    [_store, thread, topic, active]
  )
}
