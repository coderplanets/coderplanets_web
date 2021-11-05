/*
 * AccountEditorStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { reduce, keys, merge, pick } from 'ramda'

import type { TRootStore, TAccount, TSubmitState, TUser } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'

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
    get editData() {
      const basic = pick(
        ['avatar', 'nickname', 'shortbio', 'bio', 'sex', 'location'],
        self,
      )
      const social = pick(
        ['github', 'twitter', 'email', 'company', 'blog'],
        self,
      )

      return {
        ...basic,
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
    },
    updateAccount(user: TAccount): void {
      const root = getParent(self) as TRootStore

      root.account.updateAccount(user)
      root.updateViewingIfNeed('user', user)
    },

    updateEditing(sobj): void {
      const slf = self as TStore
      slf.mark(sobj)
    },

    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof AccountEditorStore>
export default AccountEditorStore
