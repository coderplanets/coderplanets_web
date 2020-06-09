import { useEffect } from 'react'
import { pickBy } from 'ramda'

import { TYPE, EVENT, ERR, THREAD } from '@/constant'
import {
  asyncSuit,
  buildLog,
  scrollToTabber,
  send,
  notEmpty,
  errRescue,
} from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:VideosThread')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  receive: [
    EVENT.REFRESH_VIDEOS,
    EVENT.PREVIEW_CLOSED,
    EVENT.TABBER_CHANGE,
    EVENT.C11N_DENSITY_CHANGE,
  ],
})

let sub$ = null
let store = null

export const loadVideos = (page = 1) => {
  const { curCommunity } = store
  const userHasLogin = store.isLogin

  const args = {
    filter: {
      page,
      size: store.pageDensity,
      ...store.filtersData,
      tag: store.activeTagData.title,
      community: curCommunity.raw,
    },
    userHasLogin,
  }

  args.filter = pickBy(notEmpty, args.filter)

  log('load videos --> ', args)
  store.mark({ curView: TYPE.LOADING })
  sr71$.query(S.pagedVideos, args)
  store.markRoute({ page, ...store.filtersData })
}

export const onPageChange = (page) => {
  scrollToTabber()
  loadVideos(page)
}

/**
 * preview the current article
 *
 * @param {*} data {id: string, title: string}
 */
export const onPreview = (data) => {
  setTimeout(() => store.setViewedFlag(data.id), 1500)
  const type = TYPE.PREVIEW_VIDEO_VIEW
  const thread = THREAD.VIDEO

  send(EVENT.PREVIEW_OPEN, { type, thread, data })
  store.markRoute(data.id)
}

export const onContentCreate = () => {
  if (!store.isLogin) return store.authWarning()

  send(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_VIDEO_CREATE })
}

export const onTagSelect = (tag) => {
  store.selectTag(tag)
  loadVideos()
  store.markRoute({ tag: tag.title })
}

export const onFilterSelect = (option) => {
  store.selectFilter(option)
  store.markRoute({ ...store.filtersData })
  loadVideos()
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('pagedVideos'),
    action: ({ pagedVideos }) => {
      log('========> pagedVideos: ', pagedVideos)
      let curView = TYPE.RESULT
      if (pagedVideos.entries.length === 0) {
        curView = TYPE.RESULT_EMPTY
      }
      store.mark({ curView, pagedVideos })
    },
  },
  {
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: (res) => {
      const { data } = res[EVENT.TABBER_CHANGE]
      const { activeThread } = data
      if (activeThread === THREAD.VIDEO) {
        store.mark({ activeTag: null })
        return loadVideos()
      }
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_VIDEOS),
    action: () => loadVideos(),
  },
  {
    match: asyncRes(EVENT.C11N_DENSITY_CHANGE),
    action: (res) => {
      const { type } = res[EVENT.C11N_DENSITY_CHANGE]
      if (type === THREAD.VIDEO) loadVideos(store.pagedVideos.pageNumber)
    },
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => {
      store.setViewing({ video: {} })
      store.markRoute({ ...store.filtersData, ...store.tagQuery })
    },
  },
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags: tags }) => store.mark({ tags }),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {},
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      errRescue({ type: ERR.TIMEOUT, details, path: 'AccountEditor' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'VideosThread' }),
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store) =>
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      if (store.curView === TYPE.LOADING || !sub$) return false
      log('===== do uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
