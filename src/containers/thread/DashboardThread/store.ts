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

import type { TUiSettings, TTouched, TSettingField } from './spec'

import { TAB } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:DashboardThread')

const settingsModalFields = {
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
}

const InitSettings = T.model('DashboardInit', settingsModalFields)

const DashboardThread = T.model('DashboardThread', {
  curTab: T.optional(T.enumeration(values(TAB)), TAB.UI),
  ...settingsModalFields,
  initSettings: T.optional(InitSettings, {}),
})
  .views((self) => ({
    get curCommunity(): TCommunity {
      const root = getParent(self) as TRootStore

      return toJS(root.viewing.community)
    },

    get touched(): TTouched {
      const slf = self as TStore

      return {
        primaryColor: slf.primaryColor !== slf.initSettings.primaryColor,
        bannerLayout: slf.bannerLayout !== slf.initSettings.bannerLayout,
        postLayout: slf.postLayout !== slf.initSettings.postLayout,
        changelogLayout:
          slf.changelogLayout !== slf.initSettings.changelogLayout,
      }
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
    rollbackEdit(field: TSettingField): void {
      const slf = self as TStore
      const initValue = slf.initSettings[field]

      // @ts-ignore
      self[field] = initValue
    },

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
