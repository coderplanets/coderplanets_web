import R from 'ramda'

import {
  asyncRes,
  asyncErr,
  makeDebugger,
  dispatchEvent,
  EVENT,
  ERR,
  TYPE,
  ROUTE,
  THREAD,
  $solver,
  scrollIntoEle,
  notEmpty,
  // GA,
} from '../../utils'

import { PAGE_SIZE } from '../../config'
import S from './schema'
import SR71 from '../../utils/network/sr71'
// import sr71$ from '../../utils/network/sr71_simple'

const sr71$ = new SR71({
  resv_event: [EVENT.REFRESH_JOBS, EVENT.PREVIEW_CLOSED, EVENT.TABBER_CHANGE],
})
/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:JobsThread')
/* eslint-enable no-unused-vars */

let store = null
let sub$ = null

export const inAnchor = () => store.setHeaderFix(false)
export const outAnchor = () => store.setHeaderFix(true)

export function loadJobs(page = 1) {
  const { curCommunity } = store
  const userHasLogin = store.isLogin

  store.markState({ curView: TYPE.LOADING })

  const args = {
    filter: {
      page,
      size: PAGE_SIZE.M,
      ...store.filtersData,
      tag: store.activeTagData.title,
    },
    userHasLogin,
  }

  // if is not home community, load spec job in that community
  if (curCommunity.raw !== ROUTE.HOME) {
    args.filter = R.merge(args.filter, { community: curCommunity.raw })
  }

  args.filter = R.pickBy(notEmpty, args.filter)
  scrollIntoEle(TYPE.APP_HEADER_ID)

  debug('######## loadJobs args: ', args)
  sr71$.query(S.pagedJobs, args)
  store.markRoute({ page })
}

export function onTitleSelect(data) {
  setTimeout(() => store.setViewedFlag(data.id), 1500)
  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_JOB_VIEW,
    thread: THREAD.JOB,
    data,
  })

  store.markRoute({
    preview: THREAD.JOB,
    id: data.id,
    ...store.tagQuery,
    ...store.filtersData,
  })
}

export function createContent() {
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_JOB_CREATE })
}

export function onTagSelect(tag) {
  store.selectTag(tag)
  loadJobs()
  store.markRoute({ tag: tag.title })
}

export const onFilterSelect = option => store.selectFilter(option)
export const onCustomChange = option => store.updateC11N(option)

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('pagedJobs'),
    action: ({ pagedJobs }) => {
      debug('pagedJobs --> ', pagedJobs)
      let curView = TYPE.RESULT
      if (pagedJobs.entries.length === 0) {
        curView = TYPE.RESULT_EMPTY
      }
      store.markState({ curView, pagedJobs })
    },
  },
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags: tags }) => store.markState({ tags }),
  },
  {
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: res => {
      const { data } = res[EVENT.TABBER_CHANGE]
      const { activeThread } = data
      if (activeThread === THREAD.JOB) return loadJobs()
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_JOBS),
    action: () => loadJobs(),
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => store.setViewing({ job: {} }),
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

  if (sub$) return false // sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export function uninit() {
  if (store.curView === TYPE.LOADING || !sub$) return false
  debug('===== do uninit')
  sub$.unsubscribe()
  sub$ = null
}
