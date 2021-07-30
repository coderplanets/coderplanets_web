/*
 * GlobalLayout store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import type { TRootStore, TAccount, TC11N } from '@/spec'
import { markStates, buildLog } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:GlobalLayoutStore')

const Platform = T.model('Platform', {
  isChrome: T.optional(T.boolean, true),
  isFirefox: T.optional(T.boolean, false),
  isSafari: T.optional(T.boolean, false),
  isIE: T.optional(T.boolean, false),
  isEdge: T.optional(T.boolean, false),
})

const GlobalLayout = T.model('GlobalLayoutStore', {
  online: T.optional(T.boolean, true),
  platform: T.optional(Platform, {}),
  isMobile: T.optional(T.boolean, false),
  // follow the mac convention
  bodyScrollDirection: T.optional(T.enumeration(['up', 'down']), 'up'),
})
  .views((self) => ({
    get accountInfo(): TAccount {
      const root = getParent(self) as TRootStore
      return root.accountInfo
    },
    get c11n(): TC11N {
      const root = getParent(self) as TRootStore
      return root.account.c11n
    },
    get sidebarPin(): boolean {
      const root = getParent(self) as TRootStore
      return root.sidebar.pin
    },
  }))
  .actions((self) => ({
    openDoraemon(): void {
      const root = getParent(self) as TRootStore
      root.openDoraemon()
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof GlobalLayout>

export default GlobalLayout
