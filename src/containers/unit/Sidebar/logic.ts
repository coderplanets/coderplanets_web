import { useEffect } from 'react'
// import { arrayMove } from 'react-sortable-hoc'
import { addIndex, map, reject, propEq, contains } from 'ramda'

import type { TCommunity } from '@/spec'
import { HCN, EVENT, ERR, ROUTE } from '@/constant'

import { Global, errRescue, changeToCommunity } from '@/utils/helper'
import asyncSuit from '@/utils/async'
import { buildLog } from '@/utils/logger'

import type { TStore } from './store'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:Sidebar')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.LOGOUT, EVENT.LOGIN, EVENT.SESSION_CHANGED],
})

let store: TStore | undefined
let sub$ = null

export const setPin = (): void => {
  if (store.pin) {
    store.mark({ sortOptActive: false })
  }
  store.mark({ pin: !store.pin })
}

export const searchOnFocus = (): void => store.mark({ pin: true })

export const searchCommunityValueOnChange = (e): void =>
  store.mark({ searchCommunityValue: e.target.value })

export const onCommunitySelect = (community: TCommunity): void => {
  // NOTE: check page, if current it's from communities then redirect whole page
  const { mainPath } = store.curRoute
  if (contains(mainPath, [ROUTE.EXPLORE])) {
    Global.location.href = `/${community.raw}`
    return
  }

  changeToCommunity(community.raw)
}

export const sortBtnOnClick = (): void => {
  if (!store.isLogin) return store.authWarning()

  if (!store.sortOptActive) {
    store.mark({ pin: true })
  }
  store.mark({ sortOptActive: !store.sortOptActive })
}

const mapIndexed = addIndex(map)

export type TSortDone = { oldIndex: number; newIndex: number }
// export const onSortMenuEnd = ({ oldIndex, newIndex }: TSortDone): void => {
//   const sortedCommunities = arrayMove(store.communitiesData, oldIndex, newIndex)
//   setC11N(sortedCommunities)
//   store.onSortCommunities(sortedCommunities)
// }

const setC11N = (sortedCommunities): void => {
  if (!store.isLogin) return store.authWarning()

  sortedCommunities = reject(propEq('raw', HCN), sortedCommunities)
  const sidebarCommunitiesIndex = mapIndexed(
    (c: TCommunity, index: number) => ({ community: c.raw, index }),
    sortedCommunities,
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

export const loadCommunities = (): void => {
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

export const togglePulled = (): void =>
  store.mark({ ispulled: !store.ispulled })

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
    match: asyncRes(EVENT.SESSION_CHANGED),
    action: () => refreshSubedCommunitiesIfNeed(),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      //
    },
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
export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      // log('effect uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
