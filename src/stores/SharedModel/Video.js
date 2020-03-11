import { types as t } from 'mobx-state-tree'

import { PAGE_SIZE } from '@config'

import { User, PagedUsers } from './User'
import { Community } from './Community'
/* import { Comment } from './Comment' */
import { Tag } from './Tag'

export const Video = t.model('Video', {
  id: t.maybeNull(t.string),
  title: t.maybeNull(t.string),
  desc: t.maybeNull(t.string),
  duration: t.maybeNull(t.string),
  /* durationDec: t.maybeNull(t.number), */
  thumbnil: t.maybeNull(t.string),
  poster: t.maybeNull(t.string),
  author: t.maybeNull(User),

  source: t.maybeNull(t.string),
  link: t.maybeNull(t.string),
  originalAuthor: t.maybeNull(t.string),
  originalAuthorLink: t.maybeNull(t.string),

  views: t.optional(t.number, 0),
  pin: t.maybeNull(t.boolean),

  communities: t.optional(t.array(Community), []),
  origialCommunity: t.optional(Community, {}),
  tags: t.optional(t.array(Tag), []),
  /* comments: t.optional(t.array(Comment), []), */
  favoritedCount: t.optional(t.number, 0),
  starredCount: t.optional(t.number, 0),
  viewerHasFavorited: t.optional(t.boolean, false),
  viewerHasStarred: t.optional(t.boolean, false),
  favoritedCategoryId: t.maybeNull(t.string),

  pagedCommentsParticipators: t.optional(PagedUsers, {}),

  publishAt: t.maybeNull(t.string),

  viewerHasViewed: t.optional(t.boolean, false),

  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

export const PagedVideos = t.model('PagedVideos', {
  entries: t.optional(t.array(Video), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.D),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})
