/*
 * rootStore store
 *
 */

import { types as T } from 'mobx-state-tree'
import { merge } from 'ramda'

import { EVENT } from '@/constant'
import {
  buildLog,
  markStates,
  toast,
  toastBarColor,
  themeSkins,
  send,
} from '@/utils'

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
  DiscoveryContentStore,
  CreateCommunityContentStore,
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
  UpgradePackagesStore,
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
  SubscribeContentStore,
  InterviewContentStore,
  RecipesContentStore,
  SponsorContentStore,
  JoinModalStore,
  TrendingContentStore,
  WorksContentStore,
  C11NSettingPanelStore,
  RoadmapThreadStore,
} from '../index'

/* eslint-disable-next-line */
const log = buildLog('S:rootStore')

const rootStore = T.model({
  // domain stores
  account: T.optional(AccountStore, {}),
  route: T.optional(RouteStore, {}),
  viewing: T.optional(ViewingStore, {}),
  comments: T.optional(CommentsStore, {}),
  theme: T.optional(ThemeStore, ThemeDefaults),
  locale: T.optional(T.enumeration('locale', ['zh', 'en']), 'zh'),
  errorCode: T.maybeNull(T.number),
  // domain end

  // toolbox
  sidebar: T.optional(SidebarStore, { menuItems: [] }),
  preview: T.optional(PreviewStore, { visible: false }),
  doraemon: T.optional(DoraemonStore, {}),
  jobEditor: T.optional(JobEditorStore, {}),
  postEditor: T.optional(PostEditorStore, {}),
  videoEditor: T.optional(VideoEditorStore, {}),
  repoEditor: T.optional(RepoEditorStore, {}),
  accountEditor: T.optional(AccountEditorStore, {}),
  upgradePackages: T.optional(UpgradePackagesStore, {}),
  mailBox: T.optional(MailBoxStore, {}),
  labeler: T.optional(LabelerStore, {}),
  docUploader: T.optional(DocUploaderStore, {}),
  avatarAdder: T.optional(AvatarAdderStore, {}),
  // toolbox end

  // layouts > xxx > papers
  // layouts
  globalLayout: T.optional(GlobalLayoutStore, {}),
  richEditor: T.optional(RichEditorStore, {}),
  header: T.optional(HeaderStore, {}),
  // layouts end

  errorBox: T.optional(ErrorBoxStore, {}),

  // banners
  articleBanner: T.optional(ArticleBannerStore, {}),
  communityBanner: T.optional(CommunityBannerStore, {}),
  userBanner: T.optional(UserBannerStore, {}),

  // content
  communityContent: T.optional(CommunityContentStore, {}),

  discoveryContent: T.optional(DiscoveryContentStore, {}),
  createCommunityContent: T.optional(CreateCommunityContentStore, {}),
  postContent: T.optional(PostContentStore, {}),
  jobContent: T.optional(JobContentStore, {}),
  videoContent: T.optional(VideoContentStore, {}),
  repoContent: T.optional(RepoContentStore, {}),
  userContent: T.optional(UserContentStore, {}),
  // content end

  // footer
  footer: T.optional(FooterStore, {}),
  // threads
  postsThread: T.optional(PostsThreadStore, {}),
  videosThread: T.optional(VideosThreadStore, {}),
  reposThread: T.optional(ReposThreadStore, {}),
  wikiThread: T.optional(WikiThreadStore, {}),
  jobsThread: T.optional(JobsThreadStore, {}),
  usersThread: T.optional(UsersThreadStore, {}),
  cheatsheetThread: T.optional(CheatsheetThreadStore, {}),

  tagsBar: T.optional(TagsBarStore, {}),
  userLister: T.optional(UserListerStore, {}),
  informer: T.optional(InformerStore, {}),
  girlVerifier: T.optional(GirlVerifierStore, {}),
  cashier: T.optional(CashierStore, {}),
  articleAuthorCard: T.optional(ArticleAuthorCardStore, {}),
  communitySetter: T.optional(CommunitySetterStore, {}),

  articleViewerHeader: T.optional(ArticleViewerHeader, {}),
  articleBodyHeader: T.optional(ArticleBodyHeaderStore, {}),
  // viewers (for preview usage)
  postViewer: T.optional(PostViewerStore, {}),
  jobViewer: T.optional(JobViewerStore, {}),
  videoViewer: T.optional(VideoViewerStore, {}),
  repoViewer: T.optional(RepoViewerStore, {}),
  mailsViewer: T.optional(MailsViewerStore, {}),
  accountViewer: T.optional(AccountViewerStore, {}),

  // user page
  userPublished: T.optional(UserPublishedStore, {}),
  userPublishedComments: T.optional(UserPublishedCommentsStore, {}),
  userBilling: T.optional(UserBillingStore, {}),
  userSettings: T.optional(UserSettingsStore, {}),
  userStared: T.optional(UserStaredStore, {}),
  userFavorited: T.optional(UserFavoritedStore, {}),
  favoritesCats: T.optional(FavoritesCatsStore, {}),

  // have a drink
  meetupsContent: T.optional(MeetupsContentStore, {}),
  haveADrinkContent: T.optional(HaveADrinkContentStore, {}),
  coolGuideContent: T.optional(CoolGuideContentStore, {}),

  // GEN: PLUG SUBSTORE TO ROOTSTORE
  subscribeContent: T.optional(SubscribeContentStore, {}),
  interviewContent: T.optional(InterviewContentStore, {}),
  recipesContent: T.optional(RecipesContentStore, {}),
  sponsorContent: T.optional(SponsorContentStore, {}),
  joinModal: T.optional(JoinModalStore, {}),
  trendingContent: T.optional(TrendingContentStore, {}),
  worksContent: T.optional(WorksContentStore, {}),
  c11NSettingPanel: T.optional(C11NSettingPanelStore, {}),
  roadmapThread: T.optional(RoadmapThreadStore, {}),
})
  .views((self) => ({
    get isOnline() {
      return self.globalLayout.online
    },
    get media() {
      return self.globalLayout.media
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
  .actions((self) => ({
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
    setViewing(sobj) {
      self.viewing.setViewing(sobj)
    },
    updateViewingIfNeed(type, sobj) {
      self.viewing.updateViewingIfNeed(type, sobj)
    },
    upgradeHepler() {
      self.upgradePackages.upgradeHepler()
    },
    sponsorHepler() {
      self.footer.sponsorHepler()
    },
    cashierHelper(opt) {
      self.upgradePackages.close()
      self.footer.closeSponsor()
      self.cashier.callCashier(opt)
    },
    toast(type, options = {}) {
      const themeData = themeSkins[self.theme.curTheme]
      const progressBarColor = toastBarColor(type, themeData)

      const toastOpt = merge(options, { progressBarColor })
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
        self.toast('warn', merge(defaultOpt, options))
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
