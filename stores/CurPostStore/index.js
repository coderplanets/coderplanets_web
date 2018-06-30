/*
* CurPostStore store
*
*/

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'
import { Post } from '../SharedModel'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:CurPostStore')
/* eslint-enable no-unused-vars */

const CurPostStore = t
  .model('CurPostStore', {
    post: t.optional(Post, {}),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    load(post) {
      self.post = post
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CurPostStore
