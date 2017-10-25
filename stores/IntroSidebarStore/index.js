/*
 * IntroSidebarStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import { makeDebugger, markStates } from '../../utils/functions'
import MenuItem from './MenuItemStore'
import fakeMenuItems from './fake_menu_items'

const debug = makeDebugger('S:IntroSidebarStore')

// TODO: test/include sidebarStore and MenuItem
const IntroSidebarStore = t
  .model('IntroSidebarStore', {
    menuItems: t.optional(t.array(MenuItem), []), // complex data
    open: t.optional(t.boolean, false),
    pin: t.optional(t.boolean, false),
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
    get langs() {
      return self.app.langs
    },
    get menuItemsData() {
      return self.menuItems.toJSON()
    },
    get getLoading() {
      return self.loading
    },
    get langMessages() {
      return self.app.langMessages
    },
  }))
  .actions(self => ({
    loadMenuItem() {
      debug('loadMenuItem ...')
      self.menuItems = fakeMenuItems
    },

    markLoading() {
      debug('markLoading: ', self.loading)
      self.loading = !self.loading
    },

    markState(sobj) {
      markStates(sobj, self)
    },

    addOne() {
      self.one += 1
    },
    changeTheme(name) {
      self.app.changeTheme(name)
    },
  }))

export default IntroSidebarStore
