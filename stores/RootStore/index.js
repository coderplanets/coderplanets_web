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
  HeaderStore,
  BannerStore,
  ContentStore,
  SubscribedCommunitiesStore,
  // papers
  PostsPaperStore,
  CommunitiesContentStore,
  CheatSheetContentStore,
  // viewers
  ArticleViwerStore,
  AccountViewerStore,
  TypeWriterStore,
  CommentsStore,
  TutsViewerStore,
  MapViewerStore,
  JobsViewerStore,
  CheatSheetPaperStore,
} from '../storeIndex'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:rootStore')
/* eslint-enable no-unused-vars */

const rootStore = t
  .model({
    // domain stores
    version: t.optional(t.string, '0.0.4'),
    account: t.optional(AccountStore, {}),
    route: t.optional(RouteStore, {}),
    communities: t.optional(CommunitiesStore, CommunitiesDefaults),
    subscribedCommunities: t.optional(SubscribedCommunitiesStore, {}),
    posts: t.optional(PostsStore, {}),
    comments: t.optional(CommentsStore, {}),
    theme: t.optional(ThemeStore, ThemeDefaults),
    appLocale: t.optional(t.enumeration('locale', ['zh', 'en']), 'zh'),
    appLangs: t.map(t.frozen),
    // domain end

    // toolbox
    sidebar: t.optional(SidebarStore, { menuItems: [] }),
    preview: t.optional(PreviewStore, { visible: false }),
    doraemon: t.optional(DoraemonStore, {}),
    typeWriter: t.optional(TypeWriterStore, {}),
    // toolbox end

    // layouts > xxx > papers
    // layouts
    bodylayout: t.optional(BodylayoutStore, {}),
    apiLayout: t.optional(ApiLayoutStore, {}),
    header: t.optional(HeaderStore, {}),
    banner: t.optional(BannerStore, {}),
    content: t.optional(ContentStore, {}),
    // layouts end

    // content
    communitiesContent: t.optional(CommunitiesContentStore, {}),
    cheatSheatContent: t.optional(CheatSheetContentStore, {}),
    // content end

    // papers
    postsPaper: t.optional(PostsPaperStore, {}),
    cheatSheetPaper: t.optional(CheatSheetPaperStore, {}),

    // viewers (for preview usage)
    articleViwer: t.optional(ArticleViwerStore, {}),
    accountViewer: t.optional(AccountViewerStore, {}),

    // TODO rename to xxPaper
    tutsViewer: t.optional(TutsViewerStore, {}),
    mapViewer: t.optional(MapViewerStore, {}),
    jobsViewer: t.optional(JobsViewerStore, {}),
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
