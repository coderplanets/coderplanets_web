import { types as t } from 'mobx-state-tree'

import { PAGE_SIZE } from '../../config'

import { User } from './User'
import { Community } from './Community'
/* import { Comment } from './Comment' */
import { Tag } from './Tag'

export const Video = t.model('Video', {
  id: t.maybeNull(t.string),
  title: t.maybeNull(t.string),
  desc: t.maybeNull(t.string),
  duration: t.maybeNull(t.string),
  /* durationDec: t.maybeNull(t.number), */
  poster: t.maybeNull(t.string),
  author: t.maybeNull(User),

  source: t.maybeNull(t.string),
  link: t.maybeNull(t.string),
  originalAuthor: t.maybeNull(t.string),
  originalAuthorLink: t.maybeNull(t.string),

  views: t.optional(t.number, 0),

  communities: t.optional(t.array(Community), []),
  tags: t.optional(t.array(Tag), []),
  /* comments: t.optional(t.array(Comment), []), */

  pulishAt: t.optional(t.string, ''),
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
