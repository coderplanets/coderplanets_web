export type TUser = {
  id?: string
  login?: string
  nickname?: string
  name?: string
  avatar?: string
}
export type TAccount = TUser & {
  customization?: {
    theme?: string
    bannerLayout?: string
    contentsLayout?: string // oneOf([C11N.DIGEST, C11N.LIST])
    markViewed?: boolean
    contentDivider?: boolean
    displayDensity?: string // oneOf(['20', '25', '30'])
  }
  isLogin?: boolean
  isValidSession?: boolean
  // ...
}

export type TMembership = 'seniorMember' | 'sponsorMember' | 'donateMember'
