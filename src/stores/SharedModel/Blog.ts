import { types as T } from 'mobx-state-tree'

import { PAGE_SIZE } from '@/config'

import { User, PagedUsers } from './User'
import { Community } from './Community'
import { Comment } from './Comment'
import { Tag } from './Tag'

export const Blog = T.model('Blog', {
  id: T.maybeNull(T.string),
  title: T.optional(T.string, ''),
  body: T.maybeNull(T.string),
  digest: T.maybeNull(T.string),
  author: T.maybeNull(User),

  linkAddr: T.maybeNull(T.string),

  communities: T.optional(T.array(Community), []),
  origialCommunity: T.optional(Community, {}),
  tags: T.optional(T.array(Tag), []),
  comments: T.optional(T.array(Comment), []),

  commentsCount: T.optional(T.number, 0),
  commentsParticipatorsCount: T.optional(T.number, 0),
  commentsParticipators: T.optional(T.array(User), []),
  views: T.optional(T.number, 0),
  pin: T.maybeNull(T.boolean),
  length: T.optional(T.number, 0),
  favoritedCount: T.optional(T.number, 0),
  starredCount: T.optional(T.number, 0),
  viewerHasFavorited: T.optional(T.boolean, false),
  viewerHasStarred: T.optional(T.boolean, false),
  favoritedCategoryId: T.maybeNull(T.string),

  pagedCommentsParticipators: T.optional(PagedUsers, {}),

  viewerHasViewed: T.optional(T.boolean, false),

  insertedAt: T.optional(T.string, ''),
  updatedAt: T.optional(T.string, ''),
})

export const PagedBlogs = T.model('PagedBlogs', {
  entries: T.optional(T.array(Blog), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})
