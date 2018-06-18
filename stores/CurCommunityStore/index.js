/*
 * CurCommunity Store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
import { Community, Tag } from '../SharedModel'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:CurCommunityStore')
/* eslint-enable no-unused-vars */

const CurCommunityStore = t
  .model('CurCommunityStore', {
    community: t.optional(Community, {}),
    activeTag: t.optional(Tag, {}),
    activeThread: t.optional(t.string, 'posts'),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get data() {
      return stripMobx(self.community)
    },
  }))
  .actions(self => ({
    load(obj) {
      self.markState({ ...obj })
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CurCommunityStore
