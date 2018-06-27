/*
 * AccountViewerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:AccountViewerStore')
/* eslint-enable no-unused-vars */

const AccountViewerStore = t
  .model('AccountViewerStore', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get subscribedCommunities() {
      return self.root.account.subscribedCommunities
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get curTheme() {
      return self.root.theme.curTheme
    },
  }))
  .actions(self => ({
    logout() {
      self.root.account.logout()
    },
    changeTheme(name) {
      self.root.changeTheme(name)
    },
    updateAccount(data) {
      self.root.account.updateAccount(data)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default AccountViewerStore
