import { types as t } from 'mobx-state-tree'

export const Community = t.model('Community', {
  id: t.string,
  title: t.string,
  raw: t.string,
  logo: t.string,
  recentContributesDigest: t.optional(t.array(t.number), []),
  subscribersCount: t.optional(t.number, 0),
})

export const holder = 1
