import { useEffect } from 'react'
import { isEmpty } from 'ramda'

import type { TID } from '@/spec'
import { debounce, errRescue } from '@/utils/helper'
import { ERR, EVENT } from '@/constant'
import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'

import S from './schema'
import { SETTER } from './constant'
import type { TStore } from './store'
import type { TSetter, TTagView } from './spec'

/* eslint-disable-next-line */
const log = buildLog('L:CommunityTagSetter')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit

let store: TStore | undefined
let sub$ = null

// @ts-ignore
const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.MOVE_TO_COMMUNITY, EVENT.MIRROR_TO_COMMUNITY, EVENT.SET_TAG],
})

export const changeTagView = (tagView: TTagView): void => {
  store.mark({ tagView })
}

export const changeSetter = (curSetter: TSetter): void => {
  store.mark({ curSetter })
}

export const communityOnSearch = ({ target: { value } }): void => {
  store.mark({ communitySearchValue: value })
  doSearchCommunities()
}

export const toggleCommunity = (id: TID, checked: boolean): void => {
  checked ? store.selectCommunity(id) : store.undoSelectCommunity(id)
}

export const onClose = () => {
  store.mark({
    show: false,
    communitySearchValue: '',
    communitiesSearching: false,
  })
}

/**
 * search communities by current searchValue in store
 * @private
 */
const doSearchCommunities = debounce(() => {
  const { communitySearchValue: title } = store
  const args = { title }

  if (!isEmpty(title)) {
    store.mark({ communitiesSearching: true })
  } else {
    store.mark({ communitiesSearching: false })
  }

  sr71$.query(S.searchCommunities, args)
}, 300)

const cancelLoading = () => store.mark({ communitiesSearching: false })

const DataSolver = [
  {
    match: asyncRes('searchCommunities'),
    action: ({ searchCommunities: { entries } }) => {
      store.mark({ searchedCommunities: entries, communitiesSearching: false })
    },
  },
  {
    match: asyncRes(EVENT.MIRROR_TO_COMMUNITY),
    action: () => {
      console.log('收到 MIRROR_TO_COMMUNITY')
      store.mark({ show: true, curSetter: SETTER.COMMUNITY })
    },
  },
  {
    match: asyncRes(EVENT.MOVE_TO_COMMUNITY),
    action: () => {
      console.log('收到 MOVE_TO_COMMUNITY')
      store.mark({ show: true, curSetter: SETTER.COMMUNITY })
    },
  },
  {
    match: asyncRes(EVENT.SET_TAG),
    action: () => {
      console.log('收到 SET_TAG')
      // store.mark({ show: true, curSetter: SETTER.TAG })
      store.mark({ show: true, curSetter: SETTER.COMMUNITY })
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

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      // log('effect uninit')
      if (!sub$) return
      // log('===== do uninit')
      sub$.unsubscribe()
    }
  }, [_store])
}
