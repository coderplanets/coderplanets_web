import R from 'ramda'
import { useEffect } from 'react'
import { arrayMove } from 'react-sortable-hoc'

import { EVENT, ERR, THREAD, ROUTE } from '@constant'
import {
  asyncSuit,
  buildLog,
  send,
  thread2Subpath,
  Global,
  errRescue,
} from '@utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:Sidebar')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  recieve: [EVENT.LOGOUT, EVENT.LOGIN, EVENT.SESSTION_ROUTINE],
})

let store = null
let sub$ = null

export const setPin = () => store.mark({ pin: !store.pin })

export const anchorTop = () => {
  if (store) store.mark({ showHeaderShadow: false })
}

export const anchorOffTop = () => {
  if (store) store.mark({ showHeaderShadow: true })
}

export const anchorBottom = () => {
  if (store) store.mark({ showFooterShadow: false })
}

export const anchorOffBottom = () => {
  if (store) store.mark({ showFooterShadow: true })
}

export const searchOnFocus = () => store.mark({ pin: true })

export const searchCommunityValueOnChange = e =>
  store.mark({ searchCommunityValue: e.target.value })

export const onCommunitySelect = community => {
  // NOTE: check page, if current it's from communities then redirect whole page
  const { mainPath } = store.curRoute
  if (R.contains(mainPath, [ROUTE.COMMUNITIES])) {
    Global.location.href = `/${community.raw}/posts`
    return false
  }

  store.setViewing({ community, activeThread: THREAD.POST, post: {} })

  store.markRoute({
    mainPath: community.raw,
    subPath: thread2Subpath(THREAD.POST),
  })

  send(EVENT.COMMUNITY_CHANGE)
}

export const sortBtnOnClick = () => {
  if (!store.sortOptActive) {
    store.mark({ pin: true })
  }
  store.mark({ sortOptActive: !store.sortOptActive })
}

const mapIndexed = R.addIndex(R.map)
export const onSortMenuEnd = ({ oldIndex, newIndex }) => {
  const sortedCommunities = arrayMove(store.communitiesData, oldIndex, newIndex)
  setC11N(sortedCommunities)
  store.onSortCommunities(sortedCommunities)
}

const setC11N = sortedCommunities => {
  const { isLogin } = store
  if (!isLogin) return store.authWarning()

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

  log('subedLength ', subedLength)
  log('curSubedLength ', curSubedLength)

  if (store.isLogin && subedLength !== curSubedLength) {
    return loadCommunities()
  }

  if (!store.isLogin && subedLength === curSubedLength) {
    log('do refreshSubedCommunities not login')
    return loadCommunities()
  }
}

export const toggleForeceRerender = (forceRerender = true) =>
  store.mark({ forceRerender })

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

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    setTimeout(() => {
      /* eslint-disable-next-line */
      toggleForeceRerender(true)
    }, 1000)

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
