import { useEffect } from 'react'
// import { } from 'ramda'

import { buildLog } from '@/utils/logger'
import asyncSuit from '@/utils/async'
import { getParameterByName } from '@/utils/route'

import type { TStore } from './store'
import { STEP } from './constant'
import S from './schema'

const { SR71, $solver, asyncRes } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store: TStore | undefined

/* eslint-disable-next-line */
const log = buildLog('L:ArticleEditor')

export const previousStep = () => {
  store.mark({ step: STEP.EDIT })
}

export const nextStep = () => {
  store.mark({ step: STEP.SETTING })
}

export const toggleSubTitle = (showSubTitle) => {
  store.mark({ showSubTitle })
}

export const loadCommunity = (communityRaw: string): void => {
  sr71$.query(S.community, { raw: communityRaw.toLowerCase() })
}

// ###############################
// init & uninit handlers
// ###############################

const DataSolver = [
  {
    match: asyncRes('community'),
    action: ({ community }) => {
      console.log('community got: ', community)
      store.mark({ community })
    },
  },
]
const ErrSolver = []

export const useInit = (_store) => {
  useEffect(() => {
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))
    log('useInit: ', store)

    const communityRaw = getParameterByName('community')
    if (communityRaw) loadCommunity(communityRaw)

    // return () => store.reset()
    return () => {
      sr71$.stop()
      sub$.unsubscribe()
      sub$ = null
    }
    // return () => store.reset()
  }, [_store])
}
