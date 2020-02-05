import { useEffect } from 'react'

import { EVENT, ERR } from '@constant'
import { asyncSuit, buildLog, errRescue } from '@utils'

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

export const pervStep = () => {
  const { COMMUNITY_TYPE, STEP } = LN
  const { step, communityType } = store

  if (communityType === COMMUNITY_TYPE.WORK) {
    if (step === STEP.SETUP_DOMAIN) store.mark({ step: STEP.SELECT_TYPE })
  }
}

export const nextStep = () => {
  const { COMMUNITY_TYPE, STEP } = LN
  const { step, communityType } = store

  if (communityType === COMMUNITY_TYPE.WORK) {
    if (step === STEP.SELECT_TYPE) store.mark({ step: STEP.SETUP_DOMAIN })
  }
}

/**
 * change the type of the creating community
 * 改变创建社区类型
 * @public
 */
export const communityTypeOnChange = communityType =>
  store.mark({ communityType })

/**
 * community domain on change
 * 设置域名
 * @public
 */
export const doaminOnChange = ({ target: { value: domainValue } }) =>
  store.mark({ domainValue })

/**
 * search communities by current searchValue in store
 * @private
 */
export const searchCommunities = () => {
  const { searchValue: title } = store
  const args = { title, userHasLogin: store.isLogin }

  sr71$.query(S.searchCommunities, args)
}

/**
 * change search status
 * @ppublic
 */
export const changeSearchStatus = status => store.mark({ ...status })

/* when error occured cancle all the loading state */
const cancleLoading = () =>
  store.mark({
    subscribing: false,
    searching: false,
  })

const DataSolver = [
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
