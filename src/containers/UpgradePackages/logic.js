import { useEffect } from 'react'

import { SENIOR_AMOUNT_THRESHOLD } from '@/config'
import { PAYMENT_USAGE } from '@/constant'
import { asyncSuit, buildLog } from '@/utils'
/* import S from './schema' */

/* eslint-disable-next-line */
const log = buildLog('L:UpgradePackages')

const { SR71, $solver } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store = null

export const onUpgrade = () => {
  if (!store.isLogin) return store.authWarning()

  store.cashierHelper({
    paymentUsage: PAYMENT_USAGE.SENIOR,
    amount: SENIOR_AMOUNT_THRESHOLD,
  })
}

export const onClose = () => store.mark({ show: !store.show })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = []

export const useInit = _store => {
  useEffect(() => {
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      sub$.unsubscribe()
    }
  }, [_store])
}
