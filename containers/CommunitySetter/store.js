/*
 * CommunitySetter store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '@utils'
import { PagedCommunities } from '@model'

/* eslint-disable-next-line */
const debug = makeDebugger('S:CommunitySetter')

const CommunitySetter = t
  .model('CommunitySetter', {
    visible: t.optional(t.boolean, false),
    searchValue: t.optional(t.string, ''),
    pagedCommunities: t.maybeNull(PagedCommunities),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get viewingData() {
      return self.root.viewingData
    },
    get curBelongIds() {
      const { communities } = self.root.viewingData

      return R.pluck('id', communities)
    },
    get currentThread() {
      return self.root.viewing.currentThread
    },
    get pagedCommunitiesData() {
      return stripMobx(self.pagedCommunities)
    },
  }))
  .actions(self => ({
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunitySetter
