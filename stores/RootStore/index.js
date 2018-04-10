/*
 * rootStore store
 *
 */

import { types as t } from 'mobx-state-tree'
import { makeDebugger } from '../../utils'

import RouteStore from '../RouteStore'

import { CommunitiesStore, CommunitiesDefaults } from '../CommunitiesStore'
import { ThemeStore, ThemeDefaults } from '../ThemeStore'

import {
  AccountStore,
  BodylayoutStore,
  PostsStore,
  ApiLayoutStore,
  SidebarStore,
  PreviewStore,
  DoraemonStore,
  GithubEampleStore,
  HeaderStore,
  BannerStore,
  ContentStore,
  ArticleViwerStore,
  AccountViewerStore,
  TypeWriterStore,
  CommentsStore,
  PostsPaperStore,
  TutsViewerStore,
  MapViewerStore,
  JobsViewerStore,
  CheatSheetViewerStore,
} from '../storeIndex'

const debug = makeDebugger('S:rootStore')

const rootStore = t
  .model({
    version: t.optional(t.string, '0.0.4'),
    // domain modal
    account: t.optional(AccountStore, {}),
    route: t.optional(RouteStore, {}),
    communities: t.optional(CommunitiesStore, CommunitiesDefaults),
    posts: t.optional(PostsStore, {}),
    // subscriptions: ...
    // mySubscriptions: ...
    // posts: ...
    theme: t.optional(ThemeStore, ThemeDefaults),
    appLocale: t.optional(t.enumeration('locale', ['zh', 'en']), 'zh'),
    appLangs: t.map(t.frozen),
    // domain end

    bodylayout: t.optional(BodylayoutStore, {}),
    apiLayout: t.optional(ApiLayoutStore, {}),
    header: t.optional(HeaderStore, {}),
    banner: t.optional(BannerStore, {}),
    content: t.optional(ContentStore, {}),
    sidebar: t.optional(SidebarStore, { menuItems: [] }),
    preview: t.optional(PreviewStore, { visible: false }),
    doraemon: t.optional(DoraemonStore, {}),
    github: t.optional(GithubEampleStore, {}),

    articleViwer: t.optional(ArticleViwerStore, {}),
    accountViewer: t.optional(AccountViewerStore, {}),
    typeWriter: t.optional(TypeWriterStore, {}),
    comments: t.optional(CommentsStore, {}),

    postsPaper: t.optional(PostsPaperStore, {}),
    tutsViewer: t.optional(TutsViewerStore, {}),
    mapViewer: t.optional(MapViewerStore, {}),
    jobsViewer: t.optional(JobsViewerStore, {}),
    cheatsheetViewer: t.optional(CheatSheetViewerStore, {}),
    /*
       cheatsheets ...
       posts ...
       videos ...
       jobs ...
       meetups ...
     */
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
    get doraemonVisible() {
      // TODO self.doraemon.visible
      return self.doraemon.visible
    },
    // TODO: remove it
    get curPath() {
      return self.route.curPath
    },
    // TODO: rename to routeInfo
    get curRoute() {
      return self.route.curRoute
    },
    get accountInfo() {
      return self.account.accountInfo
    },
  }))
  .actions(self => ({
    afterCreate() {
      debug('after create loadMenuItem')
      self.communities.load()
      self.sidebar.load()
      // self.posts.load()
    },

    updateAccount(sobj) {
      self.account.updateAccount(sobj)
    },
    setHeaderFix(fix) {
      self.header.setFix(fix)
    },
    openDoraemon() {
      self.doraemon.open()
    },
    openPreview(type) {
      self.preview.open(type)
    },
    closePreview() {
      self.preview.close()
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
