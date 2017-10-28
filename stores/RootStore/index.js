/*
 * rootStore store
 *
 */

import { types as t } from 'mobx-state-tree'
import { makeDebugger } from '../../utils/functions'

import RouteStore from '../RouteStore'
import SidebarStore from '../SidebarStore'
import BodyStore from '../BodyStore'
import GithubEampleStore from '../GithubEampleStore'
import DoraemonStore from '../DoraemonStore'
import PreviewStore from '../PreviewStore'
import { ThemeStore, ThemeDefaults } from '../ThemeStore'
import { CommunitiesStore, CommunitiesDefaults } from '../CommunitiesStore'

const debug = makeDebugger('S:rootStore')

const rootStore = t
  .model({
    // domain modal
    route: t.optional(RouteStore, {}),
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
    preview: t.optional(PreviewStore, { visible: false }),
    body: t.optional(BodyStore, {}),
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
    get doraemonVisible() {
      // TODO self.doraemon.visible
      return self.doraemon.visible
    },
    get curUrlPath() {
      return self.route.curUrlPath
    },
  }))
  .actions(self => ({
    afterCreate() {
      debug('after create loadMenuItem')
      self.communities.load()
      self.sidebar.load()
    },
    openDoraemon() {
      self.doraemon.open()
    },
    openPreview(type) {
      self.preview.open(type)
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
