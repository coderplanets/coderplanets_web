/*
 * DocUploader store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:DocUploader')

const DocUploader = t
  .model('DocUploader', {})
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
    toast(type, options) {
      self.root.toast(type, options)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default DocUploader
