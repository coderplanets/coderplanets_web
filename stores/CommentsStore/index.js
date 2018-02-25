/*
 * CommentsStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:CommentsStore')
/* eslint-enable no-unused-vars */

const CommentsStore = t
  .model('CommentsStore', {
    showInputEditor: t.optional(t.boolean, false),
    deletingID: t.optional(t.string, ''),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommentsStore
