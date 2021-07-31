/*
 * rootStore store

 * NOTE: this file is generate automatically, DO NOT modify
 * unless you're sure what you're doing
 *
 */

import { types as T, Instance } from 'mobx-state-tree'
import { merge, pickBy } from 'ramda'

import type { TViewing, TAccount, TRoute, TArticle } from '@/spec'

import { EVENT } from '@/constant'

import { markStates } from '@/utils/mobx'
import { toast, toastBarColor } from '@/utils/toast'
import { themeSkins } from '@/utils/themes'
import { send } from '@/utils/helper'
import { notEmpty } from '@/utils/validator'

import RouteStore from '@/containers/Route/store'
import AccountStore from '../AccountStore'
import ViewingStore from '../ViewingStore'
import { ThemeStore, ThemeDefaults } from '../ThemeStore'
import GlobalLayoutStore from '@/containers/layout/GlobalLayout/store'

import RichEditorStore from '@/containers/editor/RichEditor/store'
import ErrorBoxStore from '@/containers/tool/ErrorBox/store'
import SidebarStore from '@/containers/unit/Sidebar/store'
import DrawerStore from '@/containers/tool/Drawer/store'
import DoraemonStore from '@/containers/tool/Doraemon/store'
import HeaderStore from '@/containers/unit/Header/store'
import MailBoxStore from '@/containers/tool/MailBox/store'
import AvatarAdderStore from '@/containers/tool/AvatarAdder/store'
import UserListerStore from '@/containers/user/UserLister/store'
import GirlVerifierStore from '@/containers/tool/GirlVerifier/store'
import CashierStore from '@/containers/tool/Cashier/store'

//

// pages banners store
import CommunityDigestStore from '@/containers/digest/CommunityDigest/store'

import ArticleDigestStore from '@/containers/digest/ArticleDigest/store'

// contents store
import CommunityContentStore from '@/containers/content/CommunityContent/store'

import DiscoveryContentStore from '@/containers/content/DiscoveryContent/store'
import UserContentStore from '@/containers/content/UserContent/store'

// footer
import FooterStore from '@/containers/unit/Footer/store'

// threads store
import ReposThreadStore from '@/containers/thread/ReposThread/store'
import UsersThreadStore from '@/containers/thread/UsersThread/store'
import RoadmapThreadStore from '@/containers/thread/RoadmapThread/store'

import TagsBarStore from '@/containers/unit/TagsBar/store'

// toolbox
import DocUploaderStore from '@/containers/tool/DocUploader/store'
import PostEditorStore from '@/containers/editor/PostEditor/store'
import RepoEditorStore from '@/containers/editor/RepoEditor/store'
import CommentsStore from '@/containers/unit/Comments/store'
import AccountEditorStore from '@/containers/editor/AccountEditor/store'
import CommunitySetterStore from '@/containers/tool/CommunitySetter/store'

// viewers store
import RepoViewerStore from '@/containers/viewer/RepoViewer/store'
import MailsViewerStore from '@/containers/viewer/MailsViewer/store'

import ArticleViewerHeader from '@/containers/unit/ArticleViewerHeader/store'
import ArticleBodyHeaderStore from '@/containers/unit/ArticleBodyHeader/store'

// activities page
import MeetupsContentStore from '@/containers/content/MeetupsContent/store'
// have a drink page
import HaveADrinkContentStore from '@/containers/content/HaveADrinkContent/store'
// cool guide page
import CoolGuideContentStore from '@/containers/content/CoolGuideContent/store'

// user page
import UserPublishedStore from '@/containers/user/UserPublished/store'
import UserPublishedCommentsStore from '@/containers/user/UserPublishedComments/store'
import UserStaredStore from '@/containers/user/UserStared/store'
import UserBillingStore from '@/containers/user/UserBilling/store'
import UserSettingsStore from '@/containers/user/UserSettings/store'
import UserFavoritedStore from '@/containers/user/UserFavorited/store'

// editor
import CommunityEditorStore from '@/containers/editor/CommunityEditor/store'
import WorksEditorStore from '@/containers/editor/WorksEditor/store'

// GEN: EXPORT CONTAINERS STORE HERE
import CollectionFolderStore from '@/containers/tool/CollectionFolder/store'
import ShareStore from '@/containers/tool/Share/store'
import ArticleContentStore from '@/containers/content/ArticleContent/store'
import ArticleViewerStore from '@/containers/viewer/ArticleViewer/store'
import ArticlesThreadStore from '@/containers/thread/ArticlesThread/store'
import ThreadSidebarStore from '@/containers/thread/ThreadSidebar/store'
import AbuseReportStore from '@/containers/tool/AbuseReport/store'
import HelpCenterContentStore from '@/containers/content/HelpCenterContent/store'
import CommunityJoinBadgeStore from '@/containers/tool/CommunityJoinBadge/store'
import ArticleEditorStore from '@/containers/editor/ArticleEditor/store'
import UserProfileStore from '@/containers/user/UserProfile/store'
import MembershipContentStore from '@/containers/content/MembershipContent/store'
import ArticleFooterStore from '@/containers/unit/ArticleFooter/store'
import ArticleStickerStore from '@/containers/tool/ArticleSticker/store'
import ModeLineMenuStore from '@/containers/unit/ModeLineMenu/store'
import ModeLineStore from '@/containers/unit/ModeLine/store'
import FriendsContentStore from '@/containers/content/FriendsContent/store'
import SubscribeContentStore from '@/containers/content/SubscribeContent/store'
import RecipesContentStore from '@/containers/content/RecipesContent/store'
import SponsorContentStore from '@/containers/content/SponsorContent/store'
import JoinModalStore from '@/containers/tool/JoinModal/store'
import TrendingContentStore from '@/containers/content/TrendingContent/store'
import WorksContentStore from '@/containers/content/WorksContent/store'
import C11NSettingPanelStore from '@/containers/tool/C11NSettingPanel/store'

