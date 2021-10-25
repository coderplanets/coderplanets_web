import { useEffect } from 'react'
import Router from 'next/router'
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

export const loadRSSInfo = (): void => {
  const rss = getParameterByName('link')
  if (!rss) return
  log('loadRSS: ', rss)

  store.mark({ rss, step: 'STEP_3' })
  fetchRSSAuthor()
}

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

export const fetchRSSAuthor = (): void => {
  const { rss } = store

  store.mark({ loading: true })
  sr71$.query(S.blogRssAuthor, { rss })
}

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

export const onPublish = (): void => {
  const { mode } = store

  if (mode === 'publish') return createBlog()

  return updateRSSAuthor()
}

const createBlog = (): void => {
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

const updateRSSAuthor = (): void => {
  const { rss, rssAuthorData } = store

  const args = {
    rss,
    ...rssAuthorData,
  }

  store.mark({ publishing: true })
  log('updateBlog: ', args)
  sr71$.mutate(S.updateRssAuthor, args)
}

// ###############################
// init & uninit handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('blogRssInfo'),
    action: ({ blogRssInfo }) => {
      if (store.mode === 'update') {
        log('# got blogRssInfo for update: ', blogRssInfo)
        store.updateRssAuthor(blogRssInfo.author)
      }

      store.mark({ rssInfo: blogRssInfo, loading: false, step: 'STEP_3' })
    },
  },
  {
    match: asyncRes('updateRssAuthor'),
    action: ({ updateRssAuthor }) => {
      store.mark({ publishDone: true, publishing: false })
      log('updateRssAuthor done: ', updateRssAuthor)
      loadRSSInfo()
      setTimeout(() => {
        store.mark({ publishDone: false, publishing: false })
      }, 3000)
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
      Router.push(`/blog/${createBlog.id}`)
    },
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: ({ details }) => {
      store.mark({ loading: false, publishDone: true, publishing: false })
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

export const useInit = (_store: TStore, mode: string): void => {
  useEffect(() => {
    store = _store
    log('useInit: ', store)
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    store.mark({ mode })

    mode === 'publish' ? loadCommunity() : loadRSSInfo()

    return () => {
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store, mode])
}
