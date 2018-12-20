/*
 * ArticleViwerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import { markStates, makeDebugger, stripMobx, TYPE } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:ArticleViwerStore')
/* eslint-enable no-unused-vars */

const ArticleViwerStore = t
  .model('ArticleViwerStore', {
    type: t.optional(
      t.enumeration('type', [
        TYPE.PREVIEW_POST_VIEW,
        TYPE.PREVIEW_JOB_VIEW,
        TYPE.PREVIEW_REPO_VIEW,
        TYPE.PREVIEW_VIDEO_VIEW,
      ]),
      TYPE.PREVIEW_POST_VIEW
    ),
    loading: t.optional(t.boolean, false),
  })
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
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    syncViewingItem(item) {
      self.root.viewing.syncViewingItem(item)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ArticleViwerStore
