import { useEffect } from 'react'

import { EVENT, PAYMENT_USAGE } from '@/constant'
import { asyncSuit, buildLog, send } from '@/utils'
// import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:Footer2')

const { SR71, $solver } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

export const toggleSponsorHelper = () =>
  store.mark({ showSponsor: !store.showSponsor })

export const toggleSeniorHelper = () => store.upgradeHelper()
// TODO:  商务合作
export const toggleBusBanner = () =>
  store.mark({ showBusBanner: !store.showBusBanner })

export const onLogin = () => store.authWarning({ hideToast: true })
export const onPay = (num) => {
  if (!store.isLogin) return store.authWarning()
  store.cashierHelper({ paymentUsage: PAYMENT_USAGE.DONATE, amount: num })
}

export const queryDoraemon = (data) => send(EVENT.QUERY_DORAMON, { data })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = []

// ###############################
// init & uninit
// ###############################
export const useInit = (_store) => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      sub$.unsubscribe()
    }
  }, [_store])
}
