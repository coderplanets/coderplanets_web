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
  errRescue,
} from 'utils'

import SR71 from 'utils/network/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.LOGOUT, EVENT.LOGIN, EVENT.SESSTION_ROUTINE],
})

let store = null
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:Sidebar')

export const setPin = () => store.markState({ pin: !store.pin })

export const onCommunitySelect = community => {
  store.setViewing({ community, activeThread: THREAD.POST, post: {} })

  store.markRoute({
    mainPath: community.raw,
    subPath: thread2Subpath(THREAD.POST),
  })

  dispatchEvent(EVENT.COMMUNITY_CHANGE)
}

const mapIndexed = R.addIndex(R.map)

export const onSortMenuEnd = ({ oldIndex, newIndex }) => {
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

export const loadCommunities = () => {
  const args = { filter: { page: 1, size: 30 } }
  sr71$.query(S.subscribedCommunities, args)
}

/*
   this is a temp solution for server-side page cache
   since client can not refresh server-side cache when user login/logout
   we need manually refresh the subed communities
 */
const refreshSubedCommunitiesIfNeed = () => {
  const subedLength = store.accountInfo.subscribedCommunitiesCount
  const curSubedLength = store.communitiesData.length

  debug('subedLength ', subedLength)
  debug('curSubedLength ', curSubedLength)

  if (store.isLogin && subedLength !== curSubedLength) {
    debug('do refreshSubedCommunities login')
    return loadCommunities()
  }

  if (!store.isLogin && subedLength === curSubedLength) {
    debug('do refreshSubedCommunities not login')
    return loadCommunities()
  }
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
  {
    match: asyncRes(EVENT.SESSTION_ROUTINE),
    action: () => refreshSubedCommunitiesIfNeed(),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {},
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) =>
      errRescue({ type: ERR.TIMEOUT, details, path: 'Sidebar' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'Sidebar' }),
  },
]

export const init = _store => {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export const uninit = () => {
  if (!sub$) return false

  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
