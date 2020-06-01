/*
 * ThemeStore store
 *
 */

import { types as T, getParent } from 'mobx-state-tree'
import { keys, merge } from 'ramda'

import { DEFAULT_THEME } from '@/config'
import { buildLog, markStates, themeSkins } from '@/utils'

/* eslint-disable-next-line */
const log = buildLog('S:ThemeStore')

export const ThemeDefaults = {
  curTheme: DEFAULT_THEME,
}

export const ThemeStore = T.model('ThemeStore', {
  curTheme: T.optional(T.enumeration('theme', keys(themeSkins)), DEFAULT_THEME),
})
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get themeData() {
      return themeSkins[self.curTheme]
    },
  }))
  .actions(self => ({
    isMemberOf(type) {
      return self.root.isMemberOf(type)
    },
    checkSetable() {
      if (
        self.isMemberOf('seniorMember') ||
        self.isMemberOf('sponsorMember') ||
        self.isMemberOf('donateMember')
      ) {
        return false
      }

      const options = {
        title: '保存主题设置失败',
        msg: '仅支持高级会员以打赏用户',
      }
      self.root.toast('warn', merge({ position: 'topCenter' }, options))
    },
    changeTheme(name) {
      self.curTheme = name
      // self.checkSetable()
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))
