/*
 * CommunityEditor store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import type { TRootStore, TRoute } from '@/spec'
// stripMobx
import { markStates } from '@/utils/mobx'
import { LN } from './constant'

const CommunityEditor = T.model('CommunityEditorStore', {
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
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get curRoute(): TRoute {
      const root = getParent(self) as TRootStore
      return root.curRoute
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
    updateEditing(sobj): void {
      const slf = self as TStore
      slf.mark(sobj)
    },
    authWarning(options): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    markRoute(query): void {
      const root = getParent(self) as TRootStore
      root.markRoute(query)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof CommunityEditor>
export default CommunityEditor
