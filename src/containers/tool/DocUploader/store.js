/*
 * DocUploader store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, toJS } from '@/utils/mobx'

const DocUploader = T.model('DocUploader', {})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get curCommunity() {
      return toJS(self.root.viewing.community)
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
  .actions((self) => ({
    toast(type, options) {
      self.root.toast(type, options)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default DocUploader
