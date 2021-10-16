import { useEffect } from 'react'
import Router from 'next/router'
// import { } from 'ramda'

import type { TEditValue, TEditMode, TCommunity } from '@/spec'
import { HCN } from '@/constant'
import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'
import { getParameterByName } from '@/utils/route'
import { titleCase } from '@/utils/helper'
import { updateEditing } from '@/utils/mobx'
import { matchArticles } from '@/utils/macros'

import type { TStore } from './store'
import S from './schema'

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:ArticleEditor')

export const changeCommunity = (community: TCommunity): void => {
  store.mark({ community })
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

const gotoArticleDetail = (): void => {
  const { viewingArticle, thread } = store
  Router.push(`/${thread}/${viewingArticle.id}`)
}

const gotoBackToCommunity = (): void => {
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
  const { thread, editingData, communityId } = store
  const variables = { communityId, ...editingData }
  log('onPublish --> ', variables)

  const schema = S[`create${titleCase(thread)}`]
  sr71$.mutate(schema, variables)
}

const doUpdate = () => {
  const { thread, editingData, viewingArticle } = store
  const { id } = viewingArticle
  const variables = { id, ...editingData }
  log('onUpdate --> ', variables)

  const schema = S[`update${titleCase(thread)}`]
  sr71$.mutate(schema, variables)
}

// ###############################
// init & uninit handlers
// ###############################

const handleArticleRes = (article) => {
  store.setViewing(article)
  store.loadEditData(article)
}

const handleMutateRes = (): void => {
  store.mark({ publishing: false, publishDone: true })

  gotoArticleDetail()
}

const DataSolver = [
  ...matchArticles(handleArticleRes),
  {
    match: asyncRes('createPost'),
    action: handleMutateRes,
  },
  {
    match: asyncRes('updatePost'),
    action: handleMutateRes,
  },
  {
    match: asyncRes('community'),
    action: ({ community }) => store.mark({ community }),
  },
]
const ErrSolver = []

export const useInit = (_store: TStore, mode: TEditMode): void => {
  useEffect(() => {
    store = _store
    store.mark({ mode })
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    log('useInit: ', store)

    loadCommunity()
    if (mode === 'update') loadArticle()

    // return () => store.reset()
    return () => {
      sr71$.stop()
      sub$.unsubscribe()
      sub$ = null
      store.reset()
    }
  }, [_store, mode])
}
