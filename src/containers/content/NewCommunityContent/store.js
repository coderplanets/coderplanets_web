/*
 * CommunitiesContentStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'

// stripMobx
import { markStates, buildLog } from '@utils'

import { LN } from './logic'
/* eslint-disable-next-line */
const log = buildLog('S:CommunitiesContentStore')

const CommunitiesContentStore = t
  .model('NewCommunityContentStore', {
    step: t.optional(
      t.enumeration([
        LN.STEP.SELECT_TYPE,
        LN.STEP.SETUP_DOMAIN,
        LN.STEP.SETUP_INFO,
      ]),
      LN.STEP.SELECT_TYPE // SELECT_TYPE // SETUP_DOMAIN // STEP.SELECT_TYPE
    ),

    communityType: t.maybeNull(
      t.enumeration([
        LN.COMMUNITY_TYPE.STANDER,
        LN.COMMUNITY_TYPE.CITY,
        LN.COMMUNITY_TYPE.WORK,
        LN.COMMUNITY_TYPE.TEAM,
      ])
    ),

    domainValue: t.optional(t.string, ''),
    titleValue: t.optional(t.string, ''),
    descValue: t.optional(t.string, ''),

    // current active sidbar menu id
    // cur active category

    // search status
    // searching: t.optional(t.boolean, false),
    // isSearchMode: t.optional(t.boolean, false),
    // searchResultCount: t.optional(t.number, 0),
    // searchValue: t.optional(t.string, ''),
    // showSearchMask: t.optional(t.boolean, true),
    // showCreateHint: t.optional(t.boolean, true),
    // showSearchHint: t.optional(t.boolean, false),
    // searchfocused: t.optional(t.boolean, false),
  })
  .views(self => ({
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
  .actions(self => ({
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

export default CommunitiesContentStore
