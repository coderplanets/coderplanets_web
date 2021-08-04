/*
 * ArticleBodyHeader store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, toJS } from '@/utils/mobx'

const ArticleBodyHeader = T.model('ArticleBodyHeader', {})
  .views((self) => ({
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
      return toJS(self.root.viewing.community)
    },
    get activeThread() {
      const { activeThread } = self.root.viewing
      return activeThread
    },
  }))
  .actions((self) => ({
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ArticleBodyHeader
