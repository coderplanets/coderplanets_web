/*
 * DashboardThread store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { keys, values, pick, findIndex, clone } from 'ramda'

import type { TCommunity, TRootStore, TTag } from '@/spec'
import { mockTags } from '@/utils/mock'

import {
  BANNER_LAYOUT,
  CHANGELOG_LAYOUT,
  POST_LAYOUT,
  COLORS,
} from '@/constant'
import { buildLog } from '@/utils/logger'
import { markStates, toJS } from '@/utils/mobx'
import { Tag } from '@/model'

import type { TUiSettings, TTagSettings, TTouched, TSettingField } from './spec'

import { TAB, SETTING_FIELD } from './constant'

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
  tags: T.optional(T.array(Tag), mockTags(12)),
}

const InitSettings = T.model('DashboardInit', settingsModalFields)

const DashboardThread = T.model('DashboardThread', {
  curTab: T.optional(T.enumeration(values(TAB)), TAB.UI),
  editingTag: T.maybeNull(Tag),
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

      const { initSettings } = slf

      const primaryColorTouched = slf.primaryColor !== initSettings.primaryColor
      const bannerLayoutTouched = slf.bannerLayout !== initSettings.bannerLayout
      const postLayoutTouched = slf.postLayout !== initSettings.postLayout
      const changelogLayoutTouched =
        slf.changelogLayout !== initSettings.changelogLayout

      return {
        primaryColor: primaryColorTouched,
        bannerLayout: bannerLayoutTouched,
        postLayout: postLayoutTouched,
        changelogLayout: changelogLayoutTouched,

        // sidebar-item
        ui:
          primaryColorTouched ||
          bannerLayoutTouched ||
          postLayoutTouched ||
          changelogLayoutTouched,
      }
    },
    get tagSettings(): TTagSettings {
      const slf = self as TStore

      return {
        editingTag: toJS(slf.editingTag),
        tags: toJS(slf.tags),
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
    onSave(field: TSettingField): void {
      const slf = self as TStore

      if (field === SETTING_FIELD.TAG) {
        const { tags, editingTag } = slf
        const targetIdx = findIndex(
          (item: TTag) => item.id === editingTag.id,
          toJS(tags),
        )
        if (targetIdx < 0) return

        slf.tags[targetIdx] = clone(toJS(editingTag))
        slf.editingTag = null
      }
    },

    rollbackEdit(field: TSettingField): void {
      const slf = self as TStore

      if (field === SETTING_FIELD.TAG) {
        const { tags, editingTag } = slf
        const targetIdx = findIndex(
          (item: TTag) => item.id === editingTag.id,
          toJS(tags),
        )
        if (targetIdx < 0) return

        slf.tags[targetIdx] = toJS(slf.tags[targetIdx])
        slf.editingTag = null
        return
      }

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
