// import R from 'ramda'
import { useEffect } from 'react'

import { SENIOR_AMOUNT_THRESHOLD } from '@config'
import { buildLog, $solver, PAYMENT_USAGE } from '@utils'

import SR71 from '@utils/async/sr71'
/* import S from './schema' */

const sr71$ = new SR71()
let sub$ = null

/* eslint-disable-next-line */
const log = buildLog('L:UpgradePackges')

let store = null

export const onUpgrade = () => {
  if (!store.isLogin) return store.authWarning()

  store.cashierHelper({
    paymentUsage: PAYMENT_USAGE.SENIOR,
    amount: SENIOR_AMOUNT_THRESHOLD,
  })
}

export const onClose = () => store.markState({ show: !store.show })

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = []

export const useInit = _store => {
  useEffect(
    () => {
      store = _store
      sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

      return () => {
        sub$.unsubscribe()
      }
    },
    [_store]
  )
}
