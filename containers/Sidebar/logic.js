// import R from 'ramda'
import store from 'store'

// const debug = makeDebugger('L:sidebar')
import {
  asyncRes,
  asyncErr,
  $solver,
  ERR,
  makeDebugger,
  EVENT,
  dispatchEvent,
} from '../../utils'
import S from './schema'

import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71({
  resv_event: [EVENT.LOGOUT, EVENT.LOGIN],
})

let sidebar = null
let sub$ = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Sidebar')
/* eslint-enable no-unused-vars */

export function pin() {
  sidebar.markState({ pin: !sidebar.pin })
}

export function onCommunitySelect(community) {
  /* console.log('community --> ', community) */
  sidebar.markRoute({ community: community.raw, thread: 'posts' })
  sidebar.loadCurCommunity({ activeThread: 'posts' })

  dispatchEvent(EVENT.COMMUNITY_CHANGE)
}

export function loadSubscribedCommunities() {
  // const { accountInfo, isLogin } = sidebar
  const user = store.get('user')

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
      sidebar.loadSubscribedCommunities(subscribedCommunities),
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

export function init(selectedStore) {
  sidebar = selectedStore

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadSubscribedCommunities()
}
