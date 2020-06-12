import { useEffect } from 'react'
import { curry } from 'ramda'

import { EVENT, ERR } from '@/constant'
import { asyncSuit, buildLog, errRescue, updateEditing } from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:CommunitiesContent')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  receive: [EVENT.LOGOUT, EVENT.LOGIN],
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
    SETUP_INFO: 'SETUP_INFO',
  },
}

/**
 * pervious step based on current step
 * 当前流程的上一步流程
 * @public
 */
export const pervStep = () => {
  const { COMMUNITY_TYPE, STEP } = LN
  const { step, communityType } = store

  if (communityType === COMMUNITY_TYPE.WORK) {
    if (step === STEP.SETUP_DOMAIN) store.mark({ step: STEP.SELECT_TYPE })
    if (step === STEP.SETUP_INFO) store.mark({ step: STEP.SETUP_DOMAIN })
  }
}

/**
 * next step based on current step
 * 当前流程的下一步流程
 * @public
 */
export const nextStep = () => {
  const { COMMUNITY_TYPE, STEP } = LN
  const { step, communityType } = store

  if (communityType === COMMUNITY_TYPE.WORK) {
    if (step === STEP.SELECT_TYPE) store.mark({ step: STEP.SETUP_DOMAIN })
    if (step === STEP.SETUP_DOMAIN) store.mark({ step: STEP.SETUP_INFO })
  }
}

/**
 * change the type of the creating community
 * 改变创建社区类型
 * @public
 */
export const communityTypeOnChange = (communityType) =>
  store.mark({ communityType })

/**
 * handle input field change
 * @param {part} string field name
 * @param {e} htmlEvent
 * @public
 */
export const inputOnChange = curry((part, e) => {
  console.log('== inputOnChange e: ', e)

  updateEditing(store, part, e)
})

/**
 * search communities by current searchValue in store
 * @private
 */
export const searchCommunities = () => {
  const { searchValue: title } = store
  const args = { title, userHasLogin: store.isLogin }

  sr71$.query(S.searchCommunities, args)
}

/* when error occured cancel all the loading state */
const cancelLoading = () =>
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
    action: () => cancelLoading(),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'CommunitiesContent' })
      cancelLoading()
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancelLoading()
      errRescue({ type: ERR.NETWORK, path: 'CommunitiesContent' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store) => {
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
