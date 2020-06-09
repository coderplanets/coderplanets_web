/*
 * ReposThread store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { findIndex, merge, propEq, isEmpty, pickBy } from 'ramda'

import { TYPE } from '@/constant'
import { markStates, buildLog, stripMobx, nilOrEmpty } from '@/utils'
import { PagedRepos, Tag, ContentFilter, emptyPagiData } from '@/model'

/* eslint-disable-next-line */
const log = buildLog('S:ReposThread')

const ReposThread = T.model('ReposThread', {
  pagedRepos: T.optional(PagedRepos, emptyPagiData),
  filters: T.optional(ContentFilter, {}),
  activeTag: T.maybeNull(Tag),
  curView: T.optional(
    T.enumeration('curView', [
      TYPE.RESULT,
      TYPE.LOADING,
      TYPE.NOT_FOUND,
      TYPE.RESULT_EMPTY,
    ]),
    TYPE.RESULT,
  ),
})
  .views((self) => ({
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
    get filtersData() {
      return stripMobx(pickBy((v) => !isEmpty(v), self.filters))
    },
    get activeTagData() {
      return stripMobx(self.activeTag) || {}
    },
    get tagQuery() {
      const curTag = stripMobx(self.activeTag)
      if (nilOrEmpty(curTag)) return {}
      return { tag: curTag.title }
    },
    get activeRepo() {
      return stripMobx(self.root.viewing.repo)
    },
    get pageDensity() {
      return self.root.account.pageDensity
    },
    get showFilterBar() {
      const curFilter = stripMobx(pickBy((v) => !isEmpty(v), self.filters))
      const pagedRepos = stripMobx(self.pagedRepos)

      return !isEmpty(curFilter) || !isEmpty(pagedRepos.entries)
    },
  }))
  .actions((self) => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    selectFilter(option) {
      const curfilter = self.filtersData
      self.filters = merge(curfilter, option)
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
      const index = findIndex(propEq('id', id), entries)
      if (index >= 0) {
        self.pagedRepos.entries[index].viewerHasViewed = true
      }
    },
    updateItem(item) {
      const { entries } = self.pagedReposData
      const index = findIndex(propEq('id', item.id), entries)
      if (index >= 0) {
        self.pagedRepos.entries[index] = merge(
          stripMobx(self.pagedRepos.entries[index]),
          item,
        )
      }
    },
    updateC11N(option) {
      self.root.updateC11N(option)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default ReposThread
