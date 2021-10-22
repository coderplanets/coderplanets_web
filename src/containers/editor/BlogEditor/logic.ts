import { useEffect } from 'react'
// import { } from 'ramda'

import type { TCommunity, TEditValue, TTag, TBlog } from '@/spec'
import { ERR } from '@/constant'

import { getParameterByName } from '@/utils/route'
import { buildLog } from '@/utils/logger'
import { errRescue } from '@/utils/helper'
import asyncSuit from '@/utils/async'
import { updateEditing } from '@/utils/mobx'

import S from './schema'
import type { TStore } from './store'

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
let store: TStore | undefined
let sub$

/* eslint-disable-next-line */
const log = buildLog('L:BlogEditor')

const sr71$ = new SR71()

export const loadCommunity = (): void => {
  const raw = getParameterByName('community')?.toLowerCase()

  sr71$.query(S.community, { raw })
}

export const selectBlog = (blog: TBlog): void => {
  store.mark({ activeBlog: blog })
  nextStep()
}

export const toStep = (step: string): void => {
  store.mark({ isReady: false, publishing: false })
  store.mark({ step })
}

export const nextStep = (): void => {
  const { step: curStep } = store
  let nextStep
  store.mark({ isReady: false, publishing: false })

  switch (curStep) {
    case 'STEP_1': {
      nextStep = 'STEP_2'
      break
    }
    case 'STEP_2': {
      store.mark({ isReady: true })
      nextStep = 'STEP_3'
      break
    }
    default: {
      nextStep = 'STEP_3'
      break
    }
  }

  store.mark({ step: nextStep })
}

export const inputOnChange = (e: TEditValue, key: string): void =>
  updateEditing(store, key, e)

export const fetchRSSInfo = (): void => {
  const { rss } = store

  store.mark({ loading: true })
  sr71$.query(S.blogRssInfo, { rss })
}

export const changeCommunity = (community: TCommunity): void => {
  store.mark({ community })
}

export const onTagSelect = (tags: TTag[], checked: boolean): void => {
  store.mark({ articleTags: tags })
}

export const createBlog = (): void => {
  const { rss, community, activeBlog, tagsData } = store

  const args = {
    rss,
    communityId: community.id,
    title: activeBlog.title,
    articleTags: tagsData.map((t) => t.id),
  }

  store.mark({ publishing: true })
  log('createBlog: ', args)
  sr71$.mutate(S.createBlog, args)
}

// ###############################
// init & uninit handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('blogRssInfo'),
    action: ({ blogRssInfo }) => {
      log('# got blogRssInfo: ', blogRssInfo)
      store.mark({ rssInfo: blogRssInfo, loading: false, step: 'STEP_2' })
      // store.markRes({ pagedPosts })
    },
  },
  {
    match: asyncRes('community'),
    action: ({ community }) => store.mark({ community }),
  },
  {
    match: asyncRes('createBlog'),
    action: ({ createBlog }) => {
      store.mark({ publishDone: true, publishing: false })
      log('createBlog done: ', createBlog)
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: ({ details }) => {
      store.mark({ loading: false })
      errRescue({ type: ERR.GRAPHQL, details, path: 'createBlog' })
    },
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      store.mark({ loading: false })
      errRescue({ type: ERR.TIMEOUT, details, path: 'createBlog' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: (e) => {
      errRescue({ type: ERR.NETWORK, path: 'createBlog' })
    },
  },
]

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    loadCommunity()

    return () => {
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
