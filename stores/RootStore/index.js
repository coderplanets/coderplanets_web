/*
 * rootStore store
 *
 */

import { types as t } from 'mobx-state-tree'
import R from 'ramda'

import {
  makeDebugger,
  markStates,
  toast,
  toastBarColor,
  themeDict,
} from '../../utils'

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
  UserBannerStore,

  // threads
  PostsThreadStore,
  VideosThreadStore,
  ReposThreadStore,
  WikiThreadStore,
  JobsThreadStore,
  UsersThreadStore,
  CheatsheetThreadStore,
  // content
  PostContentStore,
  CommunitiesContentStore,
  CheatSheetContentStore,
  UserContentStore,
  // footer
  FooterStore,
  // viewers
  ArticleViwerStore,
  AccountViewerStore,
  VideoViewerStore,
  RepoViewerStore,
  CommentsStore,

  // toolbox
  DoraemonStore,
  PreviewStore,
  SidebarStore,
  TypeWriterStore,
  VideoEditorStore,
  RepoEditorStore,
  AccountEditorStore,
  UpgradePackgesStore,
  MailBoxStore,
  LabelerStore,
  DocUploaderStore,
  AvatarAdderStore,
  TagsBarStore,
  UserListerStore,
  // user page
  UserPublishedStore,
  UserSettingsStore,
  UserFavoritesStore,
  FavoritesCatsStore,
} from '../index'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:rootStore')
/* eslint-enable no-unused-vars */

const rootStore = t
  .model({
    // domain stores
    account: t.optional(AccountStore, {}),
    users: t.maybeNull(UsersStore),
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
    videoEditor: t.optional(VideoEditorStore, {}),
    repoEditor: t.optional(RepoEditorStore, {}),
    accountEditor: t.optional(AccountEditorStore, {}),
    upgradePackges: t.optional(UpgradePackgesStore, {}),
    mailBox: t.optional(MailBoxStore, {}),
    labeler: t.optional(LabelerStore, {}),
    docUploader: t.optional(DocUploaderStore, {}),
    avatarAdder: t.optional(AvatarAdderStore, {}),
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
    userBanner: t.optional(UserBannerStore, {}),

    // content
    communitiesContent: t.optional(CommunitiesContentStore, {}),
    cheatSheatContent: t.optional(CheatSheetContentStore, {}),
    postContent: t.optional(PostContentStore, {}),
    userContent: t.optional(UserContentStore, {}),
    // content end

    // footer
    footer: t.optional(FooterStore, {}),
    // threads
    postsThread: t.optional(PostsThreadStore, {}),
    videosThread: t.optional(VideosThreadStore, {}),
    reposThread: t.optional(ReposThreadStore, {}),
    wikiThread: t.optional(WikiThreadStore, {}),
    jobsThread: t.optional(JobsThreadStore, {}),
    usersThread: t.optional(UsersThreadStore, {}),
    cheatsheetThread: t.optional(CheatsheetThreadStore, {}),

    tagsBar: t.optional(TagsBarStore, {}),
    userLister: t.optional(UserListerStore, {}),

    // viewers (for preview usage)
    articleViwer: t.optional(ArticleViwerStore, {}),
    accountViewer: t.optional(AccountViewerStore, {}),
    videoViewer: t.optional(VideoViewerStore, {}),
    repoViewer: t.optional(RepoViewerStore, {}),
    // user page
    userPublished: t.optional(UserPublishedStore, {}),
    userSettings: t.optional(UserSettingsStore, {}),
    userFavorites: t.optional(UserFavoritesStore, {}),
    favoritesCats: t.optional(FavoritesCatsStore, {}),
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
    get viewingData() {
      return self.viewing.viewingData
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
    updateViewingIfNeed(type, sobj) {
      self.viewing.updateViewingIfNeed(type, sobj)
    },
    upgradeHepler() {
      self.upgradePackges.upgradeHepler()
    },
    sponsorHepler() {
      self.footer.sponsorHepler()
    },
    toast(type, options = {}) {
      const themeData = themeDict[self.theme.curTheme]
      const progressBarColor = toastBarColor(type, themeData)

      const toastOpt = R.merge(options, { progressBarColor })
      toast[type](toastOpt)
    },
    changesetErr(options) {
      self.toast('error', options)
    },
    authWarning(options = {}) {
      const defaultOpt = { title: '未登录', msg: '需要登录后才能进行该操作' }
      self.toast('warn', R.merge(defaultOpt, options))
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default rootStore
