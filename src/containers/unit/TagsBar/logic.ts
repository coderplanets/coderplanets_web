import { useEffect } from 'react'
import { isEmpty, pick, contains, toUpper } from 'ramda'

import type { TTag, TThread } from '@/spec'
import type { TStore } from './store'
import { EVENT, ERR, THREAD } from '@/constant'
import { asyncSuit, buildLog, errRescue } from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:TagsBar')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.COMMUNITY_CHANGE, EVENT.THREAD_CHANGE],
})

let sub$ = null
let store: TStore | undefined

export const onTagSelect = (tag: TTag): void => store.selectTag(tag)

const NO_TAG_THREADS = [THREAD.USER]

export const loadTags = (): void => {
  const { curThread } = store
  if (contains(curThread, NO_TAG_THREADS)) return

  const community = store.curCommunity.raw
  const thread = toUpper(curThread)

  const args = { community, thread }

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
    match: asyncRes(EVENT.THREAD_CHANGE),
    action: (data) => {
      loadTags()
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

export const useInit = (
  _store: TStore,
  thread: TThread,
  active: TTag,
): void => {
  useEffect(() => {
    store = _store
    log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    let activeTag = pick(['id', 'title', 'color'], active)
    if (isEmpty(activeTag.title)) activeTag = null
    store.mark({ thread, activeTag })

    return () => {
      log('effect uninit')
      sub$.unsubscribe()
      sr71$.stop()
    }
  }, [_store, thread, active])
}
