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
  themeSkins,
  dispatchEvent,
  EVENT,
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

  // threads
  PostsThreadStore,
  VideosThreadStore,
  ReposThreadStore,
  WikiThreadStore,
  JobsThreadStore,
  UsersThreadStore,
  CheatsheetThreadStore,
  // banners
  BannerStore,
  PostBannerStore,
  JobBannerStore,
  VideoBannerStore,
  RepoBannerStore,
  CommunityBannerStore,
  CommunitiesBannerStore,
  UserBannerStore,
  // content
  PostContentStore,
  JobContentStore,
  VideoContentStore,
  RepoContentStore,
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
  MailsViewerStore,

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
  InformerStore,
  GirlVerifierStore,
  CashierStore,
  // user page
  UserPublishedStore,
  UserPublishedCommentsStore,
  UserSettingsStore,
  UserBillingStore,
  UserFavoritedStore,
  UserStaredStore,
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
    jobBanner: t.optional(JobBannerStore, {}),
    videoBanner: t.optional(VideoBannerStore, {}),
    repoBanner: t.optional(RepoBannerStore, {}),
    communityBanner: t.optional(CommunityBannerStore, {}),
    communitiesBanner: t.optional(CommunitiesBannerStore, {}),
    userBanner: t.optional(UserBannerStore, {}),

    // content
    communitiesContent: t.optional(CommunitiesContentStore, {}),
    cheatSheatContent: t.optional(CheatSheetContentStore, {}),
    postContent: t.optional(PostContentStore, {}),
    jobContent: t.optional(JobContentStore, {}),
    videoContent: t.optional(VideoContentStore, {}),
    repoContent: t.optional(RepoContentStore, {}),
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
    informer: t.optional(InformerStore, {}),
    girlVerifier: t.optional(GirlVerifierStore, {}),
    cashier: t.optional(CashierStore, {}),

    // viewers (for preview usage)
    articleViwer: t.optional(ArticleViwerStore, {}),
    accountViewer: t.optional(AccountViewerStore, {}),
    videoViewer: t.optional(VideoViewerStore, {}),
    repoViewer: t.optional(RepoViewerStore, {}),
    mailsViewer: t.optional(MailsViewerStore, {}),
    // user page
    userPublished: t.optional(UserPublishedStore, {}),
    userPublishedComments: t.optional(UserPublishedCommentsStore, {}),
    userBilling: t.optional(UserBillingStore, {}),
    userSettings: t.optional(UserSettingsStore, {}),
    userStared: t.optional(UserStaredStore, {}),
    userFavorited: t.optional(UserFavoritedStore, {}),
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
      const themeData = themeSkins[self.theme.curTheme]
      const progressBarColor = toastBarColor(type, themeData)

      const toastOpt = R.merge(options, { progressBarColor })
      toast[type](toastOpt)
    },
    authWarning(options = {}) {
      const defaultOpt = {
        position: 'topCenter',
        title: '当前账号未登录',
        msg: '暂不支持匿名操作，请登录后再次尝试.',
      }

      if (options.hideToast && options.hideToast === true) {
        // pass
      } else {
        self.toast('warn', R.merge(defaultOpt, options))
      }

      dispatchEvent(EVENT.LOGIN_PANEL)
      return false
    },
    changesetErr(options) {
      self.toast('error', options)
    },
    callInformer() {
      self.informer.show()
    },
    callGirlVerifier() {
      self.girlVerifier.show()
    },
    updateC11N(options) {
      self.account.updateC11N(options)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default rootStore
