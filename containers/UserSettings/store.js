/*
* UserSettings store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:UserSettings')
/* eslint-enable no-unused-vars */

const UserSettings = t
  .model('UserSettings', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curTheme() {
      return self.root.theme.curTheme
    },
    get accountInfo() {
      return self.root.accountInfo
    },
  }))
  .actions(self => ({
    changeTheme(name) {
      self.root.changeTheme(name)
    },
    updateC11N(option) {
      self.root.updateC11N(option)
    },
    upgradeHepler() {
      self.root.upgradeHepler()
    },
    sponsorHepler() {
      self.root.sponsorHepler()
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserSettings
