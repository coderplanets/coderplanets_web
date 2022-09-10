import { useEffect } from 'react'
// import { } from 'ramda'

import type { TCopyToClipboardState } from '@/hooks/useClipboard'

import { cutRest, toast } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
// import S from './service'

import type { TStore } from './store'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:SubscribeContent')

/**
 * change type of the describe view
 *
 * @param {String} view - view type default | detail
 */
export const changeView = (view: string): void => {
  store.mark({ subscribeView: view })
}

/**
 * notify user about copy to clipboard state
 *
 * @param {*} { error, value }
 */
export const notifyCopy = ({ error, value }: TCopyToClipboardState): void => {
  const toastTitle = !error ? '已复制到剪切板' : '复制到剪切板出错'
  const toastDesc = !error ? cutRest(value, 10) : error

  toast('info', toastTitle, toastDesc as string)
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
