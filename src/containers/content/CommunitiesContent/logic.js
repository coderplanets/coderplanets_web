import { useEffect } from 'react'
import { isEmpty } from 'ramda'

import { EVENT, ERR } from '@/constant'
import {
  asyncSuit,
  buildLog,
  pagedFilter,
  errRescue,
  updateEditing,
} from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:CommunitiesContent')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  recieve: [EVENT.LOGOUT, EVENT.LOGIN],
})

let store = null
let sub$ = null

/**
 * load communities by page and cataglog type
 * @param {page} number
 * @ppublic
 */
export const loadCommunities = (page = 1) => {
  const { subPath } = store.curRoute
  const category = !isEmpty(subPath) ? subPath : 'pl'

  const args = {
    filter: { ...pagedFilter(page), category },
    userHasLogin: store.isLogin,
  }

  // log('.')
  log('loadCommunities ', args)
  sr71$.query(S.pagedCommunities, args)
}

export const loadCategories = () =>
  sr71$.query(S.pagedCategories, { filter: {} })

/**
 * search communities by current searchValue in store
 * @private
 */
const searchCommunities = () => {
  const { searchValue: title } = store
  const args = { title, userHasLogin: store.isLogin }

  sr71$.query(S.searchCommunities, args)
}

/**
 * change search status
 * @ppublic
 */
export const changeSearchStatus = (status) => store.mark({ ...status })

/**
 * search for communities
 * @param {e} htmlEvent
 * @return {void}
 */
export const searchOnChange = (e) => {
  updateEditing(store, 'searchValue', e)
  searchCommunities()
}

/**
 * sidebar menu on select
 * @param {item} object
 * @param {item.id} string
 * @param {item.raw} string
 * @public
 */
export const menuOnChange = ({ id, raw }) => {
  store.markRoute({ subPath: raw })
  loadCommunities()
  store.mark({ activeCatalogId: id })
}

/**
 * pagination on change
 * @param {page} number
 * @public
 */
export const pageOnChange = (page) => loadCommunities(page)

/**
 * subscrib / join a community
 * @param {id} string
 * @public
 */
export const subscribe = (id) => {
  if (!store.isLogin) return store.authWarning()

  sr71$.mutate(S.subscribeCommunity, { communityId: id })
  store.mark({
    subscribing: true,
    subscribingId: id,
  })
}

/**
 * unsubscrib/ / quit a community
 * @param {id} string
 * @public
 */
export const unSubscribe = (id) => {
  if (!store.isLogin) return store.authWarning()

  sr71$.mutate(S.unsubscribeCommunity, { communityId: id })
  store.mark({
    subscribing: true,
    subscribingId: id,
  })
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
      errRescue({ type: ERR.TIMEOUT, details, path: 'CommunitiesContent' })
      cancelLoading()
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancelLoading()
      errRescue({ type: ERR.NETWORK, path: 'CommunitiesContent' })
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
export const useInit = (_store) => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    loadIfNeed()

    return () => {
      // log('effect uninit')
      if (!sub$) return false
      // log('===== do uninit')
      sub$.unsubscribe()
    }
  }, [_store])
}
