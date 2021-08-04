/*
 * CommunitySetter store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { pluck } from 'ramda'

import { markStates, toJS } from '@/utils/mobx'
import { PagedCommunities } from '@/model'

const CommunitySetter = T.model('CommunitySetter', {
  visible: T.optional(T.boolean, false),
  searchValue: T.optional(T.string, ''),
  pagedCommunities: T.maybeNull(PagedCommunities),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get viewingData() {
      return self.root.viewingData
    },
    get curBelongIds() {
      const { communities } = self.root.viewingData

      return pluck('id', communities)
    },
    get currentThread() {
      return self.root.viewing.currentThread
    },
    get pagedCommunitiesData() {
      return toJS(self.pagedCommunities)
    },
  }))
  .actions((self) => ({
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunitySetter
