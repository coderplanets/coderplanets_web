/*
 * Footer2 store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:Footer')

const Footer = T.model('Footer', {
  showSponsor: T.optional(T.boolean, false),
  showBusBanner: T.optional(T.boolean, false),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get accountInfo() {
      return self.root.accountInfo
    },
  }))
  .actions((self) => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    cashierHelper(opt) {
      self.root.cashierHelper(opt)
    },
    sponsorHepler() {
      self.showSponsor = true
    },
    upgradeHelper() {
      self.root.upgradeHelper()
    },
    closeSponsor() {
      self.showSponsor = false
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default Footer
