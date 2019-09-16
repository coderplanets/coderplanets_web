/*
 * RichEditor store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog, stripMobx } from '@utils'
/* eslint-disable-next-line */
const log = buildLog('S:RichEditor')

// NOTE: add me to stores/index && stores/RootStore/index
const RichEditor = t
  .model('RichEditor', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get curThread() {
      return self.root.viewing.activeThread
    },
    get accountInfo() {
      return self.root.accountInfo
    },
    get viewingData() {
      return self.root.viewingData
    },
  }))
  .actions(self => ({
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default RichEditor
