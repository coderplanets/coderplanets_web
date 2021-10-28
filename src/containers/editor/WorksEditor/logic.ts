import { useEffect } from 'react'
import { uniqBy, prop, reject } from 'ramda'

import type {
  TSelectOption,
  TEditValue,
  TCommunity,
  TTechStackCategory,
} from '@/spec'

import { scrollToTop } from '@/utils/dom'
import { selectCommunity, toast } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import { updateEditing } from '@/utils/mobx'

import { STEP } from './constant'
import type { TStore } from './store'
import type { TStep } from './spec'
// import S from './service'

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

export const toggleTemplate = (useTemplate: boolean): void => {
  store.mark({ useTemplate })
}

export const previousStep = (): void => {
  const { step } = store

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

export const gotoStep = (step: TStep): void => store.mark({ step })

// ###############################
// init & uninit handlers
// ###############################

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    // return () => store.reset()
  }, [_store])
}
