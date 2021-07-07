import { useEffect } from 'react'
// import { } from 'ramda'

import type { TTag } from '@/spec'

import { TYPE, EVENT, THREAD } from '@/constant'
import { send, buildLog, scrollToTabber } from '@/utils'

// import S from './service'
import type { TStore } from './store'

let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:BlogsThread')

export const loadBlogs = (page = 1): void => {
  log('loadBlogs')
}

/**
 * preview the current article
 *
 * @param {*} data {id: string, title: string}
 */
export const onPreview = (data): void => {
  setTimeout(() => store.setViewedFlag(data.id), 1500)
  const type = TYPE.DRAWER.BLOG_VIEW
  const thread = THREAD.BLOG

  send(EVENT.DRAWER.OPEN, { type, thread, data })
  store.markRoute(data.id)
}

export const onContentCreate = (): void => {
  if (!store.isLogin) return store.authWarning()

  send(EVENT.DRAWER.OPEN, { type: TYPE.DRAWER.BLOG_CREATE })
}

export const onAdsClose = (): void => {
  log('onAdsClose')
  if (store.isMemberOf('seniorMember') || store.isMemberOf('sponsorMember')) {
    return log('do custom ads')
  }
}

export const onPageChange = (page = 1): void => {
  scrollToTabber()
  loadBlogs(page)
}

export const onFilterSelect = (option): void => {
  store.selectFilter(option)
  log('cur filter: ', store.filtersData)
  store.markRoute({ ...store.filtersData })
  loadBlogs()
}

export const onTagSelect = (): void => {
  // store.selectTag(tag)
  // loadBlogs()
  // store.markRoute({ tag: tag.title })
}

export const onUserSelect = (): void => {
  //
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
