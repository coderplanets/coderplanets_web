import R from 'ramda'

import { $solver, ERR, makeDebugger, EVENT } from '../../utils'
import S from './schema'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71({
  resv_event: [EVENT.LOGOUT, EVENT.LOGIN],
})

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:CommunitiesContent')
/* eslint-enable no-unused-vars */

let communitiesContent = null

export function loadCommunities() {
  const args = {
    filter: { page: 1, size: 20 },
    userHasLogin: communitiesContent.isLogin,
  }
  sr71$.query(S.communities, args)
}

export function pageChange(page) {
  const args = {
    filter: { page, size: 20 },
    userHasLogin: communitiesContent.isLogin,
  }

  sr71$.query(S.communities, args)
}

export function subscribe(id) {
  debug('subscribe', id)

  sr71$.mutate(S.subscribeCommunity, { communityId: id })
  communitiesContent.markState({
    subscribing: true,
    subscribingId: id,
  })
}

export function unSubscribe(id) {
  debug('unSubscribe', id)

  sr71$.mutate(S.unsubscribeCommunity, { communityId: id })
  communitiesContent.markState({
    subscribing: true,
    subscribingId: id,
  })
}

/* when error occured cancle all the loading state */
const cancleLoading = () => {
  communitiesContent.markState({
    subscribing: false,
  })
}

const DataSolver = [
  {
    match: R.has('communities'),
    action: res => {
      const data = res.communities
      communitiesContent.loadCommunities(data)
    },
  },
  {
    match: R.has('subscribeCommunity'),
    action: res => {
      const data = res.subscribeCommunity
      communitiesContent.addSubscribedCommunity(data)
      communitiesContent.markState({
        subscribing: false,
      })
    },
  },
  {
    match: R.has('unsubscribeCommunity'),
    action: res => {
      const data = res.unsubscribeCommunity
      debug('unsubscribeCommunity: ', data)
      communitiesContent.removeSubscribedCommunity(data)
      communitiesContent.markState({
        subscribing: false,
      })
    },
  },
  {
    match: R.has(EVENT.LOGOUT),
    action: () => loadCommunities(),
  },
  {
    match: R.has(EVENT.LOGIN),
    action: () => loadCommunities(),
  },
]

const ErrSolver = [
  {
    match: R.pathEq(['error'], ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
      cancleLoading()
    },
  },
  {
    match: R.pathEq(['error'], ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
      cancleLoading()
    },
  },
  {
    match: R.pathEq(['error'], ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
      cancleLoading()
    },
  },
]

export function init(selectedStore) {
  communitiesContent = selectedStore
  debug(communitiesContent)
  sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  loadCommunities()
}
