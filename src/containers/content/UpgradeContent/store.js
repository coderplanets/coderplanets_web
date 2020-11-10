/*
 * UpgradeContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import {} from 'ramda'

import { markStates, buildLog } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:UpgradeContent')

const UpgradeContent = T.model('UpgradeContent', {})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
  }))
  .actions((self) => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    cashierHelper(opt) {
      self.root.cashierHelper(opt)
    },
    upgradeHelper() {
      self.show = true
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default UpgradeContent
