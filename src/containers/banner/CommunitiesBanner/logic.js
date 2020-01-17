import { useEffect } from 'react'

import { EVENT } from '@constant'
import { asyncSuit, buildLog, send, updateEditing } from '@utils'

import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:CommunitiesBanner')

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

export const loadCategories = () =>
  sr71$.query(S.pagedCategories, { filter: {} })

export const searchOnChange = e => {
  updateEditing(store, 'searchValue', e)
  send(EVENT.REFRESH_COMMUNITIES, {
    type: 'search',
    data: e.target.value,
  })
}

export const tabOnChange = activeTab => {
  store.markRoute({ subPath: activeTab })
  store.mark({ activeTab })
  send(EVENT.REFRESH_COMMUNITIES, { data: activeTab })
}
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('pagedCategories'),
    action: ({ pagedCategories }) => store.mark({ pagedCategories }),
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
  useEffect(() => {
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    loadIfNeed()

    return () => {
      // log('effect uninit')
      if (!sub$) return false
      log('===== do uninit')
      sub$.unsubscribe()
    }
  }, [_store])
}
