/*
 * ThemeStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

import { makeDebugger, markStates, themeDict, defaultTheme } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:ThemeStore')
/* eslint-enable no-unused-vars */

export const ThemeDefaults = {
  curTheme: defaultTheme,
}

export const ThemeStore = t
  .model('ThemeStore', {
    curTheme: t.optional(
      t.enumeration('theme', R.keys(themeDict)),
      defaultTheme
    ),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get themeData() {
      return themeDict[self.curTheme]
    },
    get themeKeys() {
      return R.keys(themeDict)
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
