import { useEffect } from 'react'
import { isEmpty } from 'ramda'

import type { TCommunity } from '@/spec'
import { errRescue } from '@/utils/helper'
import { ERR, EVENT } from '@/constant'
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

export const communityOnSearch = ({ target: { value } }): void => {
  console.log('communityOnSearch value: ', value)
  store.mark({ communitySearchValue: value })
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

  console.log('query ...: ', args)
  sr71$.query(S.searchCommunities, args)
}

const cancelLoading = () => store.mark({ communitiesSearching: false })

const DataSolver = [
  {
    match: asyncRes('searchCommunities'),
    action: ({ searchCommunities: { entries } }) => {
      console.log('# searchCommunities -> ', entries)
      store.mark({ searchedCommunities: entries, communitiesSearching: false })
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
    action: () => {
      console.log('收到 SET_TAG')
      // store.mark({ show: true, type: TYPE.TAG })
      store.mark({ show: true, type: TYPE.TAG })
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
export const useStore = (): TStore => {
  return store
}

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    log('store init')

    return () => {
      log('effect uninit')
      if (!sub$) return
      // log('===== do uninit')
      sub$.unsubscribe()
    }
  }, [_store])
}
