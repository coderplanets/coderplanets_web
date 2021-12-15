import { useEffect } from 'react'

import type { TID, TEditValue } from '@/spec'
import { EVENT, ERR } from '@/constant'

import { errRescue } from '@/utils/helper'
import { pagedFilter } from '@/utils/graphql'
import asyncSuit from '@/utils/async'
import { buildLog } from '@/utils/logger'
import { updateEditing } from '@/utils/mobx'

import type { TStore } from './store'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:ExploreContent')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.LOGOUT, EVENT.LOGIN],
})

let store: TStore | undefined
let sub$ = null

/**
 * load communities by page and cataglog type
 * @param {page} number
 * @ppublic
 */
export const loadCommunities = (page = 1): void => {
  const category = store.activeCatalog

  const args = {
    filter: { ...pagedFilter(page), category },
    userHasLogin: store.isLogin,
  }

  log('loadCommunities ', args)
  sr71$.query(S.pagedCommunities, args)
}

export const loadCategories = (): void =>
  sr71$.query(S.pagedCategories, { filter: {} })

/**
 * search communities by current searchValue in store
 * @private
 */
const searchCommunities = (): void => {
  const { searchValue: title } = store
  const args = { title, userHasLogin: store.isLogin }

  sr71$.query(S.searchCommunities, args)
}

/**
 * change search status
 * @ppublic
 */
export const changeSearchStatus = (status): void => store.mark({ ...status })

/**
 * search for communities
 * @param {e} htmlEvent
 * @return {void}
 */
export const searchOnChange = (e: TEditValue): void => {
  updateEditing(store, 'searchValue', e)
  searchCommunities()
  // if (store.activeCatalog !== null) {
  //   store.mark({ activeCatalog: null })
  // }
}

/**
 * sidebar menu on select
 * @param {item} object
 * @param {item.id} string
 * @param {item.raw} string
 * @public
 */
export const categoryOnChange = (activeCatalog: string): void => {
  store.mark({ activeCatalog })
  loadCommunities()
}

/**
 * pagination on change
 * @param {page} number
 * @public
 */
export const pageOnChange = (page: number): void => loadCommunities(page)

/**
 * subscrib / join a community
 * @param {id} string
 * @public
 */
export const subscribe = (communityId: TID): void => {
  sr71$.mutate(S.subscribeCommunity, { communityId })
}

/**
 * unsubscrib/ / quit a community
 * @param {id} string
 * @public
 */
export const unSubscribe = (communityId: TID): void => {
  sr71$.mutate(S.unsubscribeCommunity, { communityId })
}

/* when error occured cancel all the loading state */
const cancelLoading = () =>
  store.mark({
    subscribing: false,
    searching: false,
  })

const DataSolver = [
  {
    match: asyncRes('pagedCommunities'),
    action: ({ pagedCommunities }) => store.mark({ pagedCommunities }),
  },
  {
    match: asyncRes('pagedCategories'),
    action: ({ pagedCategories }) => store.mark({ pagedCategories }),
  },
  {
    match: asyncRes('searchCommunities'),
    action: ({ searchCommunities: pagedCommunities }) =>
      store.mark({ pagedCommunities, searching: false }),
  },
  {
    match: asyncRes('subscribeCommunity'),
    action: ({ subscribeCommunity }) => {
      store.addSubscribedCommunity(subscribeCommunity)
      store.mark({ subscribing: false })
    },
  },
  {
    match: asyncRes('unsubscribeCommunity'),
    action: ({ unsubscribeCommunity }) => {
      store.removeSubscribedCommunity(unsubscribeCommunity)
      store.mark({ subscribing: false })
    },
  },
  {
    match: asyncRes(EVENT.LOGOUT),
    action: () => loadCommunities(),
  },
  {
    match: asyncRes(EVENT.LOGIN),
    action: () => loadCommunities(),
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
      errRescue({ type: ERR.TIMEOUT, details, path: 'ExploreContent' })
      cancelLoading()
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancelLoading()
      errRescue({ type: ERR.NETWORK, path: 'ExploreContent' })
    },
  },
]

const loadIfNeed = () => {
  if (
    !store.pagedCommunitiesData ||
    store.pagedCommunitiesData.totalCount === 0
  ) {
    loadCommunities()
  }
  if (!store.pagedCategoriesData) {
    loadCategories()
  }
}

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    loadIfNeed()

    return () => {
      // log('effect uninit')
      if (!sub$) return
      // log('===== do uninit')
      sub$.unsubscribe()
    }
  }, [_store])
}
