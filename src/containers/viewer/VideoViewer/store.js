/*
 * VideoViewer store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

import { markStates, buildLog, stripMobx } from '@/utils'
/* eslint-disable-next-line */
const log = buildLog('S:VideoViewer')

const VideoViewer = T.model('VideoViewer', {
  loading: T.optional(T.boolean, false),
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
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
  }))
  .actions(self => ({
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default VideoViewer
