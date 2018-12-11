import { types as t } from 'mobx-state-tree'
import { Community /* PagedCommunities */ } from './Community'

import { C11N } from '../../utils'
import { PAGE_SIZE } from '../../config'

const PagedCommunities = t.model('pagedCommunities', {
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

const SourceContribute = t.model('SourceContribute', {
  web: t.maybeNull(t.boolean),
  server: t.maybeNull(t.boolean),
  mobile: t.maybeNull(t.boolean),
  weApp: t.maybeNull(t.boolean),
  h5: t.maybeNull(t.boolean),
})

export const Achievement = t.model('Achievement', {
  reputation: t.optional(t.number, 0),
  contentsStaredCount: t.optional(t.number, 0),
  contentsFavoritedCount: t.optional(t.number, 0),
  sourceContribute: t.optional(SourceContribute, {
    web: false,
    server: false,
    mobile: false,
    weApp: false,
    h5: false,
  }),
  donateMember: t.optional(t.boolean, false),
  seniorMember: t.optional(t.boolean, false),
  sponsorMember: t.optional(t.boolean, false),
})

const Customization = t.model('Customization', {
  bannerLayout: t.optional(
    t.enumeration('contentsLayout', [C11N.DIGEST, C11N.BRIEF]),
    C11N.DIGEST
  ),
  contentsLayout: t.optional(
    t.enumeration('contentsLayout', [C11N.DIGEST, C11N.LIST]),
    C11N.DIGEST
  ),
  contentDivider: t.optional(t.boolean, false),
  markViewed: t.optional(t.boolean, true),
  displayDensity: t.optional(
    t.enumeration('displayDensity', ['20', '25', '30']),
    '20'
  ),
  // theme
  // ...
})

export const User = t.model('User', {
  // identifier is desiged to be immutable, this id would be updated when login
  /* id: t.optional(t.string, ''), */
  id: t.maybeNull(t.string),
  nickname: t.maybeNull(t.string),
  bio: t.maybeNull(t.string),
  avatar: t.maybeNull(t.string),
  views: t.optional(t.number, 0),
  email: t.maybeNull(t.string),
  location: t.maybeNull(t.string),
  geoCity: t.maybeNull(t.string),
  // TODO: backgrounds
  educationBackgrounds: t.optional(t.array(EduBackground), []),
  workBackgrounds: t.optional(t.array(WorkBackground), []),
  sex: t.maybeNull(t.string),
  // social
  github: t.maybeNull(t.string),
  zhihu: t.maybeNull(t.string),
  douban: t.maybeNull(t.string),
  twitter: t.maybeNull(t.string),
  facebook: t.maybeNull(t.string),
  dribble: t.maybeNull(t.string),
  instagram: t.maybeNull(t.string),
  pinterest: t.maybeNull(t.string),
  huaban: t.maybeNull(t.string),
  qq: t.maybeNull(t.string),
  weichat: t.maybeNull(t.string),
  weibo: t.maybeNull(t.string),

  fromGithub: t.optional(t.boolean, false),
  /* fromWeixin: t.optional(t.boolean, false), */
  /* subscribedCommunities: t.optional(pagedCommunities, {}), */
  subscribedCommunities: t.maybeNull(PagedCommunities),
  subscribedCommunitiesCount: t.optional(t.number, 0),
  contributes: t.optional(Contributes, {}),
  githubProfile: t.maybeNull(GithubProfile),
  // cmsPassportString: t.optional(t.string, '{}'),

  followingsCount: t.optional(t.number, 0),
  followersCount: t.optional(t.number, 0),

  achievement: t.maybeNull(Achievement),
  editableCommunities: t.maybeNull(PagedCommunities),

  insertedAt: t.optional(t.string, ''),
  updatedAt: t.optional(t.string, ''),

  viewerHasFollowed: t.optional(t.boolean, false),
  customization: t.optional(Customization, {}),
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
  // cmsPassportString: '{}',
}

export const PagedUsers = t.model('PagedUsers', {
  entries: t.optional(t.array(User), []),
  pageNumber: t.optional(t.number, 1),
  pageSize: t.optional(t.number, PAGE_SIZE.D),
  totalCount: t.optional(t.number, 0),
  totalPages: t.optional(t.number, 0),
})
