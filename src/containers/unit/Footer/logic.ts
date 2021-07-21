import { useEffect } from 'react'

import type { TMetric } from '@/spec'
import { EVENT, PAYMENT_USAGE } from '@/constant'
import { asyncSuit, buildLog, send } from '@/utils'
// import S from './schema'

import type { TStore } from './store'

/* eslint-disable-next-line */
const log = buildLog('L:Footer2')

const { SR71, $solver } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store: TStore | undefined

export const toggleSponsorHelper = (): void =>
  store.mark({ showSponsor: !store.showSponsor })

export const onLogin = (): void => store.authWarning({ hideToast: true })
export const onPay = (num: number): void => {
  if (!store.isLogin) return store.authWarning()
  store.cashierHelper({ paymentUsage: PAYMENT_USAGE.DONATE, amount: num })
}

export const queryDoraemon = (data): void => send(EVENT.QUERY_DORAMON, { data })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = []

// ###############################
// init & uninit
// ###############################
export const useInit = (_store: TStore, metric: TMetric): void => {
  useEffect(() => {
    store = _store
    store.mark({ metric })
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      sub$.unsubscribe()
    }
  }, [_store, metric])
}
