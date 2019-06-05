/*
 * SidebarStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
import R from 'ramda'
import { makelogger, markStates, stripMobx, sortByIndex } from '@utils'
/* import MenuItem from './MenuItemStore' */

/* eslint-disable-next-line */
const log = makelogger('S:SidebarStore')

const SidebarStore = t
  .model('SidebarStore', {
    // open: t.optional(t.boolean, false),
    pin: t.optional(t.boolean, false),

    /*
       this is a fix for wired svg icon in sidebar
       when community icon is svg format, the svg loader only do it:s work
       on client-side, which will case MenuBar UI choas

       manulay force mobx rerender will tmp fix this, heck later
     */
    forceRerender: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
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
    get communitiesData() {
      const { subscribedCommunities } = self.root.account
      return subscribedCommunities
        ? sortByIndex(subscribedCommunities.entries)
        : []
    },
  }))
  .actions(self => ({
    authWarning(options) {
      self.root.authWarning(options)
    },
    markRoute(query) {
      self.root.markRoute(query)
    },
    // load Subscribed communities
    loadCommunities(data) {
      self.root.account.loadSubscribedCommunities(data)
    },
    onSortCommunities(entries) {
      const data = R.merge(self.root.account.subscribedCommunities, { entries })
      self.loadCommunities(data)
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default SidebarStore
