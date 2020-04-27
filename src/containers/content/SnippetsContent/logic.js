import { useEffect } from 'react'
// import R from 'ramda'

import { buildLog } from '@utils'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:SnippetsContent')

export const topFilterOnChange = () => {}

/**
 * change the display type of current snippets
 * @param {string} displayType
 */
export const galleryTypeOnChange = ({ key: galleryType }) => {
  // const { key: displayType } = item
  store.mark({ galleryType })
}

// ###############################
// init & uninit handlers
// ###############################

export const useInit = _store => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    // return () => store.reset()
  }, [_store])
}
