import { useEffect } from 'react'
import { startsWith } from 'ramda'

import type { TSelectOption } from '@/spec'

import { scrollToTop } from '@/utils/dom'
import { buildLog } from '@/utils/logger'
import { STEP } from './constant'
import type { TStore } from './store'
import type { TStep } from './spec'
// import S from './service'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:WorksEditor')

export const updateWorks = (part, value): void => {
  const { worksData } = store
  store.mark({
    works: { ...worksData, [part]: value },
  })
}

export const updateOSS = (value: string): void => {
  updateWorks('ossAddr', value)

  if (startsWith('https://github.com', value)) {
    updateWorks('isOSS', true)
  } else {
    updateWorks('isOSS', false)
  }
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

// to next launch step
export const nextStep = (): void => {
  const { step, isCurrentStepValid } = store

  if (!isCurrentStepValid) return

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
