/*
 * Labeler store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'
import { Tag } from '../../stores/SharedModel'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:Labeler')
/* eslint-enable no-unused-vars */

const Labeler = t
  .model('Labeler', {
    tags: t.optional(t.array(Tag), []),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get curThread() {
      return self.root.viewing.activeThread
    },
    get tagsData() {
      return stripMobx(self.tags)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default Labeler
