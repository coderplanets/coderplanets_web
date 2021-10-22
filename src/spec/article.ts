import type { TCommunity, TTag } from './index'
import type { TUser, TAccount, TSimpleUser } from './account'
import type { TID } from './utils'
import type { TEmotion } from './emotion'

export type TCopyright = 'cc' | 'approve' | 'forbid'

export type TArticleMeta = {
  thread?: string
  citingCount?: number
  isCommentLocked?: boolean
  isEdited?: boolean
  lastActiveAt?: string
  latestUpvotedUsers?: {
    login: string
    nickname: string
    avatar?: string
    bio?: string | null
  }[]
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
  viewerHasUpvoted?: boolean
  commentsCount?: number
  articleTags?: TTag[]
  meta?: TArticleMeta
  document?: TDocument
  linkAddr?: string
  isArchived?: boolean
  archivedAt?: string
  activeAt?: string
}

export type TPost = TBaseArticle & {
  digest?: string
}

export type TWorks = TBaseArticle & {
  cover: string
  desc: string
  tag: { title: string }
  platform: { title: string }
  techStack: { icon: string; raw: string }[]
  isOSS: boolean
  ossAddr?: string
  digest?: string
}

export type TBlog = TBaseArticle & {
  digest?: string
  published?: string
}

export type TBlogRSS = {
  title?: string
  subtitle?: string
  link?: string
  updated?: string
  historyFeed?: TBlog[]
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

type TPagi = {
  totalCount: number
  pageNumber: number
  pageSize: number
  totalPages: number
}

export type TPagedArticles = {
  entries: TPost[] | TJob[] | TBlog[] | TRadar[]
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
  | 'works-article'
  | 'works-card'

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
