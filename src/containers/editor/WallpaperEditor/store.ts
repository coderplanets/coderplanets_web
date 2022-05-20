/*
 * WallpaperEditor store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
// import {} from 'ramda'

import { WALLPAPER, GRADIENT_WALLPAPER } from '@/constant'
import type { TCommunity, TRootStore, TWallpaper } from '@/spec'
import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'

/* eslint-disable-next-line */
const log = buildLog('S:WallpaperEditor')

const WallpaperEditor = T.model('WallpaperEditor', {
  wallpaper: T.optional(T.string, 'green'),

  // for gradient colors
  hasPattern: T.optional(T.boolean, false),
  hasBlur: T.optional(T.boolean, false),
  direction: T.optional(T.string, 'to bottom'),
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },

    get gradientWallpapers(): Record<string, TWallpaper> {
      return GRADIENT_WALLPAPER
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof WallpaperEditor>

export default WallpaperEditor
