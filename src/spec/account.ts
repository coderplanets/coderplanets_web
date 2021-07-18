import type { TPagedCommunities } from './community'
import type { TC11NLayout } from './c11n'

export type TUser = {
  id?: string
  login?: string
  nickname?: string
  name?: string
  bio?: string
  avatar?: string
  // TODO: figure it out
  extraId?: string
  editableCommunities?: TPagedCommunities
  social?: {
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
