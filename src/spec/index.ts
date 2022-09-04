/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import type { TRootStore as RootStoreType } from '@/stores/RootStore'

import type { TArticle } from './article'
import type { TCommunity } from './community'

export type { SnakeUpperCase } from './enhance'

export type { TMetric } from './metric'
export type {
  TSize,
  TSizeT,
  TSizeS,
  TSizeM,
  TSizeL,
  TSizeTS,
  TSizeTSM,
  TSizeSML,
  TSizeSM,
} from './size'
export type { TButton, TFiltersMenuItems } from './comp'
export type { TTheme, TThemeMap, TThemeName } from './theme'
export type {
  TAccount,
  TUser,
  TPagedUsers,
  TSimpleUser,
  TMembership,
  TC11N,
  TRSSAuthor,
} from './account'
export type { TC11NLayout } from './c11n'
export type {
  TCommunity,
  TCommunityThread,
  TPagedCommunities,
  TTag,
  TNaviTag,
  TFilterTag,
  TGroupedTags,
  TCategory,
} from './community'

export type { TThread, TArticleThread } from './thread'

export type {
  TID,
  TTestable,
  TActive,
  TSpace,
  TGAEvent,
  TSEO,
  TLink,
  TPlatform,
  Nullable,
  TDirection,
  TScrollDirection,
  TTooltipAnimation,
  TTooltipPlacement,
  TReportType,
  TAttInfo,
  TTabItem,
  TResState,
  TPaymentUsage,
  TPaymentMethod,
  TFlexRule,
  TGQError,
  TInput,
  TEditValue,
  TSubmitState,
  TSelectOption,
  TTechStackCategory,
  TCommunitySetterStyle,
  TToastType,
  TToastPos,
  TView,
  TUserActivity,
  TEditMode,
  TOnlineStatus,
  TModelineType,
  TTagMode,
  TMenuOption,
  TToastOption,
  TPublishMode,
  TDashboardLayout,
  TSocial,
} from './utils'

export type { TGQLError } from './graphql'

export type {
  TCollectionFolder,
  TPagedCollectionFolder,
  TDocument,
  TArticle,
  TArticleEntries,
  TArticleMeta,
  TPost,
  TBlog,
  TBlogRSS,
  TRadar,
  TJob,
  TWorks,
  TSocialInfo,
  TTechCommunities,
  TTechStack,
  TMeetup,
  TPagedWorks,
  TPagedMeetups,
  TPagedArticles,
  TComment,
  TPagedComments,
  TArticleFilter,
  TCopyright,
  TUpvoteLayout,
  TBrandLayout,
  TBannerLayout,
  TBannerNotifyLayout,
  TPostLayout,
  TChangelogLayout,
  TGlobalLayout,
  TCommentsState,
  TWorksTab,
  TBlogTab,
  TArticleCat,
  TArticleState,
} from './article'

export type {
  TGallery,
  TGalleryDefault,
  TGalleryList,
  TGalleryMasonryCollumn,
  TGalleryMainColumn,
  TGallery2Column,
  TGallery3Column,
  TGalleryTextOnly,
  TGalleryTextWithImage,
} from './gallery'

export type { TAccountStore, TViewingStore } from './store'

export type { TEmotion, TEmotionType } from './emotion'

export type {
  TWallpaperPic,
  TWallpaperGradient,
  TWallpaperFmt,
  TWallpaper,
  TWallpaperType,
} from './wallpaper'

export type { TColorName } from './color'

export type TRoute = {
  communityPath?: string
  threadPath?: string
  mainPath?: string
  subPath?: string
}

export type TRootStore = RootStoreType

export type TViewing = TCommunity | TArticle

export type TContainer = 'body' | 'drawer'
