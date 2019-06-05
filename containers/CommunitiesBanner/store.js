/*
 * CommunitiesBannerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, makelogger, stripMobx } from '@utils'
import { PagedCategories } from '@model'
/* eslint-disable-next-line */
const log = makelogger('S:CommunitiesBannerStore')

const CommunitiesBannerStore = t
  .model('CommunitiesBannerStore', {
    pagedCategories: t.maybeNull(PagedCategories),
    activeTab: t.optional(t.string, 'pl'),
    searchValue: t.optional(t.string, ''),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get isSearchMode() {
      return !R.isEmpty(self.searchValue)
    },
    get searching() {
      return self.root.communitiesContent.searching
    },
    get pagedCategoriesData() {
      return stripMobx(self.pagedCategories)
    },
  }))
  .actions(self => ({
    updateEditing(sobj) {
      self.markState(sobj)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunitiesBannerStore
