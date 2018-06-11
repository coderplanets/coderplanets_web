/*
 * PostsStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
import { PagedPosts } from '../SharedModel'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:PostsStore')
/* eslint-enable no-unused-vars */
const PostsStore = t
  .model('PostsStore', {
    // TODO: remove community info, let apollo-client do the CACHE
    data: t.optional(t.map(PagedPosts), { js: {} }),
    // tags ...
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },

    get postsData() {
      const curCommunity = 'js'
      return self.data.get(curCommunity).toJSON()
    },

    get current() {
      const allJSON = self.all.toJSON()
      return allJSON.js
    },
    get commentsParticipatorUsers() {
      return stripMobx(self.commentsParticipators)
    },
  }))
  .actions(self => ({
    loadData(data) {
      const curCommunity = 'js'
      self.data.set(curCommunity, data)
    },

    load() {
      /* const curCommunity = 'js' */
      /* self.data.set(curCommunity, pagedPosts) */
      //      R.forEachObjIndexed((v, k) => {
      //      self.all.set(k, v)
      //      }, fakeData)
      // debug('after: ', self.all.toJSON())
    },

    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default PostsStore
