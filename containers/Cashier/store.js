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
    show: t.optional(t.boolean, true),
    sidebarView: t.optional(
      t.enumeration('sideView', ['pay', 'question']),
      'pay'
    ),
    contentView: t.optional(
      t.enumeration('contentView', ['pay', 'question']),
      'pay'
    ),
    payMethod: t.optional(
      t.enumeration('payMethod', ['wechat', 'alipay']),
      'alipay'
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
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default Cashier
