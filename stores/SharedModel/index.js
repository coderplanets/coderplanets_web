import { types as t } from 'mobx-state-tree'

// community related
export const Community = t.model('Community', {
  id: t.identifier(),
  title: t.string,
  desc: t.string,
  raw: t.string,
  logo: t.string,
  contributesDigest: t.optional(t.array(t.number), []),
  subscribersCount: t.optional(t.number, 0),
  viewerHasSubscribed: t.maybe(t.boolean),
})

// user related
const SubscribedCommunities = t.model('SubscribedCommunities', {
  entries: t.optional(t.array(Community), []),
  totalCount: t.optional(t.number, 0),
})

const ContributeRecord = t.model('ContributeRecord', {
  date: t.string,
  count: t.number,
})

const Contributes = t.model('Contributes', {
  records: t.optional(t.array(ContributeRecord), []),
  startDate: t.maybe(t.string),
  endDate: t.maybe(t.string),
  totalCount: t.maybe(t.number),
})

export const User = t.model('User', {
  // identifier is desiged to be immutable, this id would be updated when login
  id: t.optional(t.string, ''),
  nickname: t.optional(t.string, ''),
  bio: t.optional(t.string, ''),
  avatar: t.optional(t.string, ''),
  fromGithub: t.optional(t.boolean, false),
  fromWeixin: t.optional(t.boolean, false),
  subscribedCommunities: t.optional(SubscribedCommunities, {}),
  contributes: t.optional(Contributes, {}),
})
