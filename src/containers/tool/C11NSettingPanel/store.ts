/*
 * C11NSettingPanel store
 *
 */

import { types as T, Instance, getParent } from 'mobx-state-tree'

import type { TRootStore, TThread, TAccount, TThemeName } from '@/spec'
import { markStates } from '@/utils/mobx'

const C11NSettingPanel = T.model('C11NSettingPanel', {
  activeTab: T.optional(
    T.enumeration('activeTab', ['general', 'theme']),
    'general',
  ),
})
  .views((self) => ({
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.account.accountInfo
    },
    get curThread(): TThread {
      const root = getParent(self) as TRootStore
      return root.viewing.activeThread
    },
    get curTheme(): TThemeName {
      const root = getParent(self) as TRootStore
      return root.theme.curTheme
    },
  }))
  .actions((self) => ({
    changeTheme(name: TThemeName): void {
      const root = getParent(self) as TRootStore
      root.changeTheme(name)
    },
    updateC11N(option): void {
      const root = getParent(self) as TRootStore
      root.updateC11N(option)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof C11NSettingPanel>
export default C11NSettingPanel
