/*
 * CurCommunity store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
import { Community } from '../SharedModel'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:CurCommunity')
/* eslint-enable no-unused-vars */

const CurCommunity = t
  .model('CurCommunity', {
    community: t.optional(Community, {}),
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
    load(data) {
      self.markState({ community: data })
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CurCommunity
