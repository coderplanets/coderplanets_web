import type { TCommunity, TTag } from './index'
import type { TUser, TAccount } from './account'
import type { TID } from './utils'

export type TCopyright = 'cc' | 'approve' | 'forbid'

type TArticleMeta = {
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
}

type TBaseArticle = {
  id?: TID
  title?: string
  digest?: string
  body?: string
  views?: number
  isPinned?: boolean
  author?: TAccount
  upvotesCount?: number
  originalCommunity?: TCommunity
  commentsParticipants?: TUser
  insertedAt?: string
  updatedAt?: string
  viewerHasViewed?: boolean
  commentsCount?: number
  articleTags?: TTag[]
  meta?: TArticleMeta
  document?: TDocument
  linkAddr?: string
  isArchived?: boolean
  archivedAt?: string
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
  body: string
  floor?: number
  insertedAt?: string
  updatedAt?: string
  author?: TUser
  repliesCount?: number
  replies?: TComment[]
  replyTo?: TComment
  likesCount?: number
  viewerHasLiked?: boolean
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
