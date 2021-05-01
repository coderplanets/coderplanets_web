/*
 * UserContent store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { values } from 'ramda'

import type { TRootStore, TAccount, TUser } from '@/spec'
import { USER_THREAD } from '@/constant'
import { markStates, buildLog, stripMobx } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:UserContent')

const UserContent = T.model('UserContent', {
  activeThread: T.optional(
    T.enumeration('activeThread', values(USER_THREAD)),
    USER_THREAD.PROFILE,
  ),
  following: T.optional(T.boolean, false),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.account.accountInfo
    },
    get viewingUser(): TUser {
      const root = getParent(self) as TRootStore
      return stripMobx(root.viewing.user)
    },
    get isSelfViewing(): boolean {
      const root = getParent(self) as TRootStore
      return root.viewing.isSelfViewing
    },
  }))
  .actions((self) => ({
    authWarning(options) {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    updateViewingUser(user) {
      const root = getParent(self) as TRootStore
      root.viewing.updateViewingUser(user)
    },
    markRoute(query): void {
      const root = getParent(self) as TRootStore
      root.markRoute(query)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof UserContent>
export default UserContent
