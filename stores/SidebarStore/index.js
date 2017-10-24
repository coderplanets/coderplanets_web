/*
 * SidebarStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'
import { makeDebugger, isObject } from '../../utils/functions'
import MenuItem from './MenuItemStore'

const menuItemConveter = R.compose(
  R.map(item => ({
    name: item.raw,
    target: {
      href: {
        pathname: '/',
        query: { name: R.toLower(item.raw) },
      },
      as: {
        pathname: `/${R.toLower(item.raw)}`,
      },
    },
  })),
  R.values
)

const debug = makeDebugger('S:SidebarStore')

const SidebarStore = t
  .model('SidebarStore', {
    menuItems: t.optional(t.array(MenuItem), []), // complex data
    open: t.optional(t.boolean, false),
    pin: t.optional(t.boolean, false),
    // theme: t.string, // view staff
    // curSelectItem: t.string, // view staff
    // searchBox: t.string, // complex data
    //     loading: t.optional(t.boolean, false),
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
    load() {
      const communities = self.app.communities.all
      self.menuItems = menuItemConveter(communities)
    },

    markState(sobj) {
      if (!isObject(sobj)) {
        throw new Error('markState get no object params')
      }
      R.forEachObjIndexed((val, key) => {
        self[key] = val
      }, sobj)
    },
    changeTheme(name) {
      self.app.changeTheme(name)
    },
  }))

export default SidebarStore
