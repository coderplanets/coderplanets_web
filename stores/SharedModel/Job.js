import { types as t } from 'mobx-state-tree'

import { PAGE_SIZE } from 'config'

import { User, PagedUsers } from './User'
import { Community } from './Community'
import { Comment } from './Comment'
import { Tag } from './Tag'

export const Job = t.model('Job', {
  id: t.maybeNull(t.string),
  title: t.optional(t.string, ''),
  desc: t.maybeNull(t.string),
  body: t.optional(t.string, ''),
  company: t.optional(t.string, ''),
  companyLogo: t.optional(t.string, ''),
  companyLink: t.optional(t.string, ''),
  digest: t.optional(t.string, ''),
  // author: t.optional(User, {}),
  author: t.maybeNull(User),

  linkAddr: t.maybeNull(t.string),
  copyRight: t.optional(t.string, 'original'),

  communities: t.optional(t.array(Community), []),
  origialCommunity: t.optional(Community, {}),
  tags: t.optional(t.array(Tag), []),
  comments: t.optional(t.array(Comment), []),

  commentsCount: t.optional(t.number, 0),
  commentsParticipatorsCount: t.optional(t.number, 0),
  commentsParticipators: t.optional(t.array(User), []),
  views: t.optional(t.number, 0),
  pin: t.maybeNull(t.boolean),

  length: t.optional(t.number, 0),
  favoritedCount: t.optional(t.number, 0),
  // starredCount: t.optional(t.number, 0),
  viewerHasFavorited: t.optional(t.boolean, false),
  // viewerHasStarred: t.optional(t.boolean, false),
  favoritedCategoryId: t.maybeNull(t.string),

  pagedCommentsParticipators: t.optional(PagedUsers, {}),

  salary: t.optional(t.string, ''),
  exp: t.optional(t.string, ''),
  education: t.optional(t.string, ''),
  field: t.optional(t.string, ''),
  scale: t.optional(t.string, ''),
  finance: t.optional(t.string, ''),

  viewerHasViewed: t.optional(t.boolean, false),
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
