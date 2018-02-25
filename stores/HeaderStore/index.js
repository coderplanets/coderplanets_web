/*
 * HeaderStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:HeaderStore')
/* eslint-enable no-unused-vars */

const HeaderStore = t
  .model('HeaderStore', {
    fixed: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
  }))
  .actions(self => ({
    setFix(fixed = false) {
      self.fixed = fixed
    },
    openDoraemon() {
      self.root.openDoraemon()
    },
    openPreview(type) {
      self.root.openPreview(type)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default HeaderStore
