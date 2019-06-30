// import R from 'ramda'
import { useEffect } from 'react'

import { EVENT, PAYMENT_USAGE } from '@constant'
import { asyncSuit, buildLog, dispatchEvent } from '@utils'
// import S from './schema'

/* eslint-disable-next-line */
const log = buildLog('L:Footer2')

const { SR71, $solver } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

export const toggleSponsorHelper = () =>
  store.markState({ showSponsor: !store.showSponsor })

export const toggleSeniorHelper = () => store.upgradeHepler()
export const toggleBusBanner = () =>
  store.markState({ showBusBanner: !store.showBusBanner })

export const onLogin = () => store.authWarning({ hideToast: true })
export const onPay = num => {
  if (!store.isLogin) return store.authWarning()
  store.cashierHelper({ paymentUsage: PAYMENT_USAGE.DONATE, amount: num })
}

export const queryDoraemon = data =>
  dispatchEvent(EVENT.QUERY_DORAMON, { data })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = []

// ###############################
// init & uninit
// ###############################
export const useInit = _store => {
  useEffect(() => {
    store = _store
    // log('effect init')
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      sub$.unsubscribe()
    }
  }, [_store])
}
