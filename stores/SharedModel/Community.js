import { types as t } from 'mobx-state-tree'

const Thread = t.model('Thread', {
  title: t.string,
  raw: t.string,
})

const Community = t.model('Community', {
  id: t.identifier(),
  title: t.string,
  desc: t.optional(t.string, ''),
  raw: t.string,
  logo: t.string,
  contributesDigest: t.optional(t.array(t.number), []),
  subscribersCount: t.optional(t.number, 0),
  viewerHasSubscribed: t.maybe(t.boolean),
  threads: t.optional(t.array(Thread), []),
})

export default Community
