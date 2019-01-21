/*
 * UserContent store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, USER_THREAD, stripMobx } from 'utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:UserContent')

const UserContent = t
  .model('UserContent', {
    activeThread: t.optional(
      t.enumeration('activeThread', R.values(USER_THREAD)),
      USER_THREAD.PUBLISH
    ),
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
    markState(sobj) {
      markStates(sobj, self)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
  }))

export default UserContent
