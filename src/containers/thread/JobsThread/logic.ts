import { useEffect } from 'react'
import { merge, pickBy } from 'ramda'

import { HCN, TYPE, EVENT, ERR, THREAD, ROUTE } from '@/constant'
import {
  asyncSuit,
  buildLog,
  send,
  scrollToTabber,
  notEmpty,
  errRescue,
} from '@/utils'

import type { TTag } from '@/spec'
import type { TStore } from './store'
import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:JobsThread')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71({
  // @ts-ignore
  receive: [
    EVENT.REFRESH_JOBS,
    EVENT.DRAWER.CLOSE,
    EVENT.THREAD_CHANGE,
    EVENT.C11N_DENSITY_CHANGE,
  ],
})

let store = null
let sub$ = null

export const inAnchor = (): void => {
  if (store) store.showTopModeline(false)
}

export const outAnchor = (): void => {
  if (store) store.showTopModeline(true)
}

export const loadJobs = (page = 1): void => {
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

export const onPageChange = (page: number): void => {
  scrollToTabber()
  loadJobs(page)
}

/**
 * preview the current article
 *
 * @param {*} data {id: string, title: string}
 */
export const onPreview = (data): void => {
  setTimeout(() => store.setViewedFlag(data.id), 1500)
  const type = TYPE.DRAWER.JOB_VIEW
  const thread = THREAD.JOB

  send(EVENT.DRAWER.OPEN, { type, thread, data })
  store.markRoute(data.id)
}

export const onContentCreate = (): void => {
  if (!store.isLogin) return store.authWarning()

  if (store.curCommunity.raw === HCN) {
    return store.mark({ showPublishNote: true })
  }

  send(EVENT.DRAWER.OPEN, { type: TYPE.DRAWER.JOB_CREATE })
}

export const onNoteClose = (): void => store.mark({ showPublishNote: false })

export const onTagSelect = (tag: TTag): void => {
  store.selectTag(tag)
  loadJobs()
  store.markRoute({ tag: tag.title })
}

export const onFilterSelect = (option): void => {
  store.selectFilter(option)
  store.markRoute({ ...store.filtersData })
  loadJobs()
}

export const onUserSelect = (): void => {
  //
}
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
    match: asyncRes(EVENT.THREAD_CHANGE),
    action: (res) => {
      const { data } = res[EVENT.THREAD_CHANGE]

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
    match: asyncRes(EVENT.DRAWER.CLOSE),
    action: () => {
      store.setViewing({ job: {} })
      store.markRoute({ ...store.filtersData, ...store.tagQuery })
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => {
      //
    },
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
export const useInit = (_store: TStore) =>
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      if (store.curView === TYPE.LOADING || !sub$) return
      log('===== do uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
