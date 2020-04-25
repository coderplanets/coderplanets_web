/*
 * rootStore store
 *
 */

import { types as t } from 'mobx-state-tree'
import R from 'ramda'

import { EVENT } from '@constant'
import {
  buildLog,
  markStates,
  toast,
  toastBarColor,
  themeSkins,
  send,
} from '@utils'

import {
  // domain
  RouteStore,
  AccountStore,
  GlobalLayoutStore,
  RichEditorStore,
  HeaderStore,
  ViewingStore,
  ThemeStore,
  ThemeDefaults,
  ErrorBoxStore,

  // threads
  PostsThreadStore,
  VideosThreadStore,
  ReposThreadStore,
  WikiThreadStore,
  JobsThreadStore,
  UsersThreadStore,
  CheatsheetThreadStore,
  // banners
  ArticleBannerStore,
  CommunityBannerStore,
  UserBannerStore,
  // content
  CommunityContentStore,
  PostContentStore,
  JobContentStore,
  VideoContentStore,
  RepoContentStore,
  CommunitiesContentStore,
  NewCommunityContentStore,
  CheatSheetContentStore,
  UserContentStore,
  // footer
  FooterStore,
  // viewers
  PostViewerStore,
  JobViewerStore,
  ArticleViewerHeader,
  ArticleBodyHeaderStore,
  AccountViewerStore,
  VideoViewerStore,
  RepoViewerStore,
  CommentsStore,
  MailsViewerStore,

  // toolbox
  DoraemonStore,
  PreviewStore,
  SidebarStore,
  PostEditorStore,
  JobEditorStore,
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
  ArticleAuthorCardStore,
  CommunitySetterStore,
  // user page
  UserPublishedStore,
  UserPublishedCommentsStore,
  UserSettingsStore,
  UserBillingStore,
  UserFavoritedStore,
  UserStaredStore,
  FavoritesCatsStore,
  //
  MeetupsContentStore,
  HaveADrinkContentStore,
  CoolGuideContentStore,

  // GEN: IMPORT SUBSTORE
  SnippetsContentStore,
  SponsorContentStore,
  JoinModalStore,
  TrendingContentStore,
  WorksContentStore,
  C11NSettingPanelStore,
  RoadmapThreadStore,
} from '../index'

/* eslint-disable-next-line */
const log = buildLog('S:rootStore')

const rootStore = t
  .model({
    // domain stores
    account: t.optional(AccountStore, {}),
    route: t.optional(RouteStore, {}),
    viewing: t.optional(ViewingStore, {}),
    comments: t.optional(CommentsStore, {}),
    theme: t.optional(ThemeStore, ThemeDefaults),
    appLocale: t.optional(t.enumeration('locale', ['zh', 'en']), 'zh'),
    appLangs: t.map(t.frozen()),
    // domain end

    // toolbox
    sidebar: t.optional(SidebarStore, { menuItems: [] }),
    preview: t.optional(PreviewStore, { visible: false }),
    doraemon: t.optional(DoraemonStore, {}),
    jobEditor: t.optional(JobEditorStore, {}),
    postEditor: t.optional(PostEditorStore, {}),
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
    globalLayout: t.optional(GlobalLayoutStore, {}),
    richEditor: t.optional(RichEditorStore, {}),
    header: t.optional(HeaderStore, {}),
    // layouts end

    errorBox: t.optional(ErrorBoxStore, {}),

    // banners
    articleBanner: t.optional(ArticleBannerStore, {}),
    communityBanner: t.optional(CommunityBannerStore, {}),
    userBanner: t.optional(UserBannerStore, {}),

    // content
    communityContent: t.optional(CommunityContentStore, {}),

    communitiesContent: t.optional(CommunitiesContentStore, {}),
    newCommunityContent: t.optional(NewCommunityContentStore, {}),
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
    articleAuthorCard: t.optional(ArticleAuthorCardStore, {}),
    communitySetter: t.optional(CommunitySetterStore, {}),

    articleViewerHeader: t.optional(ArticleViewerHeader, {}),
    articleBodyHeader: t.optional(ArticleBodyHeaderStore, {}),
    // viewers (for preview usage)
    postViewer: t.optional(PostViewerStore, {}),
    jobViewer: t.optional(JobViewerStore, {}),
    videoViewer: t.optional(VideoViewerStore, {}),
    repoViewer: t.optional(RepoViewerStore, {}),
    mailsViewer: t.optional(MailsViewerStore, {}),
    accountViewer: t.optional(AccountViewerStore, {}),

    // user page
    userPublished: t.optional(UserPublishedStore, {}),
    userPublishedComments: t.optional(UserPublishedCommentsStore, {}),
    userBilling: t.optional(UserBillingStore, {}),
    userSettings: t.optional(UserSettingsStore, {}),
    userStared: t.optional(UserStaredStore, {}),
    userFavorited: t.optional(UserFavoritedStore, {}),
    favoritesCats: t.optional(FavoritesCatsStore, {}),

    // have a drink
    meetupsContent: t.optional(MeetupsContentStore, {}),
    haveADrinkContent: t.optional(HaveADrinkContentStore, {}),
    coolGuideContent: t.optional(CoolGuideContentStore, {}),

    // GEN: PLUG SUBSTORE TO ROOTSTORE
    snippetsContent: t.optional(SnippetsContentStore, {}),
    sponsorContent: t.optional(SponsorContentStore, {}),
    joinModal: t.optional(JoinModalStore, {}),
    trendingContent: t.optional(TrendingContentStore, {}),
    worksContent: t.optional(WorksContentStore, {}),
    c11NSettingPanel: t.optional(C11NSettingPanelStore, {}),
    roadmapThread: t.optional(RoadmapThreadStore, {}),
  })
  .views(self => ({
    get isOnline() {
      return self.globalLayout.online
    },
    get media() {
      return self.globalLayout.media
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
    markRoute(query, opt) {
      self.route.markRoute(query, opt)
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
    cashierHelper(opt) {
      self.upgradePackges.close()
      self.footer.closeSponsor()
      self.cashier.callCashier(opt)
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

      send(EVENT.LOGIN_PANEL)
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
    isMemberOf(type) {
      return self.account.isMemberOf(type)
    },
    mark(sobj) {
      markStates(sobj, self)
    },
  }))

export default rootStore
