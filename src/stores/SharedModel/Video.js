import { types as T } from 'mobx-state-tree'

import { PAGE_SIZE } from '@/config'

import { User, PagedUsers } from './User'
import { Community } from './Community'
/* import { Comment } from './Comment' */
import { Tag } from './Tag'

export const Video = T.model('Video', {
  id: T.maybeNull(T.string),
  title: T.maybeNull(T.string),
  desc: T.maybeNull(T.string),
  duration: T.maybeNull(T.string),
  /* durationDec: T.maybeNull(T.number), */
  thumbnil: T.maybeNull(T.string),
  poster: T.maybeNull(T.string),
  author: T.maybeNull(User),

  source: T.maybeNull(T.string),
  link: T.maybeNull(T.string),
  originalAuthor: T.maybeNull(T.string),
  originalAuthorLink: T.maybeNull(T.string),

  views: T.optional(T.number, 0),
  pin: T.maybeNull(T.boolean),

  communities: T.optional(T.array(Community), []),
  origialCommunity: T.optional(Community, {}),
  tags: T.optional(T.array(Tag), []),
  /* comments: T.optional(T.array(Comment), []), */
  favoritedCount: T.optional(T.number, 0),
  starredCount: T.optional(T.number, 0),
  viewerHasFavorited: T.optional(T.boolean, false),
  viewerHasStarred: T.optional(T.boolean, false),
  favoritedCategoryId: T.maybeNull(T.string),

  pagedCommentsParticipators: T.optional(PagedUsers, {}),

  publishAt: T.maybeNull(T.string),

  viewerHasViewed: T.optional(T.boolean, false),

  insertedAt: T.optional(T.string, ''),
  updatedAt: T.optional(T.string, ''),
})

export const PagedVideos = T.model('PagedVideos', {
  entries: T.optional(T.array(Video), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})
