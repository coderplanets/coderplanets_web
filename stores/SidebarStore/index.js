/*
 * SidebarStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'
import { makeDebugger, markStates } from '../../utils'
import MenuItem from './MenuItemStore'

const menuItemConveter = R.compose(
  R.map(item => ({
    name: item.raw,
    target: {
      href: {
        pathname: '/',
        query: { main: R.toLower(item.raw), sub: R.toLower(item.raw) },
      },
      as: {
        pathname: `/${R.toLower(item.raw)}`,
      },
    },
  })),
  R.values
)

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:SidebarStore')
/* eslint-enable no-unused-vars */

const SidebarStore = t
  .model('SidebarStore', {
    menuItems: t.optional(t.array(MenuItem), []), // complex data
    // open: t.optional(t.boolean, false),
    pin: t.optional(t.boolean, false),
    windowBlured: t.optional(t.boolean, false),
    // theme: t.string, // view staff
    // curSelectItem: t.string, // view staff
    // searchBox: t.string, // complex data
    // loading: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get theme() {
      return self.root.theme
    },
    get langs() {
      return self.root.langs
    },
    get menuItemsData() {
      return self.menuItems.toJSON()
    },
    get getLoading() {
      return self.loading
    },
    get langMessages() {
      return self.root.langMessages
    },
    get curPath() {
      return self.root.curPath
    },
  }))
  .actions(self => ({
    load() {
      const communities = self.root.communities.all
      self.menuItems = menuItemConveter(communities)
    },

    markState(sobj) {
      markStates(sobj, self)
    },
    changeTheme(name) {
      self.root.changeTheme(name)
    },
  }))

export default SidebarStore
