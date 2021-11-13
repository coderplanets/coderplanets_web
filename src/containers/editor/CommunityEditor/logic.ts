import { useEffect } from 'react'

import type { TEditValue } from '@/spec'
import { EVENT, ERR } from '@/constant'
import { asyncSuit, buildLog, errRescue, updateEditing } from '@/utils'

import type { TStore } from './store'
import type { TCommunityType } from './spec'
import { COMMUNITY_TYPE, STEP } from './constant'

// import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:ExploreContent')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [EVENT.LOGOUT, EVENT.LOGIN],
})

let store: TStore | undefined
let sub$ = null

/**
 * pervious step based on current step
 * 当前流程的上一步流程
 * @public
 */
export const pervStep = (): void => {
  const { step, communityType } = store

  if (communityType === COMMUNITY_TYPE.WORKS) {
    if (step === STEP.SETUP_DOMAIN) store.mark({ step: STEP.SELECT_TYPE })
    if (step === STEP.SETUP_INFO) store.mark({ step: STEP.SETUP_DOMAIN })
  }
}

/**
 * next step based on current step
 * 当前流程的下一步流程
 * @public
 */
export const nextStep = (): void => {
  const { step, communityType } = store

  if (communityType === COMMUNITY_TYPE.WORKS) {
    if (step === STEP.SELECT_TYPE) store.mark({ step: STEP.SETUP_DOMAIN })
    if (step === STEP.SETUP_DOMAIN) store.mark({ step: STEP.SETUP_INFO })
  }
}

/**
 * change the type of the creating community
 * 改变创建社区类型
 * @public
 */
export const communityTypeOnChange = (communityType: TCommunityType): void => {
  store.mark({ communityType })
}

/**
 * handle input field change
 * @param {part} string field name
 * @param {e} htmlEvent
 * @public
 */
export const inputOnChange = (e: TEditValue, part: string): void => {
  updateEditing(store, part, e)
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
      errRescue({ type: ERR.TIMEOUT, details, path: 'ExploreContent' })
      cancelLoading()
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      cancelLoading()
      errRescue({ type: ERR.NETWORK, path: 'ExploreContent' })
    },
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
      if (!sub$) return
      // log('===== do uninit')
      sub$.unsubscribe()
    }
  }, [_store])
}
