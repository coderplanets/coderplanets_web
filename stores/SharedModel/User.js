import { types as t } from 'mobx-state-tree'
import { Community } from './Community'

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

const GithubProfile = t.model('GithubProfile', {
  login: t.string,
  htmlUrl: t.string,
})

export const User = t.model('User', {
  // identifier is desiged to be immutable, this id would be updated when login
  /* id: t.optional(t.string, ''), */
  id: t.maybe(t.string),
  /* nickname: t.optional(t.string, ''), */
  nickname: t.maybe(t.string),
  /* bio: t.optional(t.string, ''), */
  bio: t.maybe(t.string),
  /* avatar: t.optional(t.string, ''), */
  avatar: t.maybe(t.string),
  email: t.maybe(t.string),
  location: t.maybe(t.string),
  company: t.maybe(t.string),
  education: t.maybe(t.string),
  sex: t.maybe(t.string),
  qq: t.maybe(t.string),
  weichat: t.maybe(t.string),
  weibo: t.maybe(t.string),

  fromGithub: t.optional(t.boolean, false),
  /* fromWeixin: t.optional(t.boolean, false), */
  /* subscribedCommunities: t.optional(SubscribedCommunities, {}), */
  subscribedCommunities: t.maybe(SubscribedCommunities),
  subscribedCommunitiesCount: t.optional(t.number, 0),
  contributes: t.optional(Contributes, {}),
  githubProfile: t.maybe(GithubProfile),
  cmsPassportString: t.maybe(t.string),
  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

export const SimpleUser = t.model('SimpleUser2', {
  id: t.maybe(t.string),
  nickname: t.maybe(t.string),
  bio: t.maybe(t.string),
  avatar: t.maybe(t.string),
})

export const EmptyUser = {
  id: '',
  nickname: '',
  bio: '',
  avatar: '',
  fromGithub: false,
  fromWeixin: false,
  subscribedCommunities: {},
  contributes: {},
  githubProfile: null,
}
