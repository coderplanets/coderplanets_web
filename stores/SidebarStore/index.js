/*
 * SidebarStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'
import { makeDebugger, markStates } from '../../utils'
/* import MenuItem from './MenuItemStore' */

const menuItemConveter = R.compose(
  R.map(item => ({
    id: item.id,
    title: item.title,
    raw: item.raw,
    logo: item.logo,
    contributesDigest: item.contributesDigest,
    target: {
      href: {
        pathname: '/',
        query: {
          main: R.toLower(item.raw),
          sub: 'posts', // default to posts
        },
      },
      as: {
        // pathname: `/${R.toLower(item.raw)}/posts`,
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
    // open: t.optional(t.boolean, false),
    pin: t.optional(t.boolean, false),
    // theme: t.string, // view staff
    // curSelectItem: t.string, // view staff
    // searchBox: t.string, // complex data
    // loading: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get accountInfo() {
      return self.root.accountInfo
    },
    get isLogin() {
      return self.root.account.isLogin
    },
    get theme() {
      return self.root.theme
    },
    get langs() {
      return self.root.langs
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
    get subscribedCommunities() {
      const { entries } = self.root.account.subscribedCommunities
      return menuItemConveter(entries)
    },
  }))
  .actions(self => ({
    load() {
      // const communities = self.root.communities.all
    },
    loadCurCommunity(sobj) {
      self.root.curCommunity.load(sobj)
    },
    markRoute(query) {
      self.root.route.markRoute(query)
    },
    loadSubscribedCommunities(data) {
      self.root.account.loadSubscribedCommunities(data)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
    changeTheme(name) {
      self.root.changeTheme(name)
    },
  }))

export default SidebarStore
