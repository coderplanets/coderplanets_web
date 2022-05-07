import type { TPagedCommunities } from './community'
import type { TC11NLayout } from './c11n'

type TSocial = {
  github?: string
  twitter?: string
  blog?: string
  company?: string
}

export type TSimpleUser = {
  login?: string
  nickname?: string
  name?: string
  bio?: string
  shortbio?: string
  avatar?: string
}

type TContributes = {
  records?: {
    date: string
    count: number
  }
  startDate?: string
  endDate?: string
  totalCount?: number
}

export type TUser = TSimpleUser & {
  id?: string
  // TODO: figure it out
  extraId?: string
  editableCommunities?: TPagedCommunities
  sex?: string
  location?: string
  geoCity?: string
  viewerHasFollowed?: boolean
  social?: TSocial
  email?: string
  contributes?: TContributes
  followersCount?: number
  followingsCount?: number
  insertedAt?: string
  views?: number
  meta?: {
    isMaker: boolean
    publishedPostsCount: number
    publishedJobsCount: number
    publishedBlogsCount: number
    publishedWorksCount: number | null
    publishedRadarsCount: number
    publishedMeetupsCount: number
  }
}

export type TPagedUsers = {
  entries: TUser[]
  totalCount?: number
  pageNumber?: number
  pageSize?: number
}

export type TC11N = {
  isLogin?: boolean
  theme?: string
  bannerLayout?: TC11NLayout
  markViewed?: boolean
  contentDivider?: boolean
  displayDensity?: string // oneOf(['20', '25', '30'])
}

export type TAccount = TUser & {
  customization?: TC11N
  isLogin?: boolean
  isValidSession?: boolean
  subscribedCommunitiesCount?: number
  // ...
}

export type TMembership = 'seniorMember' | 'sponsorMember' | 'donateMember'

export type TRSSAuthor = {
  name: string
  intro: string
  github: string
  twitter: string
}
