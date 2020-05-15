/*
 * JobContent store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, buildLog, stripMobx } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:JobContent')

const JobContent = T.model('JobContent', {})
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
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get viewingData() {
      return self.root.viewingData
    },
  }))
  .actions(self => ({
    callInformer() {
      self.root.callInformer()
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    updateTagsBar(tags) {
      self.root.tagsBar.mark({ tags })
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default JobContent
