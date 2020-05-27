import { useEffect } from 'react'
import { curry, isEmpty, pick, contains, toUpper } from 'ramda'

import { EVENT, ERR, THREAD, TOPIC } from '@/constant'
import { asyncSuit, buildLog, errRescue } from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:TagsBar')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  recieve: [EVENT.COMMUNITY_CHANGE, EVENT.TABBER_CHANGE],
})

let sub$ = null
let store = null

/* eslint-disable no-unused-vars */
export const onTagSelect = curry((tag, cb, e) => {
  store.selectTag(tag)
  cb(tag)
})

const NO_TAG_THREADS = [THREAD.USER, THREAD.CHEATSHEET, THREAD.WIKI]

export const loadTags = (topic = TOPIC.POST) => {
  const { curThread } = store
  if (contains(curThread, NO_TAG_THREADS)) return false

  const community = store.curCommunity.raw
  const thread = toUpper(curThread)

  const args = { community, thread, topic }

  /* log('#### loadTags --> ', args) */
  store.mark({ loading: true })
  sr71$.query(S.partialTags, args)
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags: tags }) => store.mark({ tags, loading: false }),
  },
  {
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => {
      loadTags()
      store.mark({ activeTag: null })
    },
  },
  {
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: data => {
      const { topic } = data[EVENT.TABBER_CHANGE].data
      loadTags(topic)
      store.mark({ activeTag: null })
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      store.mark({ loading: false })
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      store.mark({ loading: false })
      errRescue({ type: ERR.TIMEOUT, details, path: 'AccountEditor' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      store.mark({ loading: false })
      errRescue({ type: ERR.NETWORK, path: 'AccountEditor' })
    },
  },
]

// ###############################
// init & uninit
// ###############################

export const useInit = (_store, thread, topic, active) => {
  useEffect(() => {
    store = _store
    log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    let activeTag = pick(['id', 'title', 'color'], active)
    if (isEmpty(activeTag.title)) activeTag = null
    store.mark({ thread, topic, activeTag })

    return () => {
      log('effect uninit')
      sub$.unsubscribe()
      sr71$.stop()
    }
  }, [_store, thread, topic, active])
}
