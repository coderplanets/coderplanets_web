import { useEffect } from 'react'

import { SENIOR_AMOUNT_THRESHOLD } from '@/config'
import { PAYMENT_USAGE } from '@/constant'
import asyncSuit from '@/utils/async'
import { buildLog } from '@/utils/logger'

import type { TStore } from './store'
import type { TPackage } from './spec'
/* import S from './schema' */

/* eslint-disable-next-line */
const log = buildLog('L:MembershipContent')

const { SR71, $solver } = asyncSuit
const sr71$ = new SR71()

let sub$ = null
let store: TStore | undefined

export const payTypeOnChange = (payType: TPackage): void => {
  store.mark({ payType })
}

export const pkgTypeOnChange = (pkgType: TPackage): void => {
  store.mark({ pkgType })
}

export const onUpgrade = (): void => {
  if (!store.isLogin) return store.authWarning({})

  store.cashierHelper({
    paymentUsage: PAYMENT_USAGE.SENIOR,
    amount: SENIOR_AMOUNT_THRESHOLD,
  })
}

export const openInviteBox = (): void => {
  store.mark({ showInviteBox: true })
}

export const closeInviteBox = (): void => {
  store.mark({ showInviteBox: false })
}

// ###############################
// Data & Error handlers
// ###############################

const DataSolver = []
const ErrSolver = []

export const useInit = (_store: TStore): void => {
  useEffect(() => {
    store = _store
    sub$ = sr71$.data().subscribe($solver(DataSolver, ErrSolver))

    return () => {
      sub$.unsubscribe()
    }
  }, [_store])
}
