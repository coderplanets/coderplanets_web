/*
 * ReposThread store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { markStates, buildLog, stripMobx, TYPE, nilOrEmpty } from '@utils'
import { PagedRepos, Tag, ContentFilter, emptyPagiData } from '@model'

/* eslint-disable-next-line */
const log = buildLog('S:ReposThread')

const ReposThread = t
  .model('ReposThread', {
    pagedRepos: t.optional(PagedRepos, emptyPagiData),
    filters: t.optional(ContentFilter, {}),
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
    get filtersData() {
      return stripMobx(R.pickBy(v => !R.isEmpty(v), self.filters))
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
      const curFilter = stripMobx(R.pickBy(v => !R.isEmpty(v), self.filters))
      const pagedRepos = stripMobx(self.pagedRepos)

      return !R.isEmpty(curFilter) || !R.isEmpty(pagedRepos.entries)
    },
  }))
  .actions(self => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
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
    updateItem(item) {
      const { entries } = self.pagedReposData
      const index = R.findIndex(R.propEq('id', item.id), entries)
      if (index >= 0) {
        self.pagedRepos.entries[index] = R.merge(
          stripMobx(self.pagedRepos.entries[index]),
          item
        )
      }
    },
    updateC11N(option) {
      self.root.updateC11N(option)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default ReposThread
