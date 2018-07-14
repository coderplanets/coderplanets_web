/*
 * rootStore store
 *
 */

import { types as t } from 'mobx-state-tree'

import { makeDebugger, markStates } from '../../utils'

import {
  // domain
  RouteStore,
  UsersStore,
  AccountStore,
  BodylayoutStore,
  HeaderStore,
  ContentStore,
  ViewingStore,
  ThemeStore,
  ThemeDefaults,

  // banners
  BannerStore,
  PostBannerStore,
  CommunityBannerStore,
  CommunitiesBannerStore,

  // threads
  PostsThreadStore,
  VideosThreadStore,
  ReposThreadStore,
  JobsThreadStore,
  // content
  PostContentStore,
  CommunitiesContentStore,
  CheatSheetContentStore,
  // viewers
  ArticleViwerStore,
  AccountViewerStore,
  CommentsStore,
  TutsViewerStore,
  MapViewerStore,
  JobsViewerStore,
  CheatSheetPaperStore,
  CommunityEditorsStore,
  // toolbox
  DoraemonStore,
  PreviewStore,
  SidebarStore,
  TypeWriterStore,
  AccountEditorStore,
} from '../index'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:rootStore')
/* eslint-enable no-unused-vars */

const rootStore = t
  .model({
    // domain stores
    account: t.optional(AccountStore, {}),
    users: t.maybe(UsersStore),
    route: t.optional(RouteStore, {}),
    viewing: t.optional(ViewingStore, {}),
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
    accountEditor: t.optional(AccountEditorStore, {}),
    // toolbox end

    // layouts > xxx > papers
    // layouts
    bodylayout: t.optional(BodylayoutStore, {}),
    header: t.optional(HeaderStore, {}),
    content: t.optional(ContentStore, {}),
    // layouts end

    // banners
    banner: t.optional(BannerStore, {}),
    postBanner: t.optional(PostBannerStore, {}),
    communityBanner: t.optional(CommunityBannerStore, {}),
    communitiesBanner: t.optional(CommunitiesBannerStore, {}),

    // content
    communitiesContent: t.optional(CommunitiesContentStore, {}),
    cheatSheatContent: t.optional(CheatSheetContentStore, {}),
    postContent: t.optional(PostContentStore, {}),
    // content end

    // threads
    postsThread: t.optional(PostsThreadStore, {}),
    videosThread: t.optional(VideosThreadStore, {}),
    reposThread: t.optional(ReposThreadStore, {}),
    jobsThread: t.optional(JobsThreadStore, {}),
    cheatSheetPaper: t.optional(CheatSheetPaperStore, {}),

    // viewers (for preview usage)
    articleViwer: t.optional(ArticleViwerStore, {}),
    accountViewer: t.optional(AccountViewerStore, {}),
    communityEditors: t.optional(CommunityEditorsStore, {}),

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
    get curRoute() {
      return self.route.curRoute
    },
    get accountInfo() {
      return self.account.accountInfo
    },
  }))
  .actions(self => ({
    afterCreate() {
      // self.communities.load()
    },
    markRoute(query) {
      self.route.markRoute(query)
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
    setViewing(sobj) {
      self.viewing.setViewing(sobj)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default rootStore
