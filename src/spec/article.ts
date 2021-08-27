import type { TCommunity, TTag } from './index'
import type { TUser, TAccount } from './account'
import type { TID } from './utils'

export type TCopyright = 'cc' | 'approve' | 'forbid'

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
  viewerHasViewed?: boolean
  commentsCount?: number
  upvoteCount?: number
  articleTags?: TTag[]
}

export type TPost = TBaseArticle & {
  digest?: string
  linkAddr?: string
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
  linkAddr?: string
}

export type TJob = TBaseArticle & {
  company?: string
  companyLink?: string
}

export type TArticle = TPost | TJob | TBlog

export type TPagedArticles = {
  entries: TPost[] | TJob[] | TBlog[]
  totalCount: number
  pageNumber: number
  pageSize: number
  totalPages: number
}

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
  totalCount: number
  pageNumber: number
  pageSize: number
  totalPages: number
}

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
  totalCount: number
  pageNumber: number
  pageSize: number
  totalPages: number
}
