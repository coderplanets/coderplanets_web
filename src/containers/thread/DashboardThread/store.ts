/*
 * DashboardThread store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { keys, values, pick } from 'ramda'

import type { TCommunity, TRootStore } from '@/spec'
import {
  BANNER_LAYOUT,
  CHANGELOG_LAYOUT,
  POST_LAYOUT,
  COLORS,
} from '@/constant'
import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'

import type { TUiSettings } from './spec'

import { TAB } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:DashboardThread')

const DashboardThread = T.model('DashboardThread', {
  curTab: T.optional(T.enumeration(values(TAB)), TAB.UI),
  primaryColor: T.optional(T.enumeration(keys(COLORS)), 'BLACK'),
  postLayout: T.optional(
    T.enumeration(values(POST_LAYOUT)),
    POST_LAYOUT.UPVOTE_FIRST,
  ),
  bannerLayout: T.optional(
    T.enumeration(values(BANNER_LAYOUT)),
    BANNER_LAYOUT.HEADER,
  ),
  changelogLayout: T.optional(
    T.enumeration(values(CHANGELOG_LAYOUT)),
    CHANGELOG_LAYOUT.FOLD,
  ),
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },
    get uiSettings(): TUiSettings {
      const slf = self as TStore
      const root = getParent(self) as TRootStore

      const {
        wallpaperEditor: { wallpapers, wallpaper },
      } = root

      return {
        wallpaper: wallpapers[wallpaper],
        ...pick(
          ['primaryColor', 'bannerLayout', 'postLayout', 'changelogLayout'],
          slf,
        ),
      }
    },
  }))
  .actions((self) => ({
    updateEditing(sobj): void {
      const slf = self as TStore
      slf.mark(sobj)
    },
    mark(sobj: Record<string, unknown>): void {
      markStates(sobj, self)
    },
  }))

export type TStore = Instance<typeof DashboardThread>

export default DashboardThread
