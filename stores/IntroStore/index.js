/*
 * IntroStore store
 *
 */

import { types as t } from 'mobx-state-tree'
import { makeDebugger } from '../../utils/functions'

import SidebarStore from '../IntroSidebarStore'
import IntroBodyStore from '../IntroBodyStore'
import GithubEampleStore from '../GithubEampleStore'
import DoraemonStore from '../DoraemonStore'
import DrawerStore from '../DrawerStore'
import { ThemeStore, ThemeDefaults } from '../ThemeStore'
import { CommunitiesStore, CommunitiesDefaults } from '../CommunitiesStore'

const debug = makeDebugger('S:IntroStore')

const IntroStore = t
  .model({
    // domain modal
    communities: t.optional(CommunitiesStore, CommunitiesDefaults),
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
    body: t.optional(IntroBodyStore, {}),
    github: t.optional(GithubEampleStore, {}),
    doraemon: t.optional(DoraemonStore, {}),
  })
  .views(self => ({
    get version() {
      return '0.0.1'
    },
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
    openDoraemon() {
      self.doraemon.open()
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

export default IntroStore
