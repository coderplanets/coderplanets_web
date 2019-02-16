/*
 * ThemeStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { DEFAULT_THEME } from 'config'
import { makeDebugger, markStates, themeSkins } from 'utils'

/* eslint-disable-next-line */
const debug = makeDebugger('S:ThemeStore')

export const ThemeDefaults = {
  curTheme: DEFAULT_THEME,
}

export const ThemeStore = t
  .model('ThemeStore', {
    curTheme: t.optional(
      t.enumeration('theme', R.keys(themeSkins)),
      DEFAULT_THEME
    ),
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
      self.root.toast('warn', R.merge({ position: 'topCenter' }, options))
    },
    changeTheme(name) {
      self.curTheme = name
      // self.checkSetable()
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))
