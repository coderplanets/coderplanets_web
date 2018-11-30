/*
* Cashier store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
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
    payMethod: t.optional(
      t.enumeration('payMethod', ['wechat', 'alipay']),
      'alipay'
    ),
    payForType: t.optional(
      t.enumeration('payForType', ['tips', 'upgrade', 'sponsor']),
      'tips'
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
    callCashier({ payForType, faceValue }) {
      self.show = true
      self.payForType = payForType
      self.faceValue = String(faceValue)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default Cashier
