import type { TRootStore as RootStoreType } from '@/stores/RootStore'
import type { TArticle } from './article'
import type { TCommunity } from './community'

export type { TMetric } from './metric'
export type {
  TSIZE,
  TSIZE_T,
  TSIZE_S,
  TSIZE_M,
  TSIZE_L,
  TSIZE_TS,
  TSIZE_TSM,
  TSIZE_SML,
  TSIZE_SM,
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
  TPagedCommunities,
  TTag,
  TNaviTag,
  TFilterTag,
  TGroupedTags,
  TCategory,
} from './community'

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
  TGtdType,
  TGtdState,
} from './utils'

export type { TGQLError } from './graphql'

export type {
  TCollectionFolder,
  TPagedCollectionFolder,
  TDocument,
  TArticle,
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
  TCommentsState,
  TWorksTab,
  TBlogTab,
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

export type TRoute = {
  communityPath?: string
  threadPath?: string
  mainPath?: string
  subPath?: string
}

export type TRootStore = RootStoreType

export type TViewing = TCommunity | TArticle

export type TArticleThread =
  | 'post'
  | 'job'
  | 'repo'
  | 'meetup'
  | 'blog'
  | 'radar'
  | 'works'

export type TThread =
  | TArticleThread
  | 'cper'
  | 'setting'
  | 'map'
  | 'kanban'
  | 'product'
  | 'team'
  | 'interview'
  | 'account'
  | 'guide'

export type TContainer = 'body' | 'drawer'
