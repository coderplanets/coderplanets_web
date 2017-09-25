/*
 * AppStore store
 *
 */

import { types as t } from 'mobx-state-tree'
import { makeDebugger } from '../../utils/debug'
import { globalThemes, themeNames } from '../../utils/themes'

import SidebarStore from '../SidebarStore'
import BodyStore from '../BodyStore'
import GithubEampleStore from '../GithubEampleStore'

const debug = makeDebugger('S:AppStore')

const AppStore = t
  .model({
    sidebar: t.optional(SidebarStore, { menuItems: [] }),
    // header: t...,
    // banner: t...,
    body: t.optional(BodyStore, {}),
    github: t.optional(GithubEampleStore, {}),
    /* account: t..., */
    appTheme: t.optional(t.enumeration('theme', themeNames), 'default'),
    appLocale: t.optional(t.enumeration('locale', ['zh', 'en']), 'zh'),
    appLangs: t.map(t.frozen),
  })
  .views(self => ({
    get version() {
      return '0.0.1'
    },
    get theme() {
      return globalThemes[self.appTheme]
    },
    get themeName() {
      return self.appTheme
    },
    get locale() {
      return self.appLocale
    },
    get langs() {
      return self.appLangs
    },
    get langMessages() {
      // TODO: try - catch
      // console.log('self.locale: ', self.locale)
      // console.log('self.langs.toJSON: ', self.langs.toJSON())
      // return self.langs.toJSON()[self.appLocale]
      return self.langs.get(self.locale)
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
    changeLocale(locale) {
      self.appLocale = locale
    },
    setLangMessages(key, val) {
      // console.log('cur self.appLangs: ', self.appLangs.toJSON())
      // self.appLangs.set({ en: { fic: 2 } })
      self.appLangs.set(key, val)
    },
    isLocaleExist(locale) {
      return !!self.langs.get(locale)
    },
  }))

export default AppStore
