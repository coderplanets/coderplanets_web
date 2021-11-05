/*
 * AccountEditorStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { reduce, keys, merge, pick, startsWith } from 'ramda'

import type { TRootStore, TSubmitState, TUser } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'

import type { TEditData } from './spec'
import { SEX } from './constant'

const safeMap = (obj) => {
  return reduce(
    merge,
    {},
    keys(obj).map((key) => {
      if (key === 'fromGithub') {
        return {
          fromGithub: obj[key] || false,
        }
      }
      return {
        [key]: obj[key] || '',
      }
    }),
  )
}

const AccountEditorStore = T.model('AccountEditorStore', {
  avatar: T.optional(T.string, ''),
  login: T.optional(T.string, ''),
  fromGithub: T.optional(T.boolean, false),
  nickname: T.optional(T.string, ''),
  shortbio: T.optional(T.string, ''),
  bio: T.optional(T.string, ''),
  sex: T.optional(T.string, SEX.DUDE),
  location: T.optional(T.string, ''),
  company: T.optional(T.string, ''),

  // social
  github: T.optional(T.string, ''),
  twitter: T.optional(T.string, ''),
  email: T.optional(T.string, ''),
  blog: T.optional(T.string, ''),

  publishing: T.optional(T.boolean, false),
  publishDone: T.optional(T.boolean, false),
})
  .views((self) => ({
    get editData(): TEditData {
      const profile = pick(
        ['avatar', 'nickname', 'shortbio', 'bio', 'sex', 'location', 'email'],
        self,
      )
      const social = pick(['github', 'twitter', 'company', 'blog'], self)

      return {
        profile,
        social,
      }
    },
    get viewingUser(): TUser {
      const root = getParent(self) as TRootStore
      return toJS(root.viewing.user)
    },
    get isReady(): boolean {
      return true
    },
    get submitState(): TSubmitState {
      const slf = self as TStore
      return pick(['publishing', 'publishDone', 'isReady'], slf)
    },
  }))
  .actions((self) => ({
    loadUser(user: TUser): void {
      const { social, ...rest } = user
      const slf = self as TStore

      slf.mark({ ...safeMap(social), ...safeMap(rest) })

      if (social.github && startsWith('https://github.com/', social.github)) {
        self.github = social.github.slice(19)
      }
    },
    updateAccount(): void {
      const slf = self as TStore
      const root = getParent(self) as TRootStore

      const user = {
        ...slf.editData.profile,
        social: slf.editData.social,
      }

      root.account.updateAccount(user)
      root.updateViewingIfNeed('user', user)
    },

    updateEditing(sobj): void {
      const slf = self as TStore
      slf.mark(sobj)
    },

    reset(): void {
      self.publishing = false
      self.publishDone = false
    },

    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof AccountEditorStore>
export default AccountEditorStore