const rootStore = T.model({
  // domain stores
  account: T.optional(AccountStore, {}),
  route: T.optional(RouteStore, {}),
  viewing: T.optional(ViewingStore, {}),
  comments: T.optional(CommentsStore, {}),
  theme: T.optional(ThemeStore, ThemeDefaults), // gzip + 14kb
  locale: T.optional(T.enumeration('locale', ['zh', 'en']), 'zh'),
  errorCode: T.maybeNull(T.number),
  sidebar: T.optional(SidebarStore, {}),
  drawer: T.optional(DrawerStore, { visible: false }), // gzip + 16kb
  // NOTE: 危险
  // doraemon: T.optional(DoraemonStore, {}),
  postEditor: T.optional(PostEditorStore, {}),
  repoEditor: T.optional(RepoEditorStore, {}),
  accountEditor: T.optional(AccountEditorStore, {}),
  mailBox: T.optional(MailBoxStore, {}),
  docUploader: T.optional(DocUploaderStore, {}),
  avatarAdder: T.optional(AvatarAdderStore, {}),
  globalLayout: T.optional(GlobalLayoutStore, {}),
  richEditor: T.optional(RichEditorStore, {}),
  header: T.optional(HeaderStore, {}),
  errorBox: T.optional(ErrorBoxStore, {}),
  articleDigest: T.optional(ArticleDigestStore, {}),
  communityDigest: T.optional(CommunityDigestStore, {}),
  communityContent: T.optional(CommunityContentStore, {}),
  discoveryContent: T.optional(DiscoveryContentStore, {}),
  // NOTE:  危险
  communityEditor: T.optional(CommunityEditorStore, {}),
  userContent: T.optional(UserContentStore, {}),
  footer: T.optional(FooterStore, {}),
  reposThread: T.optional(ReposThreadStore, {}),
  usersThread: T.optional(UsersThreadStore, {}),
  tagsBar: T.optional(TagsBarStore, {}),
  userLister: T.optional(UserListerStore, {}),
  girlVerifier: T.optional(GirlVerifierStore, {}),
  cashier: T.optional(CashierStore, {}),
  communitySetter: T.optional(CommunitySetterStore, {}),
  articleViewerHeader: T.optional(ArticleViewerHeader, {}),
  articleBodyHeader: T.optional(ArticleBodyHeaderStore, {}),
  // viewers (for drawer usage)
  repoViewer: T.optional(RepoViewerStore, {}),
  mailsViewer: T.optional(MailsViewerStore, {}),
  // user page
  userPublished: T.optional(UserPublishedStore, {}),
  userPublishedComments: T.optional(UserPublishedCommentsStore, {}),
  userBilling: T.optional(UserBillingStore, {}),
  userSettings: T.optional(UserSettingsStore, {}),
  userStared: T.optional(UserStaredStore, {}),
  userFavorited: T.optional(UserFavoritedStore, {}),
  // have a drink
  meetupsContent: T.optional(MeetupsContentStore, {}),
  haveADrinkContent: T.optional(HaveADrinkContentStore, {}),
  coolGuideContent: T.optional(CoolGuideContentStore, {}),
  // GEN: PLUG SUBSTORE TO ROOTSTORE
  collectionFolder: T.optional(CollectionFolderStore, {}),
  share: T.optional(ShareStore, {}),
  articleContent: T.optional(ArticleContentStore, {}),
  articleViewer: T.optional(ArticleViewerStore, {}),
  articlesThread: T.optional(ArticlesThreadStore, {}),
  threadSidebar: T.optional(ThreadSidebarStore, {}),
  abuseReport: T.optional(AbuseReportStore, {}),
  helpCenterContent: T.optional(HelpCenterContentStore, {}),
  communityJoinBadge: T.optional(CommunityJoinBadgeStore, {}),
  articleEditor: T.optional(ArticleEditorStore, {}),
  worksEditor: T.optional(WorksEditorStore, {}),
  userProfile: T.optional(UserProfileStore, {}),
  membershipContent: T.optional(MembershipContentStore, {}),
  articleFooter: T.optional(ArticleFooterStore, {}),
  articleSticker: T.optional(ArticleStickerStore, {}),
  modeLineMenu: T.optional(ModeLineMenuStore, {}),
  modeLine: T.optional(ModeLineStore, {}),
  friendsContent: T.optional(FriendsContentStore, {}),
  subscribeContent: T.optional(SubscribeContentStore, {}),
  recipesContent: T.optional(RecipesContentStore, {}),
  sponsorContent: T.optional(SponsorContentStore, {}),
  joinModal: T.optional(JoinModalStore, {}),
  trendingContent: T.optional(TrendingContentStore, {}),
  worksContent: T.optional(WorksContentStore, {}),
  c11NSettingPanel: T.optional(C11NSettingPanelStore, {}),
  roadmapThread: T.optional(RoadmapThreadStore, {}),
})
  .views((self) => ({}))
  .actions((self) => ({}))

/**
 *   NOTE: if use TRootStore in sub container, e.g:
 * get viewingArticle(): TArticle {
 *   const root = getParent(self) as TRootStore
 *   return stripMobx(root.viewingArticle)
 * },
 *
 * MAKE SURE get helper has a return TYPE, otherwise it
 * will cause  cyccle import error, which will cause type
 * completion fails
 *
 */
export type TRootStore = Instance<typeof rootStore>

export default rootStore
