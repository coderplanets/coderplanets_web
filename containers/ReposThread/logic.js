import R from 'ramda'
import { useEffect } from 'react'

import { TYPE, EVENT, THREAD } from '@constant'
import {
  asyncSuit,
  buildLog,
  dispatchEvent,
  scrollToTabber,
  notEmpty,
} from '@utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:ReposThread')

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71({
  resv_event: [EVENT.REFRESH_REPOS, EVENT.PREVIEW_CLOSED, EVENT.TABBER_CHANGE],
})

let sub$ = null
let store = null

export const inAnchor = () => store.setHeaderFix(false)
export const outAnchor = () => store.setHeaderFix(true)

export const loadRepos = (page = 1) => {
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

  args.filter = R.pickBy(notEmpty, args.filter)

  log('load repos --> ', args)
  store.markState({ curView: TYPE.LOADING })
  sr71$.query(S.pagedRepos, args)
  store.markRoute({ page, ...store.filtersData })
}

export const onPageChange = page => {
  scrollToTabber()
  loadRepos(page)
}

export const onPreview = data => {
  setTimeout(() => store.setViewedFlag(data.id), 1500)
  dispatchEvent(EVENT.PREVIEW_OPEN, {
    type: TYPE.PREVIEW_REPO_VIEW,
    thread: THREAD.REPO,
    data,
  })

  store.markRoute({
    preview: THREAD.REPO,
    id: data.id,
    community: store.curCommunity.raw,
    ...store.tagQuery,
    ...store.filtersData,
  })
}

export const onContentCreate = () => {
  if (!store.isLogin) return store.authWarning()

  dispatchEvent(EVENT.PREVIEW_OPEN, { type: TYPE.PREVIEW_REPO_CREATE })
}

export const onTagSelect = tag => {
  store.selectTag(tag)
  loadRepos()
  store.markRoute({ tag: tag.title })
}

export const onFilterSelect = option => {
  store.selectFilter(option)
  store.markRoute({ ...store.filtersData })
  loadRepos()
}
export const onC11NChange = option => {
  dispatchEvent(EVENT.SET_C11N, { data: option })
  store.updateC11N(option)

  if (R.has('displayDensity', option)) {
    loadRepos(store.pagedRepos.pageNumber)
  }
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('pagedRepos'),
    action: ({ pagedRepos }) => {
      log('load pagedRepos -> ', pagedRepos)
      let curView = TYPE.RESULT
      if (pagedRepos.entries.length === 0) {
        curView = TYPE.RESULT_EMPTY
      }
      store.markState({ curView, pagedRepos })
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
      if (activeThread === THREAD.REPO) {
        store.markState({ activeTag: null })
        return loadRepos()
      }
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_REPOS),
    action: () => loadRepos(),
  },
  {
    match: asyncRes(EVENT.PREVIEW_CLOSED),
    action: () => {
      store.setViewing({ repo: {} })
      store.markRoute({ ...store.filtersData, ...store.tagQuery })
    },
  },
]
const ErrSolver = []

// ###############################
// init & uninit
// ###############################
export const useInit = _store =>
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
