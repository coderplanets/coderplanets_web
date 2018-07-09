/*
 * ViewingStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, TYPE } from '../../utils'
import { Community, Post } from '../SharedModel'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:ViewingStore')
/* eslint-enable no-unused-vars */

const ViewingStore = t
  .model('ViewingStore', {
    community: t.optional(Community, {}),
    post: t.optional(Post, {}),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    setViewing(type, content) {
      switch (type) {
        case TYPE.POST: {
          self.post = R.merge(self.post, content)
          return false
        }

        default: {
          debug("what's the type?")
        }
      }
    },
    clearViewing(type) {
      switch (type) {
        case TYPE.POST: {
          self.post = {}
          return false
        }

        default: {
          debug("what's the type?")
        }
      }
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ViewingStore
