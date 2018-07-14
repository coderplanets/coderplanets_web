import { types as t } from 'mobx-state-tree'

import { PAGE_SIZE } from '../../config'

import { User } from './User'
import { Community } from './Community'
/* import { Comment } from './Comment' */
import { Tag } from './Tag'

export const Video = t.model('Video', {
  id: t.maybe(t.string),
  title: t.maybe(t.string),
  desc: t.maybe(t.string),
  duration: t.maybe(t.string),
  /* durationDec: t.maybe(t.number), */
  author: t.maybe(User),

  source: t.maybe(t.string),
  link: t.maybe(t.string),
  originalAuthor: t.maybe(t.string),
  originalAuthorLink: t.maybe(t.string),

  views: t.optional(t.number, 0),

  communities: t.optional(t.array(Community), []),
  tags: t.optional(t.array(Tag), []),
  /* comments: t.optional(t.array(Comment), []), */

  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

export const PagedVideos = t.model('PagedVideos', {
  entries: t.optional(t.array(Video), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.COMMON),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})
