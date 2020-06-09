/*
 * ArticleBanner store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { TYPE } from '@/constant'
import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:ArticleBanner')

const ArticleBanner = T.model('ArticleBanner', {
  loading: T.optional(T.boolean, false),
  action: T.optional(
    T.enumeration('action', [TYPE.FAVORITE, TYPE.STAR]),
    TYPE.FAVORITE,
  ),
  headerFixed: T.optional(T.boolean, false),
  scrollDirection: T.optional(
    T.enumeration('scrollDirection', ['up', 'down']),
    'down',
  ),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get isHeaderFixed() {
      return self.headerFixed && self.scrollDirection === 'up'
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get viewingData() {
      return self.root.viewingData
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
    syncViewingItem(item) {
      self.root.viewing.syncViewingItem(item)
    },
    setHeaderFix(fix) {
      self.headerFixed = fix
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ArticleBanner
