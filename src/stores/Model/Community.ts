import { types as T } from 'mobx-state-tree'

import { pagiFields, timestampFields } from './helper/common'

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

const Meta = T.model('CommunityMeta', {
  postsCount: T.optional(T.number, 0),
  worksCount: T.maybeNull(T.number),
  blogsCount: T.optional(T.number, 0),
  radarsCount: T.optional(T.number, 0),
  jobsCount: T.optional(T.number, 0),
  // reposCount: T.optional(T.number, 0),
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
  articlesCount: T.optional(T.number, 0),
  editorsCount: T.optional(T.number, 0),
  meta: T.maybeNull(Meta),
  viewerHasSubscribed: T.maybeNull(T.boolean),
  threads: T.optional(T.array(Thread), []),

  ...timestampFields(),
})

export const PagedCommunities = T.model('PagedCommunities', {
  entries: T.optional(T.array(Community), []),
  ...pagiFields(),
})
