/*
 * UserSettings store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:UserSettings')

const UserSettings = T.model('UserSettings', {})
  .views((self) => ({
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
  .actions((self) => ({
    changeTheme(name) {
      self.root.changeTheme(name)
    },
    updateC11N(option) {
      self.root.updateC11N(option)
    },
    membershipHelper() {
      self.root.membershipHelper()
    },
    sponsorHepler() {
      self.root.sponsorHepler()
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default UserSettings
