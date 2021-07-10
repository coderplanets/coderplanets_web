import type { TCommunity, TTag } from './index'
import type { TUser } from './account'
import type { TID } from './utils'

type TBaseArticle = {
  id?: TID
  title?: string
  body?: string
  views?: number
  pin?: boolean
  author?: {
    id: string
    login: string
    nickname: string
    avatar: string
  }
  starredCount?: number
  origialCommunity?: TCommunity
  commentsParticipators?: TUser
  insertedAt?: string
  viewerHasViewed?: boolean
  commentsCount?: number
  tags?: TTag[]
}

export type TPost = TBaseArticle & {
  digest?: string
  linkAddr?: string
  linkIcon?: string
}

export type TBlog = TBaseArticle & {
  digest?: string
  linkAddr?: string
}

export type TJob = TBaseArticle

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
