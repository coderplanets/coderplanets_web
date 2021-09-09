import type { TPagedCommunities } from './community'
import type { TC11NLayout } from './c11n'

type TSocial = {
  qq?: string
  weibo?: string
  weichat?: string
  github?: string
  zhihu?: string
  douban?: string
  twitter?: string
  facebook?: string
  dribble?: string
  instagram?: string
  pinterest?: string
  huaban?: string
}

export type TSimpleUser = {
  login?: string
  nickname?: string
  name?: string
  bio?: string
  avatar?: string
}

export type TUser = TSimpleUser & {
  id?: string
  // TODO: figure it out
  extraId?: string
  editableCommunities?: TPagedCommunities
  social?: TSocial
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
