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
    get themeKeys() {
      return self.root.theme.themeKeys
    },
    get subscribedCommunities() {
      const { entries, totalCount } = self.root.account.subscribedCommunities
      return {
        entries: entries.toJSON(),
        totalCount,
      }
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get curTheme() {
      return self.root.theme.curTheme
    },
  }))
  .actions(self => ({
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
