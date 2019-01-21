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
    changeTheme(name) {
      self.curTheme = name
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))
