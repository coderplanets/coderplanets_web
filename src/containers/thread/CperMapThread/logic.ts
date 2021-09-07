import { useEffect } from 'react'

import { ERR } from '@/constant'
import asyncSuit from '@/utils/async'
import { errRescue } from '@/utils/helper'
import { buildLog } from '@/utils/logger'

import S from './schema'
import type { TStore } from './store'

/* eslint-disable-next-line */
const log = buildLog('L:CperMapThread')

const { SR71, $solver, asyncRes, asyncErr } = asyncSuit
const sr71$ = new SR71()

let store: TStore | undefined
let sub$ = null

export const loadGeoData = (): void => {
  markLoading(true)
  const { id } = store.curCommunity
  sr71$.query(S.communityGeoInfo, { id })
}

const markLoading = (maybe = true) => store.mark({ geoDataLoading: maybe })
// ###############################
// Data & Error handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('communityGeoInfo'),
    action: ({ communityGeoInfo: geoInfos }) => {
      markLoading(false)
      store.mark({ geoInfos })
    },
  },
]
const ErrSolver = [
  {
    match: asyncErr(ERR.GRAPHQL),
    action: () => markLoading(false),
  },
  {
    match: asyncErr(ERR.TIMEOUT),
    action: ({ details }) => {
      markLoading(false)
      errRescue({ type: ERR.TIMEOUT, details, path: 'CperMapThread' })
    },
  },
  {
    match: asyncErr(ERR.NETWORK),
    action: () => {
      markLoading(false)
      errRescue({ type: ERR.NETWORK, path: 'CperMapThread' })
    },
  },
]

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore) => {
  useEffect(() => {
    store = _store

    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    loadGeoData()

    return () => {
      if (store.geoDataLoading) return
      log('===== do uninit')
      sr71$.stop()
      sub$.unsubscribe()
    }
  }, [_store])
}
