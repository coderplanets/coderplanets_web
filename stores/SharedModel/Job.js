import { types as t } from 'mobx-state-tree'

import { PAGE_SIZE } from '../../config'

import { User, PagedUsers } from './User'
import { Community } from './Community'
import { Comment } from './Comment'
import { Tag } from './Tag'

export const Job = t.model('Job', {
  id: t.maybeNull(t.string),
  title: t.maybeNull(t.string),
  body: t.maybeNull(t.string),
  company: t.optional(t.string, ''),
  companyLogo: t.optional(t.string, ''),
  digest: t.maybeNull(t.string),
  // author: t.optional(User, {}),
  author: t.maybeNull(User),

  communities: t.optional(t.array(Community), []),
  tags: t.optional(t.array(Tag), []),
  comments: t.optional(t.array(Comment), []),

  commentsCount: t.optional(t.number, 0),
  commentsParticipatorsCount: t.optional(t.number, 0),
  commentsParticipators: t.optional(t.array(User), []),
  views: t.optional(t.number, 0),
  length: t.optional(t.number, 0),
  favoritedCount: t.optional(t.number, 0),
  // starredCount: t.optional(t.number, 0),
  viewerHasFavorited: t.optional(t.boolean, false),
  // viewerHasStarred: t.optional(t.boolean, false),
  favoritedCategoryId: t.maybeNull(t.string),

  pagedCommentsParticipators: t.optional(PagedUsers, {}),
  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

export const PagedJobs = t.model('PagedJobs', {
  entries: t.optional(t.array(Job), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.D),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})
