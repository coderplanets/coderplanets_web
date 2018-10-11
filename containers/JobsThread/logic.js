import R from 'ramda'
import {
  asyncRes,
  asyncErr,
  makeDebugger,
  dispatchEvent,
  EVENT,
  ERR,
  TYPE,
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
    EVENT.REFRESH_POSTS,
    EVENT.PREVIEW_CLOSED,
    EVENT.COMMUNITY_CHANGE,
  ],
})
/* eslint-disable no-unused-vars */
const debug = makeDebugger('L:JobsThread')
/* eslint-enable no-unused-vars */

let store = null
let sub$ = null

const validFilter = R.pickBy(R.compose(R.not, R.isEmpty))

export function inAnchor() {
  store.setHeaderFix(false)
}

export function outAnchor() {
  store.setHeaderFix(true)
}

export function loadJobs(page = 1) {
  /* const { mainPath, subPath } = store.curRoute */
  scrollIntoEle(TYPE.APP_HEADER_ID)
  // NOTE: do not use viewing.community, it's too slow
  const { mainPath } = store.curRoute
  const community = mainPath

  store.markState({ curView: TYPE.LOADING })

  const args = {
    /* first: 4, */
    filter: {
      page,
      size: PAGE_SIZE.M,
      ...store.filtersData,
      tag: store.activeTagData.raw,
      community,
    },
  }

  args.filter = validFilter(args.filter)

  debug('loadJobs args: ', args)
  store.markRoute({ page })
  sr71$.query(S.pagedJobs, args)
}

export function onFilterSelect(option) {
  store.selectFilter(option)
  loadJobs()
}

export function onTagSelect(obj) {
  store.selectTag(obj)
  loadJobs()
}

export function onTitleSelect(job) {
  store.setViewing({ job })
  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_JOB_VIEW,
    data: job,
  })
}

export function createContent() {
  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_JOB_CREATE })
}

const DataSolver = [
  {
    match: asyncRes('pagedJobs'),
    action: ({ pagedJobs }) => {
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

const loadIfNeed = () => {
  if (R.isEmpty(store.pagedJobsData.entries)) {
    debug('loadIfNeed')
    loadJobs()
  }
}

export function init(_store) {
  if (store) return false
  store = _store

  if (sub$) sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

  loadIfNeed()
  /* loadJobs() */
}
