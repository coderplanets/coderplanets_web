import { useEffect } from 'react'

import { scrollToTop } from '@/utils/dom'
import { buildLog } from '@/utils/logger'
import { STEP } from './constant'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:WorksEditor')

export const updateWorks = (part, value) => {
  const { worksData } = store
  store.mark({
    works: { ...worksData, [part]: value },
  })
}

export const toggleTemplate = (useTemplate) => {
  store.mark({ useTemplate })
}

// to next launch step
export const nextStep = () => {
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

export const gotoStep = (step) => {
  store.mark({ step })
}

// ###############################
// init & uninit handlers
// ###############################

export const useInit = (_store) => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    // return () => store.reset()
  }, [_store])
}
