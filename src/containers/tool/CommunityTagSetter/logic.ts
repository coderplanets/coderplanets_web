import { useEffect } from 'react'
import { isEmpty, filter, reject, uniq } from 'ramda'

import { TCommunity, TID } from '@/spec'
import { debounce, errRescue } from '@/utils/helper'
import { ERR } from '@/constant'
import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'
import { toJS } from '@/utils/mobx'

import S from './schema'
import type { TStore } from './store'
import type { TTagView } from './spec'

/* eslint-disable-next-line */
const log = buildLog('L:CommunityTagSetter')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit

let store: TStore | undefined
let sub$ = null

// @ts-ignore
const sr71$ = new SR71()

export const changeTagView = (tagView: TTagView): void => {
  store.mark({ tagView })
}

export const communityOnSearch = ({ target: { value } }): void => {
  store.mark({ communitySearchValue: value })
  doSearchCommunities()
}

export const toggleCommunity = (id: TID, checked: boolean): void => {
  checked ? selectCommunity(id) : undoSelectCommunity(id)
}

const selectCommunity = (id: TID): void => {
  const { selectableCommunities, selectedCommunities } = store
  const targetCommunities = filter((c) => c.id === id, selectableCommunities)

  store.mark({
    selectedCommunities: uniq([
      ...toJS(selectedCommunities),
      ...targetCommunities,
    ]),
  })
}

const undoSelectCommunity = (id: TID): void => {
  const { selectedCommunities } = store

  store.mark({
    selectedCommunities: reject(
      (c: TCommunity) => c.id === id,
      toJS(selectedCommunities),
    ),
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
