/*
 * AccountEditorStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
import { User } from '../../stores/SharedModel'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:AccountEditorStore')
/* eslint-enable no-unused-vars */

const AccountEditorStore = t
  .model('AccountEditorStore', {
    user: t.optional(User, {}),
    showSocials: t.optional(t.boolean, false),

    updating: t.optional(t.boolean, false),
    success: t.optional(t.boolean, false),
    error: t.optional(t.boolean, false),
    warn: t.optional(t.boolean, false),
    statusMsg: t.optional(t.string, ''),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get statusClean() {
      const { success, error, warn } = self
      return !success && !error && !warn
    },
    get accountInfo() {
      return {
        ...stripMobx(self.user),
      }
    },
    get accountOrigin() {
      return self.root.account.accountInfo
    },
  }))
  .actions(self => ({
    copyAccountInfo() {
      const { accountInfo } = self.root.account
      if (accountInfo !== {}) {
        self.user = accountInfo
      }
    },

    updateOrign(user) {
      self.root.account.updateAccount(user)
    },

    updateUser(sobj) {
      const user = R.merge(self.user, { ...sobj })
      self.markState({ user })
    },

    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default AccountEditorStore
