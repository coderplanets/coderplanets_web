import R from 'ramda'

import { PAGE_SIZE } from '../../config'
import {
  makeDebugger,
  asyncErr,
  $solver,
  ERR,
  TYPE,
  EVENT,
  THREAD,
  scrollIntoEle,
  asyncRes,
  dispatchEvent,
  notEmpty,
} from '../../utils'

import S from './schema'
import SR71 from '../../utils/network/sr71'

const sr71$ = new SR71({
  resv_event: [EVENT.REFRESH_VIDEOS, EVENT.PREVIEW_CLOSED, EVENT.TABBER_CHANGE],
})

let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:VideosThread')

let store = null

export function loadVideos(page = 1) {
  const { curCommunity } = store
  const userHasLogin = store.isLogin

  store.markState({ curView: TYPE.LOADING })

  const args = {
    filter: {
      page,
      size: PAGE_SIZE.D,
      ...store.filtersData,
      tag: store.activeTagData.title,
      community: curCommunity.raw,
    },
    userHasLogin,
  }

  args.filter = R.pickBy(notEmpty, args.filter)
  scrollIntoEle(TYPE.APP_HEADER_ID)

  debug('load videos --> ', args)
  sr71$.query(S.pagedVideos, args)
  store.markRoute({ page, ...store.filtersData })
}

export function onPreview(data) {
  setTimeout(() => store.setViewedFlag(data.id), 1500)

  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_VIDEO_VIEW,
    thread: THREAD.VIDEO,
    data,
  })

  store.markRoute({
    preview: THREAD.VIDEO,
    id: data.id,
    community: store.curCommunity.raw,
    ...store.tagQuery,
    ...store.filtersData,
  })
}

export function createContent() {
  debug('createContent')
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_VIDEO_CREATE })
}

export function onTagSelect(tag) {
  store.selectTag(tag)
  loadVideos()
  store.markRoute({ tag: tag.title })
}

export const onFilterSelect = option => {
  store.selectFilter(option)
  store.markRoute({ ...store.filtersData })
  loadVideos()
}
export const onCustomChange = option => store.updateC11N(option)

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('pagedVideos'),
    action: ({ pagedVideos }) => {
      debug('========> pagedVideos: ', pagedVideos)
      let curView = TYPE.RESULT
      if (pagedVideos.entries.length === 0) {
        curView = TYPE.RESULT_EMPTY
      }
      store.markState({ curView, pagedVideos })
    },
  },
  {
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: res => {
      const { data } = res[EVENT.TABBER_CHANGE]
      const { activeThread } = data
      if (activeThread === THREAD.VIDEO) return loadVideos()
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_VIDEOS),
    action: () => loadVideos(),
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
    action: ({ partialTags: tags }) => store.markState({ tags }),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.CRAPHQL),
    action: ({ details }) => {
      debug('ERR.CRAPHQL -->', details)
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      debug('ERR.TIMEOUT -->', details)
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: ({ details }) => {
      debug('ERR.NETWORK -->', details)
    },
  },
]

export function init(_store) {
  store = _store

  if (sub$) return false
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export function uninit() {
  if (store.curView === TYPE.LOADING || !sub$) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
