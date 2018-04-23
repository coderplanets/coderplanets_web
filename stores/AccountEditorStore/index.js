/*
 * AccountEditorStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
import { User } from '../SharedModel'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:AccountEditorStore')
/* eslint-enable no-unused-vars */

const AccountEditorStore = t
  .model('AccountEditorStore', {
    user: t.optional(User, {}),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get accountInfo() {
      return {
        ...stripMobx(self.user),
      }
    },
  }))
  .actions(self => ({
    copyAccountInfo() {
      const { accountInfo } = self.root.account
      if (accountInfo !== {}) {
        self.user = accountInfo
      }
    },

    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default AccountEditorStore
