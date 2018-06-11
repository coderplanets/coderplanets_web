import { types as t } from 'mobx-state-tree'
import { PAGE_SIZE } from '../../config'

// NOTE: the SimpleXXX version is to avoid circle import issue which cause MST error

const Thread = t.model('Thread', {
  title: t.string,
  raw: t.string,
})

export const SimpleCategory = t.model('Category', {
  id: t.maybe(t.string),
  title: t.maybe(t.string),
})

export const Community = t.model('Community', {
  id: t.maybe(t.string),
  title: t.maybe(t.string),
  desc: t.optional(t.string, ''),
  raw: t.maybe(t.string),
  logo: t.maybe(t.string),
  categories: t.optional(t.array(SimpleCategory), []),
  contributesDigest: t.optional(t.array(t.number), []),
  subscribersCount: t.optional(t.number, 0),
  editorsCount: t.optional(t.number, 0),
  postsCount: t.optional(t.number, 0),
  viewerHasSubscribed: t.maybe(t.boolean),
  threads: t.optional(t.array(Thread), []),
  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

export const PagedCommunities = t.model('PagedCommunities', {
  entries: t.optional(t.array(Community), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.COMMON),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})
