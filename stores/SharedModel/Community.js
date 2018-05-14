import { types as t } from 'mobx-state-tree'

const Thread = t.model('Thread', {
  title: t.string,
  raw: t.string,
})

const Community = t.model('Community', {
  id: t.maybe(t.string),
  title: t.maybe(t.string),
  desc: t.optional(t.string, ''),
  raw: t.maybe(t.string),
  logo: t.maybe(t.string),
  contributesDigest: t.optional(t.array(t.number), []),
  subscribersCount: t.optional(t.number, 0),
  editorsCount: t.optional(t.number, 0),
  postsCount: t.optional(t.number, 0),
  viewerHasSubscribed: t.maybe(t.boolean),
  threads: t.optional(t.array(Thread), []),
  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

export default Community
