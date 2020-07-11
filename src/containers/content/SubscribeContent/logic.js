import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog, cutFrom } from '@/utils'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:SubscribeContent')

/**
 * change type of the describe view
 *
 * @param {String} view - view type default | detail
 */
export const changeView = (view) => {
  store.mark({ subscribeView: view })
}

/**
 * notify user about copy to clipboard state
 *
 * @param {*} { error, value }
 */
export const notifyCopy = ({ error, value }) => {
  const type = !error ? 'info' : 'error'
  const title = !error ? '已复制到剪切板' : '复制到剪切板出错'
  const msg = !error ? cutFrom(value, 10) : error

  store.toast(type, { title, msg, position: 'topCenter' })
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
