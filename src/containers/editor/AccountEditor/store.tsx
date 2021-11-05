/*
 * AccountEditorStore store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { merge, pick } from 'ramda'

import type { TRootStore, TAccount, TSubmitState } from '@/spec'
import { markStates, toJS } from '@/utils/mobx'
import { User } from '@/model'

const AccountEditorStore = T.model('AccountEditorStore', {
  // user: T.optional(User, {}),
  editUser: T.optional(User, {}),

  updating: T.optional(T.boolean, false),

  publishing: T.optional(T.boolean, false),
  publishDone: T.optional(T.boolean, false),
})
  .views((self) => ({
    get editUserData(): TAccount {
      return {
        ...toJS(self.editUser),
      }
    },
    get accountOrigin(): TAccount {
      const root = getParent(self) as TRootStore
      return root.account.accountInfo
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
