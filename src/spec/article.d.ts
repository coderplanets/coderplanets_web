import type { TCommunity, TTag } from './index'
import type { TUser, TAccount, TSimpleUser, TRSSAuthor } from './account'
import type { TID } from './utils'
import type { TEmotion } from './emotion'
import type { TColorName } from './color'

export type TCopyright = 'cc' | 'approve' | 'forbid'

export type TArticleMeta = {
  thread?: string
  citingCount?: number
  isCommentLocked?: boolean
  isEdited?: boolean
  lastActiveAt?: string
  latestUpvotedUsers?: TUser[]
  isLegal?: boolean
  illegalReason?: string[]
  illegalWords?: string[]
}

export type TDocument = {
  bodyHtml?: string
  body?: string
}

type TBaseArticle = {
  id?: TID
  title?: string
  digest?: string
  body?: string
  views?: number
  copyRight?: string
  isQuestion?: boolean
  isPinned?: boolean
  author?: TAccount
  upvotesCount?: number
  originalCommunity?: TCommunity
  communities?: TCommunity[]
  commentsParticipants?: TUser[]
  commentsParticipantsCount?: number
  insertedAt?: string
  updatedAt?: string
  viewerHasViewed?: boolean
  viewerHasCollected?: boolean
  viewerHasUpvoted?: boolean
  commentsCount?: number
  articleTags?: TTag[]
  meta?: TArticleMeta
  document?: TDocument
  linkAddr?: string
  isArchived?: boolean
  archivedAt?: string
  activeAt?: string

  category?: TArticleCat
  state?: TArticleState
}

export type TPost = TBaseArticle & {
  digest?: string
}

export type TTechStack = {
  title?: string
  logo: string
  raw: string
  category?: string
}
type TCity = {
  title: string
  logo?: string
  link: string
  desc?: string
}

export type TSocialInfo = { platform: string; link: string }
export type TWorks = TBaseArticle & {
  cover?: string
  desc?: string
  homeLink?: string
  tag?: { title: string }
  profitMode?: string
  workingMode?: string
  techstacks?: TTechStack[]
  teammates?: TUser[]
  socialInfo?: TSocialInfo[]
  cities?: TCity[]
  isOSS?: boolean
  ossAddr?: string
  digest?: string
}

export type TWorksTab =
  | 'story'
  | 'basic'
  | 'techstacks'
  | 'milestone'
  | 'community'
  | 'interview'
export type TBlogTab = 'digest' | 'author' | 'feeds'

export type TTechCommunities = {
  lang?: TCommunity[]
  framework?: TCommunity[]
  database?: TCommunity[]
  devOps?: TCommunity[]
  design?: TCommunity[]
}

export type TBlog = TBaseArticle & {
  digest?: string
  published?: string
  rss?: string
}

export type TBlogRSS = {
  title?: string
  subtitle?: string
  link?: string
  updated?: string
  historyFeed?: TBlog[]
  author?: TRSSAuthor
}

export type TRadar = TBaseArticle & {
  digest?: string
}

export type TMeetup = TBaseArticle & {
  digest?: string
}

export type TJob = TBaseArticle & {
  company?: string
  companyLink?: string
}

export type TArticle = TPost | TJob | TBlog | TRadar
export type TArticleEntries = TPost[] | TJob[] | TBlog[] | TRadar[]

type TPagi = {
  totalCount: number
  pageNumber: number
  pageSize: number
  totalPages: number
}

export type TPagedArticles = {
  entries: TArticleEntries
} & TPagi

export type TPagedWorks = {
  entries: TWorks[]
} & TPagi

export type TPagedMeetups = {
  entries: TMeetup[]
} & TPagi

export type TComment = {
  id: string
  thread?: string
  isPinned?: boolean
  floor?: number
  bodyHtml?: string
  insertedAt?: string
  updatedAt?: string
  author?: TUser
  repliesCount?: number
  replies?: TComment[]
  replyTo?: TComment
  replyToId?: TID
  upvotesCount?: number
  viewerHasUpvoted?: boolean
  isArticleAuthor?: boolean
  emotions?: TEmotion
  meta?: {
    isArticleAuthorUpvoted?: boolean
    isReplyToOthers?: boolean
    isLegal?: boolean
    illegalReason?: string[]
    illegalWords?: string[]
  }
  article?: {
    id?: string
    title?: string
    thread?: string
    author?: {
      login
      nickname
      avatar
    }
  }
}

export type TPagedComments = {
  entries: TComment[]
} & TPagi

export type TArticleFilter = {
  when?: string
  sort?: string
  length?: string
  read?: string
}

export type TUpvoteLayout =
  | 'default'
  | 'comment'
  | 'article'
  | 'post-list'
  | 'blog-list'
  | 'works-article'
  | 'works-card'
  | 'guide-list'
  | 'kanban'
  | 'fixed-header'
  | 'sticker'

export type TBrandLayout = 'both' | 'logo' | 'text'
export type TBannerLayout = 'header' | 'tabber'
export type TBannerNotifyLayout = 'default' | 'center'
export type TPostLayout = 'upvote_first' | 'comment_first'
export type TChangelogLayout = 'preview' | 'outline'

export type TGlobalLayout = {
  primaryColor: TColorName
  brand: TBrandLayout
  post: TPostLayout
  banner: TBannerLayout
  changelog: TChangelogLayout
  bannerNotify: TBannerNotifyLayout
  bannerNotifyBg: TColorName
}

export type TCollectionFolder = {
  id: TID
  title: string
  desc?: string
  totalCount: number
  private: boolean
  updatedAt: string
}

export type TPagedCollectionFolder = {
  entries: TCollectionFolder[]
} & TPagi

export type TCommentsState = {
  isViewerJoined: boolean
  participantsCount: number
  totalCount: number
  participants: TSimpleUser[]
}

export type TArticleCat = 'BUG' | 'FEATURE' | 'QUESTION' | 'LOCK' | 'DEFAULT'

export type TArticleState =
  | 'TODO'
  | 'WIP'
  | 'DONE'
  | 'RESOLVE'
  | 'LOCK'
  | 'DEFAULT'
