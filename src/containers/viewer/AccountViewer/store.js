/*
 * AccountViewerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog, stripMobx } from '@/utils'
import { User, EmptyUser } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:AccountViewerStore')

const AccountViewerStore = t
  .model('AccountViewerStore', {
    viewingUser: t.optional(User, EmptyUser),
    viewingType: t.optional(
      t.enumeration('viewingType', ['account', 'user']),
      'account'
    ),
    loading: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get subscribedCommunities() {
      if (self.viewingType === 'user') {
        return stripMobx(self.viewingUser.subscribedCommunities)
      }

      return stripMobx(self.root.account.subscribedCommunities)
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get userInfoData() {
      if (self.viewingType === 'user') {
        return stripMobx(self.viewingUser)
      }
      return self.accountInfo
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
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default AccountViewerStore
