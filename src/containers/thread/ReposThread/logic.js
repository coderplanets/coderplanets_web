import { useEffect } from 'react'
import { pickBy } from 'ramda'

import { TYPE, EVENT, THREAD } from '@/constant'
import asyncSuit from '@/utils/async'
import { send } from '@/utils/helper'
import { buildLog } from '@/utils/logger'
import { scrollToTabber } from '@/utils/dom'
import { notEmpty } from '@/utils/validator'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:ReposThread')

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71({
  receive: [
    EVENT.REFRESH_REPOS,
    EVENT.DRAWER.CLOSE,
    EVENT.ARTICLE_THREAD_CHANGE,
    EVENT.C11N_DENSITY_CHANGE,
  ],
})

let sub$ = null
let store = null

export const inAnchor = () => {
  if (store) store.showTopModeline(false)
}

export const outAnchor = () => {
  if (store) store.showTopModeline(true)
}

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

  args.filter = pickBy(notEmpty, args.filter)

  log('load repos --> ', args)
  store.mark({ curView: TYPE.LOADING })
  sr71$.query(S.pagedRepos, args)
  store.markRoute({ page, ...store.filtersData })
}

export const onPageChange = (page) => {
  scrollToTabber()
  loadRepos(page)
}

export const onPreview = (data) => {
  send(EVENT.DRAWER.OPEN, {
    type: TYPE.DRAWER.REPO_VIEW,
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

  send(EVENT.DRAWER.OPEN, { type: TYPE.DRAWER.REPO_CREATE })
}

export const onTagSelect = (tag) => {
  store.selectTag(tag)
  loadRepos()
  store.markRoute({ tag: tag.title })
}

export const onFilterSelect = (option) => {
  store.selectFilter(option)
  store.markRoute({ ...store.filtersData })
  loadRepos()
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
      store.mark({ curView, pagedRepos })
    },
  },
  {
    match: asyncRes(EVENT.C11N_DENSITY_CHANGE),
    action: (res) => {
      const { type } = res[EVENT.C11N_DENSITY_CHANGE]
      if (type === THREAD.REPO) loadRepos(store.pagedRepos.pageNumber)
    },
  },
  {
    match: asyncRes('pagedArticleTags'),
    action: ({ pagedArticleTags: tags }) => store.mark({ tags }),
  },
  {
    match: asyncRes(EVENT.ARTICLE_THREAD_CHANGE),
    action: (res) => {
      const { data } = res[EVENT.ARTICLE_THREAD_CHANGE]
      const { activeThread } = data
      if (activeThread === THREAD.REPO) {
        store.mark({ activeTag: null })
        return loadRepos()
      }
    },
  },
  {
    match: asyncRes(EVENT.REFRESH_REPOS),
    action: () => loadRepos(),
  },
  {
    match: asyncRes(EVENT.DRAWER.CLOSE),
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
