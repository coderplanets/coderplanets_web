/*
 * CommunityEditors store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
import { PagedUsers, emptyPagiData } from '../../stores/SharedModel'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:CommunityEditors')
/* eslint-enable no-unused-vars */

const CommunityEditors = t
  .model('CommunityEditors', {
    pagedEditors: t.optional(PagedUsers, emptyPagiData),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get pagedEditorsData() {
      return stripMobx(self.pagedEditors)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunityEditors
