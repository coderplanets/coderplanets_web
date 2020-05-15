/*
 * UserContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { USER_THREAD } from '@/constant'
import { markStates, buildLog, stripMobx } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:UserContent')

const UserContent = T.model('UserContent', {
  activeThread: T.optional(
    T.enumeration('activeThread', R.values(USER_THREAD)),
    USER_THREAD.PUBLISH
  ),
  following: T.optional(T.boolean, false),
})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get viewingUser() {
      return stripMobx(self.root.viewing.user)
    },
    get isSelfViewing() {
      return self.root.viewing.isSelfViewing
    },
  }))
  .actions(self => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    updateViewingUser(user) {
      self.root.viewing.updateViewingUser(user)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
  }))

export default UserContent
