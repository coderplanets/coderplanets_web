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
  // GA,
} from '../../utils'

import { PAGE_SIZE } from '../../config'
import S from './schema'
import SR71 from '../../utils/network/sr71'
// import sr71$ from '../../utils/network/sr71_simple'

const sr71$ = new SR71({
  resv_event: [
    EVENT.REFRESH_JOBS,
    EVENT.PREVIEW_CLOSED,
    EVENT.COMMUNITY_CHANGE,
    EVENT.TABBER_CHANGE,
  ],
})
/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:JobsThread')
/* eslint-enable no-unused-vars */

let store = null
let sub$ = null

const validFilter = R.pickBy(R.compose(R.not, R.isEmpty))

export const inAnchor = () => store.setHeaderFix(false)
export const outAnchor = () => store.setHeaderFix(true)

export function loadJobs(page = 1) {
  /* const { mainPath, subPath } = store.curRoute */
  scrollIntoEle(TYPE.APP_HEADER_ID)
  // NOTE: do not use viewing.community, it's too slow
  const { mainPath } = store.curRoute
  const community = mainPath
  const userHasLogin = store.isLogin

  debug('userHasLogin ====> ', userHasLogin)

  store.markState({ curView: TYPE.LOADING })

  let args = {
    filter: {
      page,
      size: PAGE_SIZE.M,
      ...store.filtersData,
      tag: store.activeTagData.raw,
    },
    userHasLogin,
  }

  args.filter = validFilter(args.filter)
  if (community !== ROUTE.HOME) {
    args = R.merge(args, { community })
  }

  debug('######## loadJobs args: ', args)
  store.markRoute({ page })
  sr71$.query(S.pagedJobs, args)
}

export function onTitleSelect(data) {
  setTimeout(() => store.setViewedFlag(data.id), 1500)
  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_JOB_VIEW,
    thread: THREAD.JOB,
    data,
  })
}

export function createContent() {
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_JOB_CREATE })
}

export function onTagSelect(obj) {
  store.selectTag(obj)
  loadJobs()
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
    match: asyncRes(EVENT.COMMUNITY_CHANGE),
    action: () => loadJobs(),
  },
  {
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: () => loadJobs(),
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
