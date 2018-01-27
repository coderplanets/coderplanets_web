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
    get curTheme() {
      return self.root.theme.curTheme
    },
  }))
  .actions(self => ({
    changeTheme(name) {
      self.root.changeTheme(name)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default AccountViewerStore
