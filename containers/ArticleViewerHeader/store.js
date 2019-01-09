/*
* ArticleViewerHeader store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:ArticleViewerHeader')
/* eslint-enable no-unused-vars */

const ArticleViewerHeader = t
  .model('ArticleViewerHeader', {
    loading: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get viewingData() {
      return self.root.viewingData
    },
    get activeThread() {
      const { activeThread } = self.root.viewing
      return activeThread
    },
  }))
  .actions(self => ({
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    syncViewingItem(item) {
      self.root.viewing.syncViewingItem(item)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ArticleViewerHeader
