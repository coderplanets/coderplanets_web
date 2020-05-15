import { types as T } from 'mobx-state-tree'
import { PAGE_SIZE } from '@/config'

// NOTE: the SimpleXXX version is to avoid circle import issue which cause MST error

const Thread = T.model('Thread', {
  title: T.string,
  raw: T.string,
  index: T.optional(T.number, 0),
})

export const SimpleCategory = T.model('Category', {
  id: T.maybeNull(T.string),
  title: T.maybeNull(T.string),
})

export const Community = T.model('Community', {
  id: T.maybeNull(T.string),
  title: T.maybeNull(T.string),
  desc: T.optional(T.string, ''),
  raw: T.maybeNull(T.string),
  index: T.optional(T.number, 1000000),
  logo: T.maybeNull(T.string),
  categories: T.optional(T.array(SimpleCategory), []),
  contributesDigest: T.optional(T.array(T.number), []),
  subscribersCount: T.optional(T.number, 0),
  editorsCount: T.optional(T.number, 0),
  postsCount: T.optional(T.number, 0),
  videosCount: T.optional(T.number, 0),
  jobsCount: T.optional(T.number, 0),
  reposCount: T.optional(T.number, 0),
  viewerHasSubscribed: T.maybeNull(T.boolean),
  threads: T.optional(T.array(Thread), []),
  insertedAt: T.optional(T.string, ''),
  updatedAt: T.optional(T.string, ''),
})

export const PagedCommunities = T.model('PagedCommunities', {
  entries: T.optional(T.array(Community), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})
