import { types as T } from 'mobx-state-tree'

import { C11N } from '@/constant'

import { Community /* PagedCommunities */ } from './Community'
import { pagiFields } from './helper/common'

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

export const Achievement = T.model('Achievement', {
  reputation: T.optional(T.number, 0),
  articlesUpvotesCount: T.optional(T.number, 0),
  articlesCollectsCount: T.optional(T.number, 0),
  donateMember: T.optional(T.boolean, false),
  seniorMember: T.optional(T.boolean, false),
  sponsorMember: T.optional(T.boolean, false),
})

const Customization = T.model('Customization', {
  bannerLayout: T.optional(
    T.enumeration('bannerLayout', [C11N.CLASSIC, C11N.SIMPLE]),
    // C11N.CLASSIC,
    C11N.SIMPLE,
  ),
  contentDivider: T.optional(T.boolean, false),
  markViewed: T.optional(T.boolean, true),
  displayDensity: T.optional(
    T.enumeration('displayDensity', ['20', '25', '30']),
    '20',
  ),
  // theme
  // ...
})

const UserSocial = T.model('UserSocial', {
  github: T.maybeNull(T.string),
  twitter: T.maybeNull(T.string),
  blog: T.maybeNull(T.string),
  company: T.maybeNull(T.string),
})

const UserMeta = T.model('UserMeta', {
  isMaker: T.optional(T.boolean, false),
  publishedBlogsCount: T.optional(T.number, 0),
  publishedJobsCount: T.optional(T.number, 0),
  publishedPostsCount: T.optional(T.number, 0),
  publishedRadarsCount: T.optional(T.number, 0),
  publishedWorksCount: T.maybeNull(T.number),
  publishedMeetupsCount: T.optional(T.number, 0),
})

export const User = T.model('User', {
  // identifier is desiged to be immutable, this id would be updated when login
  id: T.maybeNull(T.string),
  meta: T.optional(UserMeta, {}),
  login: T.maybeNull(T.string),
  nickname: T.maybeNull(T.string),
  bio: T.maybeNull(T.string),
  shortbio: T.maybeNull(T.string),
  avatar: T.maybeNull(T.string),
  views: T.optional(T.number, 0),
  email: T.maybeNull(T.string),
  location: T.maybeNull(T.string),
  geoCity: T.maybeNull(T.string),
  sex: T.maybeNull(T.string),
  // social
  social: T.maybeNull(UserSocial),
  fromGithub: T.optional(T.boolean, false),
  /* fromWeixin: T.optional(T.boolean, false), */
  /* subscribedCommunities: T.optional(pagedCommunities, {}), */
  subscribedCommunities: T.maybeNull(PagedCommunities),
  subscribedCommunitiesCount: T.maybeNull(T.number),
  contributes: T.optional(Contributes, {}),
  githubProfile: T.maybeNull(GithubProfile),
  // cmsPassportString: T.optional(T.string, '{}'),

  followingsCount: T.maybeNull(T.number),
  followersCount: T.maybeNull(T.number),

  achievement: T.maybeNull(Achievement),
  editableCommunities: T.maybeNull(PagedCommunities),

  insertedAt: T.optional(T.string, ''),
  updatedAt: T.optional(T.string, ''),

  viewerHasFollowed: T.optional(T.boolean, false),
  customization: T.optional(Customization, {}),
})

export const SimpleUser = T.model('SimpleUser', {
  login: T.maybeNull(T.string),
  nickname: T.maybeNull(T.string),
  bio: T.maybeNull(T.string),
  shortbio: T.maybeNull(T.string),
  avatar: T.maybeNull(T.string),
})

export const EmptyAchievement = {
  achievement: {
    reputation: 0,
    articlesUpvotesCount: 0,
    articlesCollectsCount: 0,
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
  ...pagiFields(),
})
