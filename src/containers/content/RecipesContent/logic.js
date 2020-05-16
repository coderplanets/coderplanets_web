import { useEffect } from 'react'
// import R from 'ramda'

import { buildLog } from '@/utils'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:RecipesContent')

export const topFilterOnChange = () => {}
/**
 * change main view (recipes or cheatsheet)
 * @param {string} mainView
 */
export const mainViewOnChange = mainView => {
  store.mark({ mainView })
}

/**
 * change the display type of current recipes
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
