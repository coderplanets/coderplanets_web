/*
 * DashboardThread store
 */

import { types as T, getParent, Instance } from 'mobx-state-tree'
import { keys, values, pick, findIndex, clone } from 'ramda'

import type { TCommunity, TRootStore, TTag, TGlobalLayout } from '@/spec'
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

import type {
  TUiSettings,
  TTagSettings,
  TAliasSettings,
  TTouched,
  TSettingField,
  TAlias,
} from './spec'

import { TAB, SETTING_FIELD, BUILDIN_ALIAS } from './constant'

/* eslint-disable-next-line */
const log = buildLog('S:DashboardThread')

const Alias = T.model('Alias', {
  raw: T.optional(T.string, ''),
  name: T.optional(T.string, ''),
  original: T.optional(T.string, ''),
  suggestions: T.optional(T.array(T.string), []),
})

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
  alias: T.optional(T.array(Alias), BUILDIN_ALIAS),
}

const InitSettings = T.model('DashboardInit', settingsModalFields)

const DashboardThread = T.model('DashboardThread', {
  saving: T.optional(T.boolean, false),
  curTab: T.optional(T.enumeration(values(TAB)), TAB.UI),
  editingTag: T.maybeNull(Tag),
  editingAlias: T.maybeNull(Alias),
  ...settingsModalFields,
  initSettings: T.optional(InitSettings, {}),
})
  .views((self) => ({
    get globalLayout(): TGlobalLayout {
      const slf = self as TStore
      const { initSettings } = slf
      const { primaryColor, changelogLayout, postLayout, bannerLayout } =
        initSettings

      return {
        primaryColor,
        post: postLayout,
        changelog: changelogLayout,
        banner: bannerLayout,
      }
    },
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
      const aliasTouched = slf.editingAlias !== null
      const tagsTouched = slf.editingTag !== null

      return {
        primaryColor: primaryColorTouched,
        bannerLayout: bannerLayoutTouched,
        postLayout: postLayoutTouched,
        changelogLayout: changelogLayoutTouched,
        alias: aliasTouched,
        tags: tagsTouched,

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
        saving: slf.saving,
      }
    },

    get aliasSettings(): TAliasSettings {
      const slf = self as TStore

      return {
        editingAlias: toJS(slf.editingAlias),
        alias: toJS(slf.alias),
        saving: slf.saving,
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
          [
            'saving',
            'primaryColor',
            'bannerLayout',
            'postLayout',
            'changelogLayout',
          ],
          slf,
        ),
      }
    },
  }))
  .actions((self) => ({
    onSave(field: TSettingField): void {
      const slf = self as TStore

      if (field === SETTING_FIELD.TAG) {
        const { editingTag } = slf
        const targetIdx = slf._findTagIdx()
        if (targetIdx < 0) return

        slf.tags[targetIdx] = clone(toJS(editingTag))
        slf.editingTag = null
      }

      if (field === SETTING_FIELD.ALIAS) {
        const { editingAlias } = slf

        const targetIdx = slf._findAliasIdx()
        if (targetIdx < 0) return

        slf.alias[targetIdx] = clone(toJS(editingAlias))
        slf.editingAlias = null
      }
    },

    rollbackEdit(field: TSettingField): void {
      const slf = self as TStore

      if (field === SETTING_FIELD.TAG) {
        const targetIdx = slf._findTagIdx()
        if (targetIdx < 0) return

        slf.tags[targetIdx] = toJS(slf.tags[targetIdx])
        slf.editingTag = null
        return
      }

      if (field === SETTING_FIELD.ALIAS) {
        const targetIdx = slf._findAliasIdx()
        if (targetIdx < 0) return

        slf.alias[targetIdx] = toJS(slf.alias[targetIdx])
        slf.editingAlias = null
        return
      }

      const initValue = slf.initSettings[field]

      // @ts-ignore
      self[field] = initValue
    },

    resetEdit(field: TSettingField): void {
      const slf = self as TStore

      if (field === SETTING_FIELD.ALIAS) {
        const targetIdx = slf._findAliasIdx()
        if (targetIdx < 0) return

        slf.alias[targetIdx] = {
          ...slf.alias[targetIdx],
          name: slf.alias[targetIdx].original,
        }
        slf.editingAlias = null
      }
    },

    _findTagIdx(): number {
      const slf = self as TStore

      const { tags, editingTag } = slf
      const targetIdx = findIndex(
        (item: TTag) => item.id === editingTag.id,
        toJS(tags),
      )
      return targetIdx
    },

    _findAliasIdx(): number {
      const slf = self as TStore

      const { alias, editingAlias } = slf
      const targetIdx = findIndex(
        (item: TAlias) => item.raw === editingAlias.raw,
        toJS(alias),
      )

      return targetIdx
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
