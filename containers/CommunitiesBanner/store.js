/*
 * CommunitiesBannerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
import { PagedCategories } from '../../stores/SharedModel'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:CommunitiesBannerStore')
/* eslint-enable no-unused-vars */

const CommunitiesBannerStore = t
  .model('CommunitiesBannerStore', {
    pagedCategories: t.maybe(PagedCategories),
    activeRaw: t.optional(t.string, 'all'),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get pagedCategoriesData() {
      const data = stripMobx(self.pagedCategories)
      if (data) {
        data.entries = R.concat([{ title: '全部', raw: 'all' }], data.entries)
      }
      return data
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
