/*
 * rootStore store
 *
 */

import { types as t } from 'mobx-state-tree'
import { makeDebugger } from '../../utils/functions'

import SidebarStore from '../SidebarStore'
import BodyStore from '../BodyStore'
import GithubEampleStore from '../GithubEampleStore'
import DoraemonStore from '../DoraemonStore'
import DrawerStore from '../DrawerStore'
import { ThemeStore, ThemeDefaults } from '../ThemeStore'
import { CommunitiesStore, CommunitiesDefaults } from '../CommunitiesStore'

const debug = makeDebugger('S:rootStore')

const rootStore = t
  .model({
    // domain modal
    communities: t.optional(CommunitiesStore, CommunitiesDefaults),

    /* settings ?
        |- themes
        |- debug
        |- users
        |- jobs
     */

    // subscriptions: ...
    // mySubscriptions: ...
    // posts: ...
    // account: ...{ config } ..
    theme: t.optional(ThemeStore, ThemeDefaults),
    appLocale: t.optional(t.enumeration('locale', ['zh', 'en']), 'zh'),
    appLangs: t.map(t.frozen),
    // domain end

    sidebar: t.optional(SidebarStore, { menuItems: [] }),
    drawer: t.optional(DrawerStore, { visible: false }),
    body: t.optional(BodyStore, {}),
    github: t.optional(GithubEampleStore, {}),
    doraemon: t.optional(DoraemonStore, {}),
  })
  .views(self => ({
    get locale() {
      return self.appLocale
    },
    get langs() {
      return self.appLangs
    },
    get langMessages() {
      // TODO: try - catch
      // return self.langs.toJSON()[self.appLocale]
      return self.langs.get(self.locale)
    },
    get doraemonVisable() {
      return self.doraemon.doraemonVisable
    },
  }))
  .actions(self => ({
    afterCreate() {
      debug('after create loadMenuItem')
      self.sidebar.loadMenuItem()
      self.communities.load()
    },
    // TODO: rename to open
    showDoraemon() {
      // TODO: rename to self.doraemon.open()
      self.doraemon.showDoraemon()
    },

    openDrawer() {
      self.drawer.open()
    },

    changeTheme(name) {
      self.theme.changeTheme(name)
    },
    changeLocale(locale) {
      self.appLocale = locale
    },
    setLangMessages(key, val) {
      // self.appLangs.set({ en: { fic: 2 } })
      self.appLangs.set(key, val)
    },
    isLocaleExist(locale) {
      return !!self.langs.get(locale)
    },
  }))

export default rootStore
