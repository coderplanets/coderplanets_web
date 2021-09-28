import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog } from '@/utils/logger'

// import S from './schma'
import type { TStore } from './store'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:BlogEditor')

export const toStep = (step: string): void => {
  store.mark({ step })
}

export const nextStep = (): void => {
  const { step: curStep } = store
  let nextStep
  switch (curStep) {
    case 'STEP_1': {
      nextStep = 'STEP_2'
      break
    }
    case 'STEP_2': {
      nextStep = 'STEP_3'
      break
    }
    default: {
      nextStep = 'STEP_3'
      break
    }
  }

  store.mark({ step: nextStep })
}

export const testRSS = (): void => {
  console.log('get rss')
}

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
