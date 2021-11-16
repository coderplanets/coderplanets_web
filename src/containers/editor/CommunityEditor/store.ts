/*
 * CommunityEditor store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { pick, values, isEmpty } from 'ramda'

import type { TRootStore, TRoute } from '@/spec'
// toJS
import { markStates } from '@/utils/mobx'

import type {
  TSelectTypeStatus,
  TSetupDomainStatus,
  TSetupInfoStatus,
  TValidState,
} from './spec'
import { STEP, COMMUNITY_TYPE } from './constant'

const CommunityEditor = T.model('CommunityEditorStore', {
  step: T.optional(T.enumeration(values(STEP)), STEP.SELECT_TYPE),
  communityType: T.maybeNull(T.enumeration(values(COMMUNITY_TYPE))),
  // if community exist / has pending apply
  checking: T.optional(T.boolean, false),
  submitting: T.optional(T.boolean, false),

  communityExist: T.optional(T.boolean, false),
  hasPendingApply: T.optional(T.boolean, false),

  //
  raw: T.optional(T.string, ''),
  logo: T.maybeNull(T.string),
  title: T.optional(T.string, ''),
  desc: T.optional(T.string, ''),
  applyMsg: T.optional(T.string, ''),
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
      const { raw } = self

      return { raw }
    },
    get setupInfoStatus(): TSetupInfoStatus {
      const { raw, title, desc, logo, applyMsg } = self

      return { raw, title, desc, logo, applyMsg }
    },
    get isCommunityTypeValid(): boolean {
      const slf = self as TStore
      if (!slf.isLogin) return false

      return !slf.hasPendingApply
    },
    get isRawValid(): boolean {
      if (self.communityExist) return false

      const rule = /^[0-9a-zA-Z]+$/
      return rule.test(self.raw)
    },
    get isTitleValid(): boolean {
      return !isEmpty(self.raw)
    },
    get isDescValid(): boolean {
      return !isEmpty(self.desc)
    },
    get isLogoValid(): boolean {
      return self.logo && !isEmpty(self.logo)
    },
    get validState(): TValidState {
      const slf = self as TStore

      return pick(
        [
          'isCommunityTypeValid',
          'isRawValid',
          'isTitleValid',
          'isDescValid',
          'isLogoValid',
          'checking',
          'communityExist',
          'hasPendingApply',
          'isLogin',
          'submitting',
        ],
        slf,
      )
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
