import { useEffect } from 'react'
import { pick } from 'ramda'

import type { TEditValue } from '@/spec'
import { EVENT, ERR } from '@/constant'
import { asyncSuit, buildLog, errRescue, updateEditing } from '@/utils'

import type { TStore } from './store'
import type { TCommunityType } from './spec'
import { COMMUNITY_TYPE, STEP } from './constant'

import S from './schema'

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
  const { step } = store

  if (step === STEP.SETUP_DOMAIN) store.mark({ step: STEP.SELECT_TYPE })
  if (step === STEP.SETUP_INFO) store.mark({ step: STEP.SETUP_DOMAIN })
  if (step === STEP.MORE_INFO) store.mark({ step: STEP.SETUP_INFO })
}

/**
 * next step based on current step
 * 当前流程的下一步流程
 * @public
 */
export const nextStep = (): void => {
  const { step } = store

  if (step === STEP.SELECT_TYPE) store.mark({ step: STEP.SETUP_DOMAIN })
  if (step === STEP.SETUP_DOMAIN) {
    checkIfCommunityExist()
  }
  if (step === STEP.SETUP_INFO) {
    store.mark({ step: STEP.MORE_INFO })
  }
}

const checkIfCommunityExist = () => {
  const { raw } = store

  store.mark({ checking: true, communityExist: false })
  sr71$.query(S.isCommunityExist, { raw })
}

const checkPendingApply = () => {
  sr71$.query(S.hasPendingCommunityApply, {})
}

/**
 * change the type of the creating community
 * 改变创建社区类型
 * @public
 */
export const communityTypeOnChange = (communityType: TCommunityType): void => {
  store.mark({ communityType })
}

export const applyCommunity = (): void => {
  const args = pick(['title', 'logo', 'desc', 'raw', 'applyMsg'], store)

  store.mark({ submitting: true })
  sr71$.mutate(S.applyCommunity, {
    applyCategory: store.communityType,
    ...args,
  })
}

/**
 * handle input field change
 * @param {part} string field name
 * @param {e} htmlEvent
 * @public
 */
export const inputOnChange = (e: TEditValue, part: string): void => {
  if (part === 'raw') {
    store.mark({ communityExist: false })
  }
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
  {
    match: asyncRes('isCommunityExist'),
    action: ({ isCommunityExist }) => {
      store.mark({ checking: false, communityExist: isCommunityExist.exist })

      if (!isCommunityExist.exist) {
        store.mark({ step: STEP.SETUP_INFO })
      }
    },
  },
  {
    match: asyncRes('hasPendingCommunityApply'),
    action: ({ hasPendingCommunityApply }) => {
      store.mark({ hasPendingApply: hasPendingCommunityApply.exist })
    },
  },
  {
    match: asyncRes('applyCommunity'),
    action: () => store.mark({ step: STEP.FINISHED }),
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

    if (store.isLogin) {
      checkPendingApply()
    }

    return () => {
      // log('effect uninit')
      if (!sub$) return
      // log('===== do uninit')
      sub$.unsubscribe()
    }
  }, [_store])
}
