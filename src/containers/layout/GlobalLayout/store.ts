/*
 * GlobalLayout store
 *
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'

import type {
  TRootStore,
  TAccount,
  TC11N,
  TCommunity,
  TWallpaper,
  TGlobalLayout,
} from '@/spec'
import { markStates, toJS } from '@/utils/mobx'

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
      return root.account.accountInfo
    },
    get c11n(): TC11N {
      const root = getParent(self) as TRootStore
      return root.account.c11n
    },
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },
    get sidebarPin(): boolean {
      // const root = getParent(self) as TRootStore
      // return root.sidebar.pin
      return false
    },
    get wallpaper(): string {
      const root = getParent(self) as TRootStore
      return root.wallpaperEditor.wallpaper
    },
    get wallpapers(): Record<string, TWallpaper> {
      const root = getParent(self) as TRootStore
      return root.wallpaperEditor.wallpapers
    },
    get globalLayout(): TGlobalLayout {
      const root = getParent(self) as TRootStore
      return root.dashboardThread.globalLayout
    },
  }))
  .actions((self) => ({
    toast(type, options): void {
      const root = getParent(self) as TRootStore
      root.toast(type, options)
    },
    authWarning(options): void {
      const root = getParent(self) as TRootStore
      root.authWarning(options)
    },
    openDoraemon(): void {
      const root = getParent(self) as TRootStore
      root.openDoraemon()
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof GlobalLayout>

export default GlobalLayout
