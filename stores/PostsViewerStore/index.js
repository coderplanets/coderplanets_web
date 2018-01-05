/*
 * PostsViewerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils/functions'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:PostsViewerStore')
/* eslint-enable no-unused-vars */

const PostsViewerStore = t
  .model('PostsViewerStore', {
    networkInited: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },

    get SR71$() {
      return self.root.SR71$
    },

    get data() {
      return self.root.posts.current
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default PostsViewerStore
