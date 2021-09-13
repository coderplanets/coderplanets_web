import { useEffect } from 'react'

// import { TYPE, EVENT, ERR } from '@/constant'
import { buildLog } from '@/utils/logger'
import type { TStore } from './store'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:RichEditor')

export const someMethod = (): void => {
  /* todo */
}

// const const cancelLoading = () => {}

// ###############################
// Data & Error handlers
// ###############################

// ###############################
// init & uninit
// ###############################

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    log('effect init: ', store)

    return () => {
      // log('effect uninit')
    }
  }, [_store])
}
