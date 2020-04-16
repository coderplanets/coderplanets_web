/*
 * C11NSettingPanel store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog } from '@utils'
/* eslint-disable-next-line */
const log = buildLog('S:C11NSettingPanel')

const C11NSettingPanel = t
  .model('C11NSettingPanel', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get curThread() {
      return self.root.viewing.activeThread
    },
  }))
  .actions(self => ({
    updateC11N(option) {
      self.root.updateC11N(option)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default C11NSettingPanel
