import { useEffect } from 'react'
import { isEmpty } from 'ramda'

import type { TCommunity, TInput, TThread } from '@/spec'
import { errRescue } from '@/utils/helper'
import { ERR, EVENT, THREAD } from '@/constant'
import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'

import S from './schema'
import { TYPE } from './constant'
import type { TStore } from './store'
import type { TType, TTagView } from './spec'

/* eslint-disable-next-line */
const log = buildLog('L:CommunityTagSetter')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit

let store: TStore | undefined
let sub$ = null

// @ts-ignore
const sr71$ = new SR71({
  // @ts-ignore
  receive: [
    EVENT.SELECT_COMMUNITY,
    EVENT.MOVE_TO_COMMUNITY,
    EVENT.MIRROR_TO_COMMUNITY,
    EVENT.SET_TAG,
  ],
})

export const changeTagView = (tagView: TTagView): void => {
  store.mark({ tagView })
}

export const changeSetter = (type: TType): void => {
  store.mark({ type })
}

export const communityOnSearch = (e: TInput): void => {
  store.mark({ communitySearchValue: e.target.value })
  doSearchCommunities()
}

export const toggleCommunity = (
  community: TCommunity,
  checked: boolean,
): void => {
  const { type, selectCommunity, undoSelectCommunity } = store
  const { id } = community

  checked ? selectCommunity(id) : undoSelectCommunity(id)

  if (type === TYPE.SELECT_COMMUNITY) {
    onClose()
  }
}

export const onClose = (): void => {
  store.mark({
    show: false,
    communitySearchValue: '',
    communitiesSearching: false,
    searchedCommunities: [],
    selectedCommunities: [],
  })
}

const loadArticleTags = (community: TCommunity, thread: TThread): void => {
  store.mark({ tagsLoading: true })

  const args = {
    filter: { communityId: community.id, thread: thread.toUpperCase() },
  }

  log('query tags args: ', args)
  sr71$.query(S.pagedArticleTags, args)
}

/**
 * search communities by current searchValue in store
 * @private
 */
const doSearchCommunities = () => {
  const { communitySearchValue: title } = store
  const args = { title }

  if (!isEmpty(title)) {
    store.mark({ communitiesSearching: true })
  } else {
    store.mark({ communitiesSearching: false })
  }

  sr71$.query(S.searchCommunities, args)
}

const cancelLoading = () => store.mark({ communitiesSearching: false })

const DataSolver = [
  {
    match: asyncRes('searchCommunities'),
    action: ({ searchCommunities: { entries } }) => {
      store.mark({ searchedCommunities: entries, communitiesSearching: false })
    },
  },
  {
    match: asyncRes('pagedArticleTags'),
    action: ({ pagedArticleTags: { entries } }) => {
      store.mark({ tags: entries, tagsLoading: false })
    },
  },
  {
    match: asyncRes(EVENT.MIRROR_TO_COMMUNITY),
    action: () => {
      console.log('收到 MIRROR_TO_COMMUNITY')
      store.mark({ show: true, type: TYPE.MIRROR_COMMUNITY })
    },
  },
  {
    match: asyncRes(EVENT.MOVE_TO_COMMUNITY),
    action: () => {
      console.log('收到 MOVE_TO_COMMUNITY')
      store.mark({ show: true, type: TYPE.MOVE_COMMUNITY })
    },
  },
  {
    match: asyncRes(EVENT.SELECT_COMMUNITY),
    action: () => {
      console.log('收到 SELECT_COMMUNITY')
      store.mark({ show: true, type: TYPE.SELECT_COMMUNITY })
    },
  },
  {
    match: asyncRes(EVENT.SET_TAG),
    action: (res) => {
      console.log('收到 SET_TAG: ', res)
      const { community, thread } = res[EVENT.SET_TAG]
      store.mark({ show: true, type: TYPE.TAG })
      loadArticleTags(community, thread)
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => cancelLoading(),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'CommunityTagSetter' })
      cancelLoading()
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancelLoading()
      errRescue({ type: ERR.NETWORK, path: 'CommunityTagSetter' })
    },
  },
]

// ###############################
// init & uninit handlers
// ###############################

export const useInit = (
  _store: TStore,
  selectedCommunities: TCommunity[],
): void => {
  useEffect(() => {
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    store.mark({ selectedCommunities })
    log('store init')

    return () => {
      log('effect uninit')
      if (!sub$) return
      // log('===== do uninit')
      sub$.unsubscribe()
    }
  }, [_store, selectedCommunities])
}
