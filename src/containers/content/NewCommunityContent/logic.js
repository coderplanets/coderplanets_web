import { useEffect } from 'react'

import { EVENT, ERR } from '@constant'
import { asyncSuit, buildLog, errRescue, updateEditing } from '@utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:CommunitiesContent')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  recieve: [EVENT.LOGOUT, EVENT.LOGIN],
})

let store = null
let sub$ = null

// local namespace
export const LN = {
  COMMUNITY_TYPE: {
    STANDER: 'STANDER',
    CITY: 'CITY',
    WORK: 'WORK',
    TEAM: 'TEAM',
  },
  STEP: {
    SELECT_TYPE: 'SELECT_TYPE',
    SETUP_DOMAIN: 'SETUP_DOMAIN',
  },
}

/**
 * change the type of the creating community
 * 改变创建社区类型
 * @public
 */
export const communityTypeOnChange = communityType => {
  store.mark({ communityType })
}

/**
 * search communities by current searchValue in store
 * @private
 */
const searchCommunities = () => {
  const { searchValue: title } = store
  const args = { title, userHasLogin: store.isLogin }

  sr71$.query(S.searchCommunities, args)
}

/**
 * change search status
 * @ppublic
 */
export const changeSearchStatus = status => store.mark({ ...status })

/**
 * search for communities
 * @param {e} htmlEvent
 * @return {void}
 */
export const searchOnChange = e => {
  updateEditing(store, 'searchValue', e)
  searchCommunities()
}

/* when error occured cancle all the loading state */
const cancleLoading = () =>
  store.mark({
    subscribing: false,
    searching: false,
  })

const DataSolver = [
  {
    match: asyncRes('pagedCommunities'),
    action: ({ pagedCommunities }) => store.mark({ pagedCommunities }),
  },
  {
    match: asyncRes('pagedCategories'),
    action: ({ pagedCategories }) => store.mark({ pagedCategories }),
  },
  {
    match: asyncRes('searchCommunities'),
    action: ({ searchCommunities: pagedCommunities }) =>
      store.mark({ pagedCommunities, searching: false }),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => cancleLoading(),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'CommunitiesContent' })
      cancleLoading()
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancleLoading()
      errRescue({ type: ERR.NETWORK, path: 'CommunitiesContent' })
    },
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

    return () => {
      // log('effect uninit')
      if (!sub$) return false
      // log('===== do uninit')
      sub$.unsubscribe()
    }
  }, [_store])
}
