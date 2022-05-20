/*
 * WallpaperEditor store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { keys, clone, forEach } from 'ramda'

import { GRADIENT_WALLPAPER, PATTERN_WALLPAPER } from '@/constant'
import type {
  TCommunity,
  TRootStore,
  TWallpaper,
  TWallpaperType,
  TWallpaperGradient,
  TWallpaperPic,
} from '@/spec'
import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'
import { getWallpaperType } from '@/utils/wallpaper'

/* eslint-disable-next-line */
const log = buildLog('S:WallpaperEditor')

const WallpaperEditor = T.model('WallpaperEditor', {
  wallpaper: T.optional(T.string, 'green'),

  // for gradient colors
  hasPattern: T.optional(T.boolean, true),
  hasBlur: T.optional(T.boolean, false),
  direction: T.optional(T.string, 'to bottom'),
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },

    get patternWallpapers(): Record<string, TWallpaper> {
      const slf = self as TStore
      const wallpapers = clone(PATTERN_WALLPAPER)
      const paperKeys = keys(PATTERN_WALLPAPER)

      forEach((key) => {
        const wallpaperObj = wallpapers[key] as TWallpaperPic
        wallpaperObj.hasBlur = slf.hasBlur
      }, paperKeys)

      return wallpapers
    },

    get gradientWallpapers(): Record<string, TWallpaper> {
      const slf = self as TStore
      const wallpapers = clone(GRADIENT_WALLPAPER)
      const paperKeys = keys(GRADIENT_WALLPAPER)

      forEach((key) => {
        const wallpaperObj = wallpapers[key] as TWallpaperGradient

        wallpaperObj.hasPattern = slf.hasPattern
        wallpaperObj.hasBlur = slf.hasBlur
      }, paperKeys)

      return wallpapers
    },

    get wallpapers(): Record<string, TWallpaper> {
      const slf = self as TStore

      return {
        ...slf.gradientWallpapers,
        ...slf.patternWallpapers,
      }
    },
    get wallpaperType(): TWallpaperType {
      const slf = self as TStore
      return getWallpaperType(slf.wallpaper)
    },
  }))
  .actions((self) => ({
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof WallpaperEditor>

export default WallpaperEditor
