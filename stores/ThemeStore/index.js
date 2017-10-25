/*
 * ThemeStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'

// import { makeDebugger } from '../../utils/functions'
import { markStates } from '../../utils/functions'
import { themeDict } from '../../utils/themes'

// const debug = makeDebugger('S:ThemeStore')

export const ThemeDefaults = {
  curTheme: 'default',
}

export const ThemeStore = t
  .model('ThemeStore', {
    curTheme: t.optional(t.enumeration('theme', R.keys(themeDict)), 'default'),
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
