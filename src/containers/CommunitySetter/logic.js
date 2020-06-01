import { useEffect } from 'react'
import { isEmpty, merge } from 'ramda'

import { EVENT, ERR, THREAD } from '@/constant'
import { asyncSuit, buildLog, errRescue } from '@/utils'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:CommunitySetter')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  recieve: [EVENT.COMMUNITY_MIRROR],
})

let sub$ = null
let store = null

export const onClose = () => {
  store.mark({ visible: false })
  sr71$.stop()
}

export const onSearchChange = e => store.mark({ searchValue: e.target.value })

export const onSearch = () => {
  const { searchValue } = store

  return isEmpty(searchValue)
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
      return log('unmatch')
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
      store.mark({ visible: true })
      loadCommunities()
    },
  },
  {
    match: asyncRes('pagedCommunities'),
    action: ({ pagedCommunities }) => store.mark({ pagedCommunities }),
  },
  {
    match: asyncRes('searchCommunities'),
    action: ({ searchCommunities: pagedCommunities }) =>
      store.mark({ pagedCommunities }),
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
      store.setViewing({ post: merge(store.viewingData, post) }),
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: err => {
      log(err)
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
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      if (!sub$) return false
      // log('===== do uninit')
      sr71$.stop()
      sub$.unsubscribe()
      sub$ = null
    }
  }, [_store])
}
