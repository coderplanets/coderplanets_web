/*
 * PostBannerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:PostBannerStore')
/* eslint-enable no-unused-vars */

const PostBannerStore = t
  .model('PostBannerStore', {})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get postData() {
      return stripMobx(self.root.curPost.post)
    },
  }))
  .actions(self => ({
    loadPost(post) {
      self.root.curPost.load(post)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default PostBannerStore
