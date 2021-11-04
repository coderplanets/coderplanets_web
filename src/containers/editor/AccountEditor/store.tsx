/*
 * AccountEditorStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { merge } from 'ramda'

import type { TRootStore, TAccount } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'
import { User } from '@/model'

const AccountEditorStore = T.model('AccountEditorStore', {
  // user: T.optional(User, {}),
  editUser: T.optional(User, {}),

  updating: T.optional(T.boolean, false),
  success: T.optional(T.boolean, false),
  error: T.optional(T.boolean, false),
  warn: T.optional(T.boolean, false),
  statusMsg: T.optional(T.string, ''),
})
  .views((self) => ({
    get statusClean(): boolean {
      const { success, error, warn } = self
      return !success && !error && !warn
    },
    get editUserData(): TAccount {
      return {
        ...toJS(self.editUser),
      }
    },
    get accountOrigin(): TAccount {
      const root = getParent(self) as TRootStore
      return root.account.accountInfo
    },
  }))
  .actions((self) => ({
    copyAccountInfo(): void {
      const root = getParent(self) as TRootStore
      const { accountInfo } = root.account

      if (accountInfo !== {}) {
        // @ts-ignore
        self.editUser = accountInfo
      }
    },

    updateAccount(user: TAccount): void {
      const root = getParent(self) as TRootStore

      root.account.updateAccount(user)
      root.updateViewingIfNeed('user', user)
    },

    updateEditing(sobj): void {
      const editUser = merge(self.editUser, { ...sobj })
      self.editUser = editUser
    },

    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof AccountEditorStore>
export default AccountEditorStore
