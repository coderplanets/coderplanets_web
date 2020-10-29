import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog } from '@/utils'
// import S from './service'

let store = null

/* eslint-disable-next-line */
const log = buildLog('L:ArticleFooter')

export const toggleActionPanel = (curActionPanelType) => {
  const { showActionPanel, actionPanelType } = store
  if (curActionPanelType === actionPanelType) {
    store.mark({ showActionPanel: !showActionPanel, actionPanelType })
  } else {
    store.mark({ showActionPanel: true, actionPanelType: curActionPanelType })
  }
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
