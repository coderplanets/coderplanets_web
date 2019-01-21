/*
 * JobContent store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from 'utils'

/* eslint-disable-next-line */
const debug = makeDebugger('S:JobContent')

const JobContent = t
  .model('JobContent', {})
  .views(self => ({
    get root() {
      return getParent(self)
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
      self.root.tagsBar.markState({ tags })
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default JobContent
