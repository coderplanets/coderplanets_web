/*
 * ViewingStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, THREAD } from '../../utils'
import { User, Community, Post, Video, Repo } from '../SharedModel'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:ViewingStore')
/* eslint-enable no-unused-vars */

const ViewingStore = t
  .model('ViewingStore', {
    user: t.optional(User, {}),
    community: t.optional(Community, {}),
    post: t.optional(Post, {}),
    video: t.optional(Video, {}),
    repo: t.optional(Repo, {}),
    activeThread: t.optional(
      t.enumeration('activeThread', R.values(THREAD)),
      THREAD.POST
    ),
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
