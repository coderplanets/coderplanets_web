/*
 * Cashier store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { merge, values } from 'ramda'

import { PAYMENT_USAGE, PAYMENT_METHOD } from '@/constant'
import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:Cashier')

const Cashier = T.model('Cashier', {
  show: T.optional(T.boolean, false),
  transferAccount: T.optional(T.string, ''),
  sidebarView: T.optional(
    T.enumeration('sideView', ['pay', 'question']),
    'pay'
  ),
  contentView: T.optional(
    T.enumeration('contentView', ['pay', 'question']),
    'pay'
  ),
  subContentView: T.optional(
    T.enumeration('subContentView', ['pay', 'confirm']),
    'pay'
  ),
  paymentMethod: T.optional(
    T.enumeration('paymentMethod', values(PAYMENT_METHOD)),
    PAYMENT_METHOD.ALIPAY
  ),
  paymentUsage: T.optional(
    T.enumeration('paymentUsage', values(PAYMENT_USAGE)),
    PAYMENT_USAGE.SENIOR
  ),
  amount: T.optional(
    T.enumeration('amount', ['10.24', '51.2', '102.4', '512', '1024']),
    '10.24'
  ),
})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get accountInfo() {
      return self.root.accountInfo
    },
    get isLogin() {
      return self.root.account.isLogin
    },
  }))
  .actions(self => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    toastDone(options) {
      self.root.toast('success', merge({ position: 'topCenter' }, options))
    },
    toastError(options) {
      self.root.toast('error', merge({ position: 'topCenter' }, options))
    },
    callCashier({ paymentUsage, amount }) {
      self.show = true
      self.paymentUsage = paymentUsage
      self.amount = String(amount)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default Cashier
