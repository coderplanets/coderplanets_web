// import R from 'ramda'
// const debug = makeDebugger('L:sidebar')
import { arrayMove } from 'react-sortable-hoc'

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
} from '../../utils'

/* import { GRAPHQL_ENDPOINT } from '../../config' */

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

export function setPin() {
  store.markState({ pin: !store.pin })
}

export function onCommunitySelect(community) {
  // console.log('onCommunitySelect --> ', community)
  // store.setViewing({ community, post: {}, job: {}, video: {}, repo: {} })
  store.setViewing({ community, post: {} })

  store.markRoute({
    mainPath: community.raw,
    subPath: thread2Subpath(THREAD.POST),
  })

  dispatchEvent(EVENT.COMMUNITY_CHANGE)
}

export function onSortMenuEnd({ oldIndex, newIndex }) {
  const sortedCommunities = arrayMove(store.communitiesData, oldIndex, newIndex)
  // TODO: sync to server
  store.onSortCommunities(sortedCommunities)
}

export function loadCommunities() {
  /* const user = BStore.get('user') */
  const args = {
    filter: { page: 1, size: 30 },
  }
  /* console.log('loadCommunities: ', GRAPHQL_ENDPOINT) */
  sr71$.query(S.subscribedCommunities, args)
}

const DataSolver = [
  {
    match: asyncRes('subscribedCommunities'),
    action: ({ subscribedCommunities }) =>
      store.loadCommunities(subscribedCommunities),
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
}
