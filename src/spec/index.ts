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
export type { TAccount, TUser, TMembership, TC11N } from './account'
export type { TC11NLayout } from './c11n'
export type {
  TCommunity,
  TPagedCommunities,
  TTag,
  TGroupedTags,
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
} from './utils'

export type { TGQLError } from './graphql'

export type {
  TCollectionFolder,
  TPagedCollectionFolder,
  TArticle,
  TPost,
  TBlog,
  TJob,
  TWorks,
  TPagedArticles,
  TComment,
  TPagedComments,
  TArticleFilter,
  TCopyright,
  TUpvoteLayout,
} from './article'

export type {
  TGALLERY_DEFAULT,
  TGALLERY_LIST,
  TGALLERY_MASONRY_COLUMN,
  TGALLERY_MAIN_COLUMN,
  TGALLERY_TWO_COLUMN,
  TGALLERY_THREE_COLUMN,
  TGALLERY_TEXT_ONLY,
  TGALLERY_TEXT_WITH_IMAGE,
} from './gallery'

export type { TAccountStore, TViewingStore } from './store'

export type TRoute = {
  communityPath?: string
  threadPath?: string
  mainPath?: string
  subPath?: string
}

export type TRootStore = RootStoreType

export type TViewing = TCommunity | TArticle

export type TThread = string

export type TContainer = 'body' | 'drawer'
