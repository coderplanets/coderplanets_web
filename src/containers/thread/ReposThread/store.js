/*
 * ReposThread store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { findIndex, merge, propEq, isEmpty, pickBy } from 'ramda'

import { TYPE } from '@/constant'
import { markStates, toJS } from '@/utils/mobx'
import { nilOrEmpty } from '@/utils/validator'
import { PagedRepos, Tag, ArticlesFilter, emptyPagi } from '@/model'

const ReposThread = T.model('ReposThread', {
  pagedRepos: T.optional(PagedRepos, emptyPagi),
  filters: T.optional(ArticlesFilter, {}),
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
      return toJS(self.root.viewing.community)
    },
    get pagedReposData() {
      return toJS(self.pagedRepos)
    },
    get accountInfo() {
      return self.root.account.accountInfo
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get filtersData() {
      return toJS(pickBy((v) => !isEmpty(v), self.filters))
    },
    get activeTagData() {
      return toJS(self.activeTag) || {}
    },
    get tagQuery() {
      const curTag = toJS(self.activeTag)
      if (nilOrEmpty(curTag)) return {}
      return { tag: curTag.title }
    },
    get activeRepo() {
      return toJS(self.root.viewing.repo)
    },
    get pageDensity() {
      return self.root.account.pageDensity
    },
    get showFilterBar() {
      const curFilter = toJS(pickBy((v) => !isEmpty(v), self.filters))
      const pagedRepos = toJS(self.pagedRepos)

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
    showTopModeline(fix) {
      self.root.showTopModeline(fix)
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    updateItem(item) {
      const { entries } = self.pagedReposData
      const index = findIndex(propEq('id', item.id), entries)
      if (index >= 0) {
        self.pagedRepos.entries[index] = merge(
          toJS(self.pagedRepos.entries[index]),
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
