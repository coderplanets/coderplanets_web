/*
 * DiscoveryContentStore store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'

// stripMobx
import { markStates, buildLog } from '@/utils'

import { LN } from './logic'
/* eslint-disable-next-line */
const log = buildLog('S:DiscoveryContentStore')

const DiscoveryContentStore = T.model('NewCommunityContentStore', {
  step: T.optional(
    T.enumeration([
      LN.STEP.SELECT_TYPE,
      LN.STEP.SETUP_DOMAIN,
      LN.STEP.SETUP_INFO,
    ]),
    LN.STEP.SELECT_TYPE, // SELECT_TYPE // SETUP_DOMAIN // STEP.SELECT_TYPE
  ),

  communityType: T.maybeNull(
    T.enumeration([
      LN.COMMUNITY_TYPE.STANDER,
      LN.COMMUNITY_TYPE.CITY,
      LN.COMMUNITY_TYPE.WORK,
      LN.COMMUNITY_TYPE.TEAM,
    ]),
  ),

  domainValue: T.optional(T.string, ''),
  titleValue: T.optional(T.string, ''),
  descValue: T.optional(T.string, ''),

  // current active sidbar menu id
  // cur active category

  // search status
  // searching: T.optional(T.boolean, false),
  // isSearchMode: T.optional(T.boolean, false),
  // searchResultCount: T.optional(T.number, 0),
  // searchValue: T.optional(T.string, ''),
  // showSearchMask: T.optional(T.boolean, true),
  // showCreateHint: T.optional(T.boolean, true),
  // showSearchHint: T.optional(T.boolean, false),
  // searchfocused: T.optional(T.boolean, false),
})
  .views((self) => ({
    get root() {
      return getParent(self)
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get curRoute() {
      return self.root.curRoute
    },
    get selectTypeStatus() {
      const { communityType } = self

      return { communityType }
    },
    get setupDomainStatus() {
      const { domainValue } = self

      return { domainValue }
    },
    get setupInfoStatus() {
      const { domainValue, titleValue, descValue } = self

      return { domainValue, titleValue, descValue }
    },
    get searchStatus() {
      return {}
    },
  }))
  .actions((self) => ({
    updateEditing(sobj) {
      self.mark(sobj)
    },
    authWarning(options) {
      self.root.authWarning(options)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default DiscoveryContentStore
