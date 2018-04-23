import R from 'ramda'
import store from 'store'

// const debug = makeDebugger('L:sidebar')
import { $solver, ERR, makeDebugger, EVENT } from '../../utils'
import S from './schema'

import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71({
  resv_event: [EVENT.LOGOUT, EVENT.LOGIN],
})

let sidebar = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Sidebar')
/* eslint-enable no-unused-vars */

export function pin() {
  sidebar.markState({ pin: !sidebar.pin })
}

export function loadSubscribedCommunities() {
  // const { accountInfo, isLogin } = sidebar
  const user = store.get('user')

  const args = {
    filter: { page: 1, size: 30 },
  }
  if (user) {
    args.userId = user.id
    args.filter.size = 10
  }
  sr71$.query(S.subscribedCommunities, args)
}

const DataSolver = [
  {
    match: R.has('subscribedCommunities'),
    action: ({ subscribedCommunities }) =>
      sidebar.loadSubscribedCommunities(subscribedCommunities),
  },
  {
    match: R.has(EVENT.LOGOUT),
    action: () => loadSubscribedCommunities(),
  },
  {
    match: R.has(EVENT.LOGIN),
    action: () => loadSubscribedCommunities(),
  },
]

const ErrSolver = [
  {
    match: R.pathEq(['error'], ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: R.pathEq(['error'], ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: R.pathEq(['error'], ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export function init(selectedStore) {
  sidebar = selectedStore
  sr71$.data().subscribe($solver(DataSolver, ErrSolver))
  loadSubscribedCommunities()
}
