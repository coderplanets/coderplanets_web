/*
* ArticleBanner store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, TYPE } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:ArticleBanner')
/* eslint-enable no-unused-vars */

const ArticleBanner = t
  .model('ArticleBanner', {
    loading: t.optional(t.boolean, false),
    action: t.optional(
      t.enumeration('action', [TYPE.FAVORITE, TYPE.STAR]),
      TYPE.FAVORITE
    ),
  })
  .views(self => ({
    get root() {
      return getParent(self)
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
  .actions(self => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
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

export default ArticleBanner
