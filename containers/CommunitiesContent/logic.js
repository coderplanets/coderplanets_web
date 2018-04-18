import R from 'ramda'

import { $solver, ERR, makeDebugger } from '../../utils'
import SR71 from '../../utils/network/sr71'
import S from './schema'

const sr71$ = new SR71()

/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:CommunitiesContent')
/* eslint-enable no-unused-vars */

let communitiesContent = null
/* let sub$ = null */

export function loadCommunities() {
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
      communitiesContent.loadCommunities(data)
      /* sidebar.loadSubscribedCommunities(data) */
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
  communitiesContent = selectedStore
  debug(communitiesContent)
  sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  loadCommunities()
}
