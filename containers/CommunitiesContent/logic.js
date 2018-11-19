import R from 'ramda'
import {
  asyncRes,
  asyncErr,
  $solver,
  ERR,
  makeDebugger,
  EVENT,
  pagedFilter,
} from '../../utils'

import S from './schema'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71({
  resv_event: [EVENT.LOGOUT, EVENT.LOGIN, EVENT.REFRESH_COMMUNITIES],
})

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:CommunitiesContent')
/* eslint-enable no-unused-vars */

let store = null
let sub$ = null

export function loadCommunities(page = 1) {
  const { subPath } = store.curRoute
  const category = !R.isEmpty(subPath) ? subPath : 'pl'

  const args = {
    filter: { ...pagedFilter(page), category },
    userHasLogin: store.isLogin,
  }

  // debug('.')
  debug('loadCommunities ', args)
  sr71$.query(S.pagedCommunities, args)
}

export function pageChange(page) {
  // TODO: merge category args
  loadCommunities(page)
}

export function subscribe(id) {
  if (!store.isLogin) return store.authWarning()

  sr71$.mutate(S.subscribeCommunity, { communityId: id })
  store.markState({
    subscribing: true,
    subscribingId: id,
  })
}

export function unSubscribe(id) {
  if (!store.isLogin) return store.authWarning()

  sr71$.mutate(S.unsubscribeCommunity, { communityId: id })
  store.markState({
    subscribing: true,
    subscribingId: id,
  })
}

/* when error occured cancle all the loading state */
const cancleLoading = () => {
  store.markState({
    subscribing: false,
  })
}

const DataSolver = [
  {
    match: asyncRes('pagedCommunities'),
    action: ({ pagedCommunities }) => store.markState({ pagedCommunities }),
  },
  {
    match: asyncRes('subscribeCommunity'),
    action: ({ subscribeCommunity }) => {
      console.log('subscribeCommunity done: ', subscribeCommunity)
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

      loadCommunities(1, payload.data)
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
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
      cancleLoading()
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
      cancleLoading()
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
      cancleLoading()
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

export function init(_store) {
  if (store) return loadIfNeed()

  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadIfNeed()
}
