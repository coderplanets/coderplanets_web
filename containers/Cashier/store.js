/*
 * Cashier store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, buildLog, PAYMENT_USAGE, PAYMENT_METHOD } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('S:Cashier')

const Cashier = t
  .model('Cashier', {
    show: t.optional(t.boolean, false),
    transferAccount: t.optional(t.string, ''),
    sidebarView: t.optional(
      t.enumeration('sideView', ['pay', 'question']),
      'pay'
    ),
    contentView: t.optional(
      t.enumeration('contentView', ['pay', 'question']),
      'pay'
    ),
    subContentView: t.optional(
      t.enumeration('subContentView', ['pay', 'confirm']),
      'pay'
    ),
    paymentMethod: t.optional(
      t.enumeration('paymentMethod', R.values(PAYMENT_METHOD)),
      PAYMENT_METHOD.ALIPAY
    ),
    paymentUsage: t.optional(
      t.enumeration('paymentUsage', R.values(PAYMENT_USAGE)),
      PAYMENT_USAGE.SENIOR
    ),
    amount: t.optional(
      t.enumeration('amount', ['10.24', '51.2', '102.4', '512', '1024']),
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
      self.root.toast('success', R.merge({ position: 'topCenter' }, options))
    },
    toastError(options) {
      self.root.toast('error', R.merge({ position: 'topCenter' }, options))
    },
    callCashier({ paymentUsage, amount }) {
      self.show = true
      self.paymentUsage = paymentUsage
      self.amount = String(amount)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default Cashier
