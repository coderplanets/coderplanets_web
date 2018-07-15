/*
 * ViewingStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
/* import R from 'ramda' */

import { markStates, makeDebugger, THREAD } from '../../utils'
import { Community, Post, Video, Repo } from '../SharedModel'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:ViewingStore')
/* eslint-enable no-unused-vars */

const ViewingStore = t
  .model('ViewingStore', {
    community: t.optional(Community, {}),
    post: t.optional(Post, {}),
    video: t.optional(Video, {}),
    repo: t.optional(Repo, {}),
    activeThread: t.optional(
      t.enumeration('activeThread', THREAD.__TYPES),
      THREAD.POST
    ),
    /*
       activeTag: t.optional(Tag, {}),
       activeThread: t.optional(
       t.enumeration('activeThread', THREAD.__TYPES),
       THREAD.POST
       ),
     */
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    setViewing(sobj) {
      self.markState(sobj)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ViewingStore
