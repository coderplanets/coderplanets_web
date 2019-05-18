import R from 'ramda'
import { useEffect } from 'react'

import {
  makeDebugger,
  $solver,
  asyncRes,
  asyncErr,
  ERR,
  THREAD,
  EVENT,
  errRescue,
} from '@utils'

import SR71 from '@utils/async/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.COMMUNITY_MIRROR],
})

let sub$ = null
let store = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:CommunitySetter')

export const onClose = () => {
  store.markState({ visible: false })
  sr71$.stop()
}

export const onSearchChange = e =>
  store.markState({ searchValue: e.target.value })

export const onSearch = () => {
  const { searchValue } = store

  return R.isEmpty(searchValue)
    ? loadCommunities()
    : searchCommunities(searchValue)
}

export const onSearchPress = e => {
  if (e.key === 'Enter') {
    onSearch()
  }
}

// load all communities
export const loadCommunities = (page = 1) =>
  sr71$.query(S.pagedCommunities, { filter: { page, size: 20 } })

// search spec communities
const searchCommunities = title => sr71$.query(S.searchCommunities, { title })

export const handleCommunityBelong = (belong, communityId) => {
  const { id } = store.viewingData

  return belong
    ? sr71$.mutate(S.unsetCommunity, { id, communityId })
    : sr71$.mutate(S.setCommunity, { id, communityId })
}

const refreshBelongsInfo = () => {
  const { currentThread } = store
  switch (currentThread) {
    case THREAD.POST: {
      const { id } = store.viewingData
      return sr71$.query(S.post, { id })
    }
    default: {
      return debug('unmatch')
    }
  }
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes(EVENT.COMMUNITY_MIRROR),
    action: () => {
      store.markState({ visible: true })
      loadCommunities()
    },
  },
  {
    match: asyncRes('pagedCommunities'),
    action: ({ pagedCommunities }) => store.markState({ pagedCommunities }),
  },
  {
    match: asyncRes('searchCommunities'),
    action: ({ searchCommunities: pagedCommunities }) =>
      store.markState({ pagedCommunities }),
  },
  {
    match: asyncRes('setCommunity'),
    action: () => refreshBelongsInfo(),
  },
  {
    match: asyncRes('unsetCommunity'),
    action: () => refreshBelongsInfo(),
  },
  {
    match: asyncRes('post'),
    action: ({ post }) =>
      store.setViewing({ post: R.merge(store.viewingData, post) }),
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: err => {
      debug(err)
      // cancleLoading()
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      // cancleLoading()
      errRescue({ type: ERR.TIMEOUT, details, path: 'CommunitySetter' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      // cancleLoading()
      errRescue({ type: ERR.NETWORK, path: 'CommunitySetter' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(
    () => {
      store = _store
      // debug('effect init')
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

      return () => {
        if (!sub$) return false
        // debug('===== do uninit')
        sr71$.stop()
        sub$.unsubscribe()
        sub$ = null
      }
    },
    [_store]
  )
}
