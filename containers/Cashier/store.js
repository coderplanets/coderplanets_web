/*
 * Cashier store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import {
  markStates,
  makeDebugger,
  PAYMENT_USAGE,
  PAYMENT_METHOD,
} from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:Cashier')
/* eslint-enable no-unused-vars */

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
      PAYMENT_USAGE.SENINOR
    ),
    faceValue: t.optional(
      t.enumeration('faceValue', ['10.24', '51.2', '102.4', '512', '1024']),
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
  }))
  .actions(self => ({
    callCashier({ paymentUsage, faceValue }) {
      self.show = true
      self.paymentUsage = paymentUsage
      self.faceValue = String(faceValue)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default Cashier
