import { useEffect } from 'react'
import Router from 'next/router'
import { values } from 'ramda'

import type { TEditValue, TCommunity, TTag } from '@/spec'
import { HCN, ERR } from '@/constant'
import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'
import { getParameterByName } from '@/utils/route'
import { titleCase, errRescue } from '@/utils/helper'
import { updateEditing } from '@/utils/mobx'
import { matchArticles } from '@/utils/macros'

import type { TStore } from './store'
import S from './schema'

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:ArticleEditor')

export const changeCommunity = (community: TCommunity): void => {
  store.mark({ community })
}

export const onTagSelect = (tags: TTag[], checked: boolean): void => {
  store.mark({ articleTags: tags })
}

export const loadCommunity = (): void => {
  const { mode } = store

  if (mode !== 'publish') return
  const raw = getParameterByName('community')?.toLowerCase()

  sr71$.query(S.community, { raw })
}

export const loadArticle = (): void => {
  const { thread, viewingArticle } = store
  const { id } = viewingArticle

  sr71$.query(S[thread], { id })
}

export const editOnChange = (e: TEditValue, key: string): void => {
  updateEditing(store, key, e)
}

export const onCancel = (): void => {
  const { mode } = store

  mode === 'publish' ? gotoBackToCommunity() : gotoArticleDetail()
}

const gotoArticleDetail = () => {
  const { viewingArticle, thread } = store
  Router.push(`/${thread}/${viewingArticle.id}`)
}

const gotoBackToCommunity = () => {
  const { communityData } = store
  const { raw } = communityData

  const path = raw === HCN ? '/' : `/${raw}`
  Router.push(path)
}

export const onPublish = (): void => {
  const { mode } = store
  store.mark({ publishing: true })

  mode === 'publish' ? doCreate() : doUpdate()
}

const doCreate = () => {
  const { thread, editData, communityId } = store
  const variables = { communityId, ...editData }
  log('onPublish --> ', variables)

  const schema = S[`create${titleCase(thread)}`]
  sr71$.mutate(schema, variables)
}

const doUpdate = () => {
  const { thread, editData, viewingArticle } = store
  const { id } = viewingArticle
  const variables = { id, ...editData }
  log('onUpdate --> ', variables)

  const schema = S[`update${titleCase(thread)}`]
  sr71$.mutate(schema, variables)
}

export const setWordsCountState = (wordsCountReady: boolean): void => {
  store?.mark({ wordsCountReady })
}

// ###############################
// init & uninit handlers
// ###############################

const handleArticleRes = (article) => {
  store.setViewing(article)

  store.loadEditData(article)
}

const handleMutateRes = (data): void => {
  store.mark({ publishing: false, publishDone: true })
  store.setViewing(values(data)[0])

  gotoArticleDetail()
}

const DataSolver = [
  ...matchArticles(handleArticleRes),
  {
    match: asyncRes('createPost'),
    action: handleMutateRes,
  },
  {
    match: asyncRes('createJob'),
    action: handleMutateRes,
  },
  {
    match: asyncRes('createRadar'),
    action: handleMutateRes,
  },
  {
    match: asyncRes('updatePost'),
    action: handleMutateRes,
  },
  {
    match: asyncRes('updateJob'),
    action: handleMutateRes,
  },
  {
    match: asyncRes('updateRadar'),
    action: handleMutateRes,
  },
  {
    match: asyncRes('community'),
    action: ({ community }) => store.mark({ community }),
  },
]

const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: ({ details }) => {
      store.mark({ publishing: false })
      errRescue({ type: ERR.GRAPHQL, details, path: 'publishPost' })
      //
    },
  },
]

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    log('useInit: ', store)

    loadCommunity()
    if (store.mode === 'update') loadArticle()

    // return () => store.reset()
    return () => {
      sr71$.stop()
      sub$.unsubscribe()
      sub$ = null
      store.reset()
    }
  }, [_store])
}
