/*
 * ArticleViewerHeader store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { TYPE } from '@/constant'
import { markStates } from '@/utils/mobx'

const ArticleViewerHeader = T.model('ArticleViewerHeader', {
  loading: T.optional(T.boolean, false),
  action: T.optional(
    T.enumeration('action', [TYPE.FAVORITE, TYPE.STAR]),
    TYPE.FAVORITE,
  ),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get viewingArticle() {
      return self.root.viewingArticle
    },
    get activeThread() {
      const { activeThread } = self.root.viewing
      return activeThread
    },
    get starLoading() {
      const { action, loading } = self
      if (action === TYPE.STAR && loading) return true
      return false
    },
    get favoriteLoading() {
      const { action, loading } = self
      if (action === TYPE.FAVORITE && loading) return true
      return false
    },
  }))
  .actions((self) => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    syncArticle(item) {
      self.root.viewing.syncArticle(item)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ArticleViewerHeader
