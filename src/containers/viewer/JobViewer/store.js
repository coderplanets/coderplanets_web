/*
 * JobViewer store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog, stripMobx } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:JobViewer')

const JobViewer = T.model('JobViewer', {
  loading: T.optional(T.boolean, false),
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
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    syncViewingItem(item) {
      self.root.viewing.syncViewingItem(item)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default JobViewer
