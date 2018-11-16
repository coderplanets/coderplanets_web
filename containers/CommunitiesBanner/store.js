/*
 * CommunitiesBannerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'

import { markStates, makeDebugger, stripMobx } from '../../utils'
import { PagedCategories } from '../../stores/SharedModel'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:CommunitiesBannerStore')
/* eslint-enable no-unused-vars */

const CommunitiesBannerStore = t
  .model('CommunitiesBannerStore', {
    pagedCategories: t.maybeNull(PagedCategories),
    activeRaw: t.optional(t.string, 'all'),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get pagedCategoriesData() {
      return stripMobx(self.pagedCategories)
    },
  }))
  .actions(self => ({
    markRoute(query) {
      self.root.markRoute(query)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunitiesBannerStore
