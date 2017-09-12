/*
 * SidebarStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import { makeDebugger } from '../../utils/debug'

import MenuItem from './MenuItemStore'
import fakeMenuItems from './fake_menu_items'

const debug = makeDebugger('S:SidebarStore')

// TODO: test/include sidebarStore and MenuItem
const SidebarStore = t
  .model('SidebarStore', {
    allMenuItems: t.optional(t.array(MenuItem), []), // complex data
    // isPin: t.boolean, // should be in view
    // theme: t.string, // view staff
    // curSelectItem: t.string, // view staff
    // searchBox: t.string, // complex data
    loading: t.optional(t.boolean, false),
    one: t.optional(t.number, 1),
  })
  .views(self => ({
    get app() {
      return getParent(self)
    },

    get theme() {
      return self.app.theme
    },

    get curVersion() {
      return self.app.version
    },
    get menuItems() {
      return self.allMenuItems.toJSON()
    },
    get getLoading() {
      return self.loading
    },
  }))
  .actions(self => ({
    loadAllMenuItem() {
      debug('loadAllMenuItem ...')
      self.allMenuItems = fakeMenuItems
    },

    markLoading() {
      debug('markLoading: ', self.loading)
      self.loading = !self.loading
    },

    addOne() {
      self.one += 1
    },
    changeTheme(name) {
      self.app.changeTheme(name)
    },
  }))

export default SidebarStore
