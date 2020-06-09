/*
 * UpgradePackages store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:UpgradePackages')

const UpgradePackages = T.model('UpgradePackages', {
  show: T.optional(T.boolean, false),
})
  .views((self) => ({
    get isLogin() {
      return self.root.account.isLogin
    },
    get root() {
      return getParent(self)
    },
  }))
  .actions((self) => ({
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

export default UpgradePackages
