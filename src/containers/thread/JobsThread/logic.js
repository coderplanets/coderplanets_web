import { useEffect } from 'react'
import { merge, pickBy } from 'ramda'

import { TYPE, EVENT, ERR, THREAD, ROUTE } from '@/constant'
import {
  asyncSuit,
  buildLog,
  send,
  scrollToTabber,
  notEmpty,
  errRescue,
} from '@/utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:JobsThread')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  receive: [
    EVENT.REFRESH_JOBS,
    EVENT.PREVIEW_CLOSED,
    EVENT.TABBER_CHANGE,
    EVENT.C11N_DENSITY_CHANGE,
  ],
})

let store = null
let sub$ = null

export const inAnchor = () => {
  if (store) store.setHeaderFix(false)
}

export const outAnchor = () => {
  if (store) store.setHeaderFix(true)
}

export const loadJobs = (page = 1) => {
  const { curCommunity } = store
  const userHasLogin = store.isLogin

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
    args.filter = merge(args.filter, { community: curCommunity.raw })
  }

  args.filter = pickBy(notEmpty, args.filter)

  log('######## loadJobs args: ', args)
  store.mark({ curView: TYPE.LOADING })
  sr71$.query(S.pagedJobs, args)
  store.markRoute({ page, ...store.filtersData })
}

export const onPageChange = (page) => {
  scrollToTabber()
  loadJobs(page)
}

/**
 * preview the current article
 *
 * @param {*} data {id: string, title: string}
 */
export const onPreview = (data) => {
  setTimeout(() => store.setViewedFlag(data.id), 1500)
  const type = TYPE.PREVIEW_JOB_VIEW
  const thread = THREAD.JOB

  send(EVENT.PREVIEW_OPEN, { type, thread, data })
  store.markRoute(data.id)
}

export const onContentCreate = () => {
  if (!store.isLogin) return store.authWarning()

  if (store.curCommunity.raw === 'home') {
    return store.mark({ showPublishNote: true })
  }

  send(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_JOB_CREATE })
}

export const onNoteClose = () => store.mark({ showPublishNote: false })

export const onTagSelect = (tag) => {
  store.selectTag(tag)
  loadJobs()
  store.markRoute({ tag: tag.title })
}

export const onFilterSelect = (option) => {
  store.selectFilter(option)
  store.markRoute({ ...store.filtersData })
  loadJobs()
}

export const onUserSelect = (user) =>
  send(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_USER_VIEW,
    data: user,
  })

// ###############################
// Data & Error handlers
// ###############################
const DataSolver = [
  {
    match: asyncRes('pagedJobs'),
    action: ({ pagedJobs }) => {
      log('pagedJobs --> ', pagedJobs)
      let curView = TYPE.RESULT
      if (pagedJobs.entries.length === 0) {
        curView = TYPE.RESULT_EMPTY
      }
      store.mark({ curView, pagedJobs })
    },
  },
  {
    match: asyncRes('partialTags'),
    action: ({ partialTags: tags }) => store.mark({ tags }),
  },
  {
    match: asyncRes(EVENT.TABBER_CHANGE),
    action: (res) => {
      const { data } = res[EVENT.TABBER_CHANGE]

      const { activeThread } = data
      if (activeThread === THREAD.JOB) {
        store.mark({ activeTag: null })
        return loadJobs()
      }
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_JOBS),
    action: () => loadJobs(),
  },
  {
    match: asyncRes(EVENT.C11N_DENSITY_CHANGE),
    action: (res) => {
      const { type } = res[EVENT.C11N_DENSITY_CHANGE]
      if (type === THREAD.JOB) loadJobs(store.pagedJobs.pageNumber)
    },
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
