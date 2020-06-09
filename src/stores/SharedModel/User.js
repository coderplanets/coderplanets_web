import { types as T } from 'mobx-state-tree'

import { PAGE_SIZE } from '@/config'
import { C11N } from '@/constant'

import { Community /* PagedCommunities */ } from './Community'

const PagedCommunities = T.model('pagedCommunities', {
  entries: T.optional(T.array(Community), []),
  totalCount: T.optional(T.number, 0),
})

const ContributeRecord = T.model('ContributeRecord', {
  date: T.string,
  count: T.number,
})

const Contributes = T.model('Contributes', {
  records: T.optional(T.array(ContributeRecord), []),
  startDate: T.maybeNull(T.string),
  endDate: T.maybeNull(T.string),
  totalCount: T.maybeNull(T.number),
})

const GithubProfile = T.model('GithubProfile', {
  login: T.string,
  htmlUrl: T.string,
})

export const EduBackground = T.model('EduBackground', {
  school: T.optional(T.string, ''),
  major: T.optional(T.string, ''),
})

export const WorkBackground = T.model('WorkBackground', {
  company: T.optional(T.string, ''),
  title: T.maybeNull(T.string),
})

const SourceContribute = T.model('SourceContribute', {
  web: T.maybeNull(T.boolean),
  server: T.maybeNull(T.boolean),
  mobile: T.maybeNull(T.boolean),
  weApp: T.maybeNull(T.boolean),
  h5: T.maybeNull(T.boolean),
})

export const Achievement = T.model('Achievement', {
  reputation: T.optional(T.number, 0),
  contentsStaredCount: T.optional(T.number, 0),
  contentsFavoritedCount: T.optional(T.number, 0),
  sourceContribute: T.optional(SourceContribute, {
    web: false,
    server: false,
    mobile: false,
    weApp: false,
    h5: false,
  }),
  donateMember: T.optional(T.boolean, false),
  seniorMember: T.optional(T.boolean, false),
  sponsorMember: T.optional(T.boolean, false),
})

const Customization = T.model('Customization', {
  bannerLayout: T.optional(
    T.enumeration('contentsLayout', [C11N.DIGEST, C11N.BRIEF]),
    C11N.DIGEST,
  ),
  contentsLayout: T.optional(
    T.enumeration('contentsLayout', [C11N.DIGEST, C11N.LIST]),
    C11N.DIGEST,
  ),
  contentDivider: T.optional(T.boolean, false),
  contentHover: T.optional(T.boolean, true),
  markViewed: T.optional(T.boolean, true),
  displayDensity: T.optional(
    T.enumeration('displayDensity', ['20', '25', '30']),
    '20',
  ),
  // theme
  // ...
})

const UserSocial = T.model('UserSocial', {
  qq: T.maybeNull(T.string),
  weibo: T.maybeNull(T.string),
  weichat: T.maybeNull(T.string),
  github: T.maybeNull(T.string),
  zhihu: T.maybeNull(T.string),
  douban: T.maybeNull(T.string),
  twitter: T.maybeNull(T.string),
  facebook: T.maybeNull(T.string),
  dribble: T.maybeNull(T.string),
  instagram: T.maybeNull(T.string),
  pinterest: T.maybeNull(T.string),
  huaban: T.maybeNull(T.string),
})

export const User = T.model('User', {
  // identifier is desiged to be immutable, this id would be updated when login
  /* id: T.optional(T.string, ''), */
  id: T.maybeNull(T.string),
  login: T.maybeNull(T.string),
  nickname: T.maybeNull(T.string),
  bio: T.maybeNull(T.string),
  avatar: T.maybeNull(T.string),
  views: T.optional(T.number, 0),
  email: T.maybeNull(T.string),
  location: T.maybeNull(T.string),
  geoCity: T.maybeNull(T.string),
  // TODO: backgrounds
  educationBackgrounds: T.optional(T.array(EduBackground), []),
  workBackgrounds: T.optional(T.array(WorkBackground), []),
  sex: T.maybeNull(T.string),
  // social
  social: T.optional(UserSocial, {}),
  fromGithub: T.optional(T.boolean, false),
  /* fromWeixin: T.optional(T.boolean, false), */
  /* subscribedCommunities: T.optional(pagedCommunities, {}), */
  subscribedCommunities: T.maybeNull(PagedCommunities),
  subscribedCommunitiesCount: T.optional(T.number, 0),
  contributes: T.optional(Contributes, {}),
  githubProfile: T.maybeNull(GithubProfile),
  // cmsPassportString: T.optional(T.string, '{}'),

  followingsCount: T.optional(T.number, 0),
  followersCount: T.optional(T.number, 0),

  achievement: T.maybeNull(Achievement),
  editableCommunities: T.maybeNull(PagedCommunities),

  insertedAt: T.optional(T.string, ''),
  updatedAt: T.optional(T.string, ''),

  viewerHasFollowed: T.optional(T.boolean, false),
  customization: T.optional(Customization, {}),
})

export const SimpleUser = T.model('SimpleUser2', {
  id: T.maybeNull(T.string),
  login: T.maybeNull(T.string),
  nickname: T.maybeNull(T.string),
  bio: T.maybeNull(T.string),
  avatar: T.maybeNull(T.string),
})

export const EmptyAchievement = {
  achievement: {
    reputation: 0,
    contentsStaredCount: 0,
    contentsFavoritedCount: 0,
    donateMember: false,
    seniorMember: false,
    sponsorMember: false,
  },
}

export const EmptyUser = {
  id: '',
  nickname: '',
  login: '',
  bio: '',
  avatar: '',
  fromGithub: false,
  fromWeixin: false,
  subscribedCommunities: {},
  contributes: {},
  githubProfile: null,
  // cmsPassportString: '{}',
  ...EmptyAchievement,
}

export const PagedUsers = T.model('PagedUsers', {
  entries: T.optional(T.array(User), []),
  pageNumber: T.optional(T.number, 1),
  pageSize: T.optional(T.number, PAGE_SIZE.D),
  totalCount: T.optional(T.number, 0),
  totalPages: T.optional(T.number, 0),
})
