/*
 * UserSettings store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:UserSettings')

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
    get isSelfViewing() {
      return self.root.viewing.isSelfViewing
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
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserSettings
