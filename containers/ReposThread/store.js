/*
 * ReposThread store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import {
  PagedRepos,
  Tag,
  ContentFilter,
  emptyPagiData,
} from '../../stores/SharedModel'

import { markStates, makeDebugger, stripMobx, TYPE } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:ReposThread')
/* eslint-enable no-unused-vars */

const ReposThread = t
  .model('ReposThread', {
    pagedRepos: t.optional(PagedRepos, emptyPagiData),
    filters: t.optional(ContentFilter, {}),
    /* tags: t.optional(t.map(Tag), {}), */
    tags: t.optional(t.array(Tag), []),
    activeTag: t.maybeNull(Tag),
    curView: t.optional(
      t.enumeration('curView', [
        TYPE.RESULT,
        TYPE.LOADING,
        TYPE.NOT_FOUND,
        TYPE.RESULT_EMPTY,
      ]),
      TYPE.RESULT
    ),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
    get pagedReposData() {
      return stripMobx(self.pagedRepos)
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get tagsData() {
      return stripMobx(self.tags)
    },
    get filtersData() {
      return stripMobx(self.filters)
    },
    get activeTagData() {
      return stripMobx(self.activeTag) || { title: '', color: '' }
    },
    get activeRepo() {
      return stripMobx(self.root.viewing.repo)
    },
  }))
  .actions(self => ({
    selectFilter(option) {
      const curfilter = self.filtersData
      self.filters = R.merge(curfilter, option)
    },
    selectTag(tag) {
      const cur = tag.title === '' ? null : tag

      self.activeTag = cur
    },
    setHeaderFix(fix) {
      self.root.setHeaderFix(fix)
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    setViewedFlag(id) {
      const { entries } = self.pagedReposData
      const index = R.findIndex(R.propEq('id', id), entries)
      if (index >= 0) {
        self.pagedRepos.entries[index].viewerHasViewed = true
      }
    },
    updateCustom(option) {
      self.root.updateCustom(option)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ReposThread
