import { useEffect } from 'react'

import {
  buildLog,
  asyncRes,
  $solver,
  dispatchEvent,
  updateEditing,
  EVENT,
} from '@utils'

import SR71 from '@utils/async/sr71'
import S from './schema'

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:CommunitiesBanner')

let store = null

export const loadCategories = () =>
  sr71$.query(S.pagedCategories, { filter: {} })

export const searchOnChange = e => {
  updateEditing(store, 'searchValue', e)
  dispatchEvent(EVENT.REFRESH_COMMUNITIES, {
    type: 'search',
    data: e.target.value,
  })
}

export const tabOnChange = activeTab => {
  store.markRoute({ subPath: activeTab })
  store.markState({ activeTab })
  dispatchEvent(EVENT.REFRESH_COMMUNITIES, { data: activeTab })
}
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('pagedCategories'),
    action: ({ pagedCategories }) => store.markState({ pagedCategories }),
  },
]
const ErrSolver = []

const loadIfNeed = () => {
  if (!store.pagedCategoriesData) {
    loadCategories()
  }
}

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(
    () => {
      store = _store
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
      loadIfNeed()

      return () => {
        // log('effect uninit')
        if (!sub$) return false
        log('===== do uninit')
        sub$.unsubscribe()
      }
    },
    [_store]
  )
}
