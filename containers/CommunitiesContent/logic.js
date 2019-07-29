import R from 'ramda'
import { useEffect } from 'react'

import { EVENT, ERR } from '@constant'
import { asyncSuit, buildLog, pagedFilter, errRescue } from '@utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:CommunitiesContent')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  recieve: [EVENT.LOGOUT, EVENT.LOGIN, EVENT.REFRESH_COMMUNITIES],
})

let store = null
let sub$ = null

export const loadCommunities = (page = 1) => {
  const { subPath } = store.curRoute
  const category = !R.isEmpty(subPath) ? subPath : 'pl'

  const args = {
    filter: { ...pagedFilter(page), category },
    userHasLogin: store.isLogin,
  }

  // log('.')
  log('loadCommunities ', args)
  sr71$.query(S.pagedCommunities, args)
}

const searchCommunities = title => {
  const args = { title, userHasLogin: store.isLogin }

  sr71$.query(S.searchCommunities, args)
}

export const pageOnChange = page => loadCommunities(page)

export const subscribe = id => {
  if (!store.isLogin) return store.authWarning()

  sr71$.mutate(S.subscribeCommunity, { communityId: id })
  store.markState({
    subscribing: true,
    subscribingId: id,
  })
}

export const unSubscribe = id => {
  if (!store.isLogin) return store.authWarning()

  sr71$.mutate(S.unsubscribeCommunity, { communityId: id })
  store.markState({
    subscribing: true,
    subscribingId: id,
  })
}

/* when error occured cancle all the loading state */
const cancleLoading = () =>
  store.markState({
    subscribing: false,
    searching: false,
  })

const DataSolver = [
  {
    match: asyncRes('pagedCommunities'),
    action: ({ pagedCommunities }) => store.markState({ pagedCommunities }),
  },
  {
    match: asyncRes('searchCommunities'),
    action: ({ searchCommunities: pagedCommunities }) =>
      store.markState({ pagedCommunities, searching: false }),
  },
  {
    match: asyncRes('subscribeCommunity'),
    action: ({ subscribeCommunity }) => {
      store.addSubscribedCommunity(subscribeCommunity)
      store.markState({ subscribing: false })
    },
  },
  {
    match: asyncRes('unsubscribeCommunity'),
    action: ({ unsubscribeCommunity }) => {
      store.removeSubscribedCommunity(unsubscribeCommunity)
      store.markState({ subscribing: false })
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_COMMUNITIES),
    action: res => {
      const payload = res[EVENT.REFRESH_COMMUNITIES]
      if (payload.type === 'search' && !R.isEmpty(payload.data)) {
        store.markState({ searchValue: payload.data, searching: true })
        return searchCommunities(payload.data)
      }
      loadCommunities()
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
    action: () => cancleLoading(),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'CommunitiesContent' })
      cancleLoading()
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancleLoading()
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
}

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
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
