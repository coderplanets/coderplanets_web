import { useEffect } from 'react'
// import { } from 'ramda'

import { debounce } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

// import S from './schma'
import type { TStore } from './store'
import type { TTagView } from './spec'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:CommunityTagSetter')

export const changeTagView = (tagView: TTagView): void => {
  store.mark({ tagView })
}

export const communityOnSearch = ({ target: { value } }): void => {
  store.mark({ communitySearchValue: value })
  doSearch()
}

const doSearch = debounce(() => {
  const { communitySearchValue } = store
  console.log('do search: ', communitySearchValue)
}, 300)

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
