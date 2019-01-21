/*
 * ArticleBodyHeader store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from 'utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:ArticleBodyHeader')

const ArticleBodyHeader = t
  .model('ArticleBodyHeader', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
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
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get activeThread() {
      const { activeThread } = self.root.viewing
      return activeThread
    },
  }))
  .actions(self => ({
    callInformer() {
      self.root.callInformer()
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ArticleBodyHeader
