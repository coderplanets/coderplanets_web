/*
 * UpgradePackges store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog } from '@utils'

/* eslint-disable-next-line */
const log = buildLog('S:UpgradePackges')

const UpgradePackges = t
  .model('UpgradePackges', {
    show: t.optional(t.boolean, false),
  })
  .views(self => ({
    get isLogin() {
      return self.root.account.isLogin
    },
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    cashierHelper(opt) {
      self.root.cashierHelper(opt)
    },
    upgradeHepler() {
      self.show = true
    },
    mark(sobj) {
      markStates(sobj, self)
    },
    close() {
      self.show = false
    },
  }))

export default UpgradePackges
