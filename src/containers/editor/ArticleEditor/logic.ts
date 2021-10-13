import { useEffect } from 'react'
import Router from 'next/router'
// import { } from 'ramda'

import type { TEditValue, TEditMode } from '@/spec'
import { HCN } from '@/constant'
import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'
import { getParameterByName } from '@/utils/route'
import { updateEditing } from '@/utils/mobx'

import type { TStore } from './store'
import { STEP } from './constant'
import S from './schema'

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:ArticleEditor')

export const previousStep = (): void => {
  store.mark({ step: STEP.EDIT })
}

export const nextStep = (): void => {
  store.mark({ step: STEP.SETTING })
}

export const loadCommunity = (): void => {
  const { mode, viewingArticle } = store

  const raw =
    mode === 'publish'
      ? getParameterByName('community')?.toLowerCase()
      : viewingArticle.originalCommunity.raw

  sr71$.query(S.community, { raw })
}

export const editOnChange = (e: TEditValue, key: string): void => {
  updateEditing(store, key, e)
}

export const gotoBackToCommunity = (): void => {
  const { communityData } = store
  const { raw } = communityData

  const path = raw === HCN ? '/' : `/${raw}`
  Router.push(path)
}

export const onPublish = (): void => {
  const { editingData, communityId } = store
  console.log('onPublish --> ', editingData)
  const variables = { communityId, ...editingData }

  store.mark({ publishing: true })
  sr71$.mutate(S.createPost, variables)
}

// ###############################
// init & uninit handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('createPost'),
    action: ({ createPost }) => {
      console.log('after create: ', createPost)
      store.mark({ publishing: false })
      gotoBackToCommunity()
    },
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
    if (mode === 'update') store.loadEditData()

    // return () => store.reset()
    return () => {
      sr71$.stop()
      sub$.unsubscribe()
      sub$ = null
    }
  }, [_store, mode])
}
