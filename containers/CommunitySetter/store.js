/*
 * CommunitySetter store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from 'utils'
import { PagedCommunities } from 'stores/SharedModel'

/* eslint-disable-next-line */
const debug = makeDebugger('S:CommunitySetter')

const CommunitySetter = t
  .model('CommunitySetter', {
    pagedCommunities: t.maybeNull(PagedCommunities),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get pagedCommunitiesData() {
      return stripMobx(self.pagedCommunities)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunitySetter
