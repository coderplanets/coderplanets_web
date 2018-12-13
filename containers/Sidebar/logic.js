import R from 'ramda'
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
  store.setViewing({ community, activeThread: THREAD.POST, post: {} })

  store.markRoute({
    mainPath: community.raw,
    subPath: thread2Subpath(THREAD.POST),
  })

  dispatchEvent(EVENT.COMMUNITY_CHANGE)
}

const mapIndexed = R.addIndex(R.map)

export function onSortMenuEnd({ oldIndex, newIndex }) {
  const sortedCommunities = arrayMove(store.communitiesData, oldIndex, newIndex)
  // TODO: sync to server
  setC11N(sortedCommunities)
  store.onSortCommunities(sortedCommunities)
}

const setC11N = sortedCommunities => {
  const { isLogin } = store
  if (!isLogin) return store.authWarning()

  // TODO: check login
  sortedCommunities = R.reject(R.propEq('raw', 'home'), sortedCommunities)
  const sidebarCommunitiesIndex = mapIndexed(
    (c, index) => ({ community: c.raw, index }),
    sortedCommunities
  )

  const { contentDivider } = store.accountInfo.customization
  const args = {
    customization: {
      contentDivider,
    },
    sidebarCommunitiesIndex,
  }
  sr71$.mutate(S.setCustomization, args)
}

export function loadCommunities() {
  const args = { filter: { page: 1, size: 30 } }
  sr71$.query(S.subscribedCommunities, args)
}

const DataSolver = [
  {
    match: asyncRes('subscribedCommunities'),
    action: ({ subscribedCommunities }) =>
      store.loadCommunities(subscribedCommunities),
  },
  {
    match: asyncRes('setCustomization'),
    action: () => loadCommunities(),
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
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export function uninit() {
  // if (store.curView === TYPE.LOADING) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
