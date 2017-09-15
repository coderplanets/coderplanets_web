/*
 * AppStore store
 *
 */

import { types as t } from 'mobx-state-tree'
import { makeDebugger } from '../../utils/debug'
import globalThemes from '../../utils/themes'

import SidebarStore from '../SidebarStore'
import BodyStore from '../BodyStore'

const debug = makeDebugger('S:AppStore')

const AppStore = t
  .model({
    sidebar: t.optional(SidebarStore, { allMenuItems: [] }),
    // header: t....,
    body: t.optional(BodyStore, {}),
    /* account: t..., */
    appTheme: t.optional(
      t.enumeration('theme', ['default', 'cyan', 'dark', 'dark_purple']),
      'default'
    ),
  })
  .views(self => ({
    get version() {
      return '0.0.1'
    },
    get theme() {
      return globalThemes[self.appTheme]
    },
  }))
  .actions(self => ({
    afterCreate() {
      debug('after create loadAllMenuItem')
      self.sidebar.loadAllMenuItem()
    },
    changeTheme(name) {
      self.appTheme = name
    },
  }))

export default AppStore
