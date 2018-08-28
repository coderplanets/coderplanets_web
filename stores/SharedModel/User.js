import { types as t } from 'mobx-state-tree'
import { Community } from './Community'
import { PAGE_SIZE } from '../../config'

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
  startDate: t.maybeNull(t.string),
  endDate: t.maybeNull(t.string),
  totalCount: t.maybeNull(t.number),
})

const GithubProfile = t.model('GithubProfile', {
  login: t.string,
  htmlUrl: t.string,
})

export const EduBackground = t.model('EduBackground', {
  school: t.optional(t.string, ''),
  major: t.optional(t.string, ''),
})

export const WorkBackground = t.model('WorkBackground', {
  company: t.optional(t.string, ''),
  title: t.optional(t.string, ''),
})

export const User = t.model('User', {
  // identifier is desiged to be immutable, this id would be updated when login
  /* id: t.optional(t.string, ''), */
  id: t.maybeNull(t.string),
  /* nickname: t.optional(t.string, ''), */
  nickname: t.maybeNull(t.string),
  /* bio: t.optional(t.string, ''), */
  bio: t.maybeNull(t.string),
  /* avatar: t.optional(t.string, ''), */
  avatar: t.maybeNull(t.string),
  email: t.maybeNull(t.string),
  location: t.maybeNull(t.string),
  // TODO: backgrounds
  educationBackgrounds: t.optional(t.array(EduBackground), []),
  workBackgrounds: t.optional(t.array(WorkBackground), []),
  sex: t.maybeNull(t.string),
  qq: t.maybeNull(t.string),
  weichat: t.maybeNull(t.string),
  weibo: t.maybeNull(t.string),

  fromGithub: t.optional(t.boolean, false),
  /* fromWeixin: t.optional(t.boolean, false), */
  /* subscribedCommunities: t.optional(SubscribedCommunities, {}), */
  subscribedCommunities: t.maybeNull(SubscribedCommunities),
  subscribedCommunitiesCount: t.optional(t.number, 0),
  contributes: t.optional(Contributes, {}),
  githubProfile: t.maybeNull(GithubProfile),
  cmsPassportString: t.maybeNull(t.string),
  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),
})

export const SimpleUser = t.model('SimpleUser2', {
  id: t.maybeNull(t.string),
  nickname: t.maybeNull(t.string),
  bio: t.maybeNull(t.string),
  avatar: t.maybeNull(t.string),
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

export const PagedUsers = t.model('PagedUsers', {
  entries: t.optional(t.array(User), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.COMMON),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})
