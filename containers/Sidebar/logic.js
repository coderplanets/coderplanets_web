import R from 'ramda'

// const debug = makeDebugger('L:sidebar')
import { $solver, ERR, makeDebugger } from '../../utils'
import S from './schema'

import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71()

let sidebar = null

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:Sidebar')
/* eslint-enable no-unused-vars */

export function pin() {
  sidebar.markState({ pin: !sidebar.pin })
}

export function loadCommunities() {
  debug('loadCommunities --')
  const args = {
    filter: { page: 1, size: 20 },
  }

  sr71$.query(S.communities, args)
}

const DataSolver = [
  {
    match: R.has('communities'),
    action: res => {
      const data = res.communities
      debug('----> dataResolver  --->', data)
    },
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
  loadCommunities()
}
