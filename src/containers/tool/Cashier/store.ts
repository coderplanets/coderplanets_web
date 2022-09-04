/*
 * Cashier store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { merge, values } from 'ramda'

import type { TRootStore, TAccount } from '@/spec'

import { PAYMENT_USAGE, PAYMENT_METHOD } from '@/constant'
import { markStates } from '@/utils/mobx'

import { AMOUNT, SIDEBAR_VIEW, SUBCONTENT_VIEW } from './constant'

const Cashier = T.model('Cashier', {
  show: T.optional(T.boolean, false),
  transferAccount: T.optional(T.string, ''),
  sidebarView: T.optional(
    T.enumeration('sideView', values(SIDEBAR_VIEW)),
    SIDEBAR_VIEW.PAY,
  ),
  contentView: T.optional(
    T.enumeration('contentView', values(SIDEBAR_VIEW)),
    SIDEBAR_VIEW.PAY,
  ),
  subContentView: T.optional(
    T.enumeration('subContentView', values(SUBCONTENT_VIEW)),
    SUBCONTENT_VIEW.PAY,
  ),
  paymentMethod: T.optional(
    T.enumeration('paymentMethod', values(PAYMENT_METHOD)),
    PAYMENT_METHOD.ALIPAY,
  ),
  paymentUsage: T.optional(
    T.enumeration('paymentUsage', values(PAYMENT_USAGE)),
    PAYMENT_USAGE.SENIOR,
  ),
  amount: T.optional(T.enumeration('amount', values(AMOUNT)), AMOUNT['10.24']),
})
  .views((self) => ({
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.accountInfo
    },
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
  }))
  .actions((self) => ({
    authWarning(options): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    toastDone(options): void {
      const root = getParent(self) as TRootStore
      root.toast('success', merge({ position: 'topCenter' }, options))
    },
    toastError(options): void {
      const root = getParent(self) as TRootStore
      root.toast('error', merge({ position: 'topCenter' }, options))
    },
    callCashier({ paymentUsage, amount }): void {
      self.show = true
      self.paymentUsage = paymentUsage
      // @ts-ignore
      self.amount = String(amount)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof Cashier>
export default Cashier
