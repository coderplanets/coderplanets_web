/*
 * Footer2 store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import type { TRootStore, TAccount } from '@/spec'
import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:FooterStore')

const FooterStore = T.model('FooterStore', {
  showSponsor: T.optional(T.boolean, false),
})
  .views((self) => ({
    get isLogin(): boolean {
      const root = getParent(self) as TRootStore
      return root.account.isLogin
    },
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.accountInfo
    },
  }))
  .actions((self) => ({
    authWarning(options?: Record<string, unknown>): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    cashierHelper(opt): void {
      const root = getParent(self) as TRootStore
      root.cashierHelper(opt)
    },
    sponsorHepler(): void {
      self.showSponsor = true
    },
    closeSponsor(): void {
      self.showSponsor = false
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof FooterStore>
export default FooterStore
