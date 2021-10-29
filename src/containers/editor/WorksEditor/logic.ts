import { useEffect } from 'react'
import { uniqBy, prop, reject } from 'ramda'

import type {
  TSelectOption,
  TEditValue,
  TCommunity,
  TTechStackCategory,
} from '@/spec'
import { ERR, HCN } from '@/constant'

import { scrollToTop } from '@/utils/dom'
import { selectCommunity, errRescue } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'
import { updateEditing } from '@/utils/mobx'
import { getParameterByName } from '@/utils/route'

import { STEP } from './constant'
import type { TStore } from './store'
import type { TStep } from './spec'

import S from './schema'

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:WorksEditor')

// 当前添加的技术栈类别，因为 CommunitySetter 是一个 container, 只有一个
export const setActiveTechCategory = (c: TTechStackCategory): void => {
  store.mark({ activeTechCategory: c })
  selectCommunity(c)
}

export const addTechStack = (tech: TCommunity): void => {
  const { activeTechCategory, techCommunities } = store

  const techstacks = uniqBy(
    prop('raw'),
    techCommunities[activeTechCategory].concat(tech),
  )

  store.mark({ [activeTechCategory]: techstacks })
}

export const removeTechStack = (tech: TCommunity): void => {
  const { activeTechCategory, techCommunities } = store

  const techstacks = reject(
    (t: TCommunity) => t.raw === tech.raw,
    techCommunities[activeTechCategory],
  )

  store.mark({ [activeTechCategory]: techstacks })
}

export const inputOnChange = (e: TEditValue, key: string): void => {
  updateEditing(store, key, e)
}

export const citiesOnChange = (options: TSelectOption[]): void => {
  store.mark({ cities: options.map((o) => o.value) })
}

// Radio style checker hanlder
export const checkerOnChange = (key: string, value: string): void => {
  store.mark({ [key]: value })
}

export const changeSocial = (platform: string, option: TSelectOption): void => {
  store.updateSocialInfo(platform, option)
}

export const removeSocial = (platform: string): void => {
  store.removeSocialInfo(platform)
}

export const addSocial = (): void => {
  const { inputData, socialOptions } = store
  const { socialInfo } = inputData
  const platform = socialOptions[0].value

  const newSocialInfo = [
    ...socialInfo,
    { platform, link: store.getSocialPrefix(platform) },
  ]

  store.mark({ socialInfo: newSocialInfo })
}

export const previousStep = (): void => {
  const { step } = store
  if (step === STEP.FOUR) return

  setTimeout(scrollToTop, 300)

  switch (step) {
    case STEP.ONE: {
      return store.mark({ step: STEP.ZERO })
    }
    case STEP.TWO: {
      return store.mark({ step: STEP.ONE })
    }
    case STEP.THREE: {
      return store.mark({ step: STEP.TWO })
    }
    case STEP.FOUR: {
      return store.mark({ step: STEP.THREE })
    }
    default:
      // eslint-disable-next-line no-useless-return
      return
  }
}

// to next launch step
export const nextStep = (): void => {
  const { step, isCurrentStepValid } = store

  if (!isCurrentStepValid) {
    return store.setErrorMsgIfNeed()
  }

  setTimeout(scrollToTop, 300)

  switch (step) {
    case STEP.ZERO: {
      return store.mark({ step: STEP.ONE })
    }

    case STEP.ONE: {
      return store.mark({ step: STEP.TWO })
    }
    case STEP.TWO: {
      return store.mark({ step: STEP.THREE })
    }
    case STEP.THREE: {
      return store.mark({ step: STEP.FOUR })
    }
    default:
      // eslint-disable-next-line no-useless-return
      return
  }
}

export const gotoStep = (step: TStep): void => {
  // if target step is the last launchpart, , can't go
  if (step === STEP.FOUR) return
  store.mark({ step })
}

export const setWordsCountState = (wordsCountReady: boolean): void => {
  store?.mark({ wordsCountReady })
}

export const onPublish = (): void => {
  const { inputData } = store
  const { teammates, ...args } = inputData

  store.mark({ publishing: true })
  sr71$.mutate(S.createWorks, args)
}

// ###############################
// init & uninit handlers
// ###############################

const loadCommunity = (): void => {
  // const { mode } = store
  // if (mode !== 'publish') return
  const raw = getParameterByName('community')?.toLowerCase() || HCN

  sr71$.query(S.community, { raw })
}

const setDefaultTeammate = (): void => {
  const { accountInfo, inputData } = store
  store.mark({ teammates: [accountInfo, ...inputData.techstacks] })
}

const DataSolver = [
  {
    match: asyncRes('createWorks'),
    action: (data) => {
      store.mark({ publishing: false, publishDone: true })
      setTimeout(() => nextStep(), 500)
    },
  },
  {
    match: asyncRes('community'),
    action: ({ community }) => store.mark({ community }),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: ({ details }) => {
      store.mark({ publishing: false })
      errRescue({ type: ERR.GRAPHQL, details, path: 'publishWorks' })
      //
    },
  },
]

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)

    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    loadCommunity()
    setDefaultTeammate()
    return () => {
      sr71$.stop()
      // sub$.unsubscribe()
      sub$ = null
      store.reset()
    }
  }, [_store])
}
