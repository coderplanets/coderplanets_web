// import R from 'ramda'
import {
  asyncRes,
  asyncErr,
  $solver,
  ERR,
  makeDebugger,
  EVENT,
  BStore,
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

export function loadCommunities(page = 1, category = 'all') {
  const args = {
    filter: { page, size: 20 },
    userHasLogin: store.isLogin,
  }

  if (category !== 'all') {
    args.filter.category = category
  }

  sr71$.query(S.pagedCommunities, args)
}

export function pageChange(page) {
  // TODO: merge category args
  loadCommunities(page)
}

export function subscribe(id) {
  debug('subscribe', id)

  sr71$.mutate(S.subscribeCommunity, { communityId: id })
  store.markState({
    subscribing: true,
    subscribingId: id,
  })
}

export function unSubscribe(id) {
  debug('unSubscribe', id)

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
      const { data } = res[EVENT.REFRESH_COMMUNITIES]

      loadCommunities(1, data)
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

export function init(_store) {
  if (store) return false
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  /* loadCommunities() */

  const user = BStore.get('user')
  if (user) {
    BStore.cookie.set('jwtToken', user.token)
  }
}
