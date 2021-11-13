/*
 * CommunityEditor store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import type { TRootStore, TRoute } from '@/spec'
// toJS
import { markStates } from '@/utils/mobx'

import type {
  TSelectTypeStatus,
  TSetupDomainStatus,
  TSetupInfoStatus,
} from './spec'
import { STEP, COMMUNITY_TYPE } from './constant'

const CommunityEditor = T.model('CommunityEditorStore', {
  step: T.optional(
    T.enumeration(values(STEP)),
    STEP.SELECT_TYPE, // SELECT_TYPE // SETUP_DOMAIN // STEP.SELECT_TYPE
  ),

  communityType: T.maybeNull(T.enumeration(values(COMMUNITY_TYPE))),

  domainValue: T.optional(T.string, ''),
  titleValue: T.optional(T.string, ''),
  descValue: T.optional(T.string, ''),
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
    get selectTypeStatus(): TSelectTypeStatus {
      const { communityType } = self

      return { communityType }
    },
    get setupDomainStatus(): TSetupDomainStatus {
      const { domainValue } = self

      return { domainValue }
    },
    get setupInfoStatus(): TSetupInfoStatus {
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
