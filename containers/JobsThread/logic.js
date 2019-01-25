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
  errRescue,
  // GA,
} from 'utils'

import SR71 from 'utils/async/sr71'
import S from './schema'

const sr71$ = new SR71({
  resv_event: [EVENT.REFRESH_JOBS, EVENT.PREVIEW_CLOSED, EVENT.TABBER_CHANGE],
})

let store = null
let sub$ = null

/* eslint-disable-next-line */
const debug = makeDebugger('L:JobsThread')

export const inAnchor = () => store.setHeaderFix(false)
export const outAnchor = () => store.setHeaderFix(true)

export const loadJobs = (page = 1) => {
  const { curCommunity } = store
  const userHasLogin = store.isLogin

  store.markState({ curView: TYPE.LOADING })

  const args = {
    filter: {
      page,
      size: store.pageDensity,
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
  store.markRoute({ page, ...store.filtersData })
}

export const onPreview = data => {
  setTimeout(() => store.setViewedFlag(data.id), 1500)
  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_JOB_VIEW,
    thread: THREAD.JOB,
    data,
  })

  store.markRoute({
    preview: THREAD.JOB,
    id: data.id,
    community: store.curCommunity.raw,
    ...store.tagQuery,
    ...store.filtersData,
  })
}

export const onContentCreate = () => {
  if (!store.isLogin) return store.authWarning()

  if (store.curCommunity.raw === 'home') {
    return store.markState({ showPublishNote: true })
  }

  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_JOB_CREATE })
}

export const onNoteClose = () => store.markState({ showPublishNote: false })

export const onTagSelect = tag => {
  store.selectTag(tag)
  loadJobs()
  store.markRoute({ tag: tag.title })
}

export const onFilterSelect = option => {
  store.selectFilter(option)
  store.markRoute({ ...store.filtersData })
  loadJobs()
}
export const onC11NChange = option => {
  dispatchEvent(EVENT.SET_C11N, { data: option })
  store.updateC11N(option)

  if (R.has('displayDensity', option)) {
    loadJobs(store.pagedJobs.pageNumber)
  }
}

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
    action: () => {
      store.setViewing({ job: {} })
      store.markRoute({ ...store.filtersData, ...store.tagQuery })
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {},
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) =>
      errRescue({ type: ERR.TIMEOUT, details, path: 'JobsThread' }),
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => errRescue({ type: ERR.NETWORK, path: 'JobsThread' }),
  },
]

export const init = _store => {
  store = _store

  if (sub$) return false // sub$.unsubscribe()
  sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
}

export const uninit = () => {
  if (store.curView === TYPE.LOADING || !sub$) return false
  debug('===== do uninit')
  sr71$.stop()
  sub$.unsubscribe()
  sub$ = null
}
