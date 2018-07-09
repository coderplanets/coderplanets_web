// import R from 'ramda'
// const debug = makeDebugger('L:sidebar')
import {
  asyncRes,
  asyncErr,
  $solver,
  ERR,
  makeDebugger,
  EVENT,
  dispatchEvent,
  thread2Subpath,
  THREAD,
  BStore,
} from '../../utils'
import S from './schema'

import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71({
  resv_event: [EVENT.LOGOUT, EVENT.LOGIN],
})

let store = null
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Sidebar')
/* eslint-enable no-unused-vars */

export function pin() {
  store.markState({ pin: !store.pin })
}

export function onCommunitySelect(community) {
  debug('onCommunitySelect --> ', community)
  store.markRoute({
    mainPath: community.raw,
    subPath: thread2Subpath(THREAD.POST),
  })

  dispatchEvent(EVENT.COMMUNITY_CHANGE)
}

export function loadSubscribedCommunities() {
  const user = BStore.get('user')

  const args = {
    filter: { page: 1, size: 30 },
  }
  if (user) {
    args.userId = user.id
    args.filter.size = 20
  }
  sr71$.query(S.subscribedCommunities, args)
}

const DataSolver = [
  {
    match: asyncRes('subscribedCommunities'),
    action: ({ subscribedCommunities }) =>
      store.loadSubscribedCommunities(subscribedCommunities),
  },
  {
    match: asyncRes(EVENT.LOGOUT),
    action: () => loadSubscribedCommunities(),
  },
  {
    match: asyncRes(EVENT.LOGIN),
    action: () => loadSubscribedCommunities(),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export function init(_store) {
  if (store) return false
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadSubscribedCommunities()
}
