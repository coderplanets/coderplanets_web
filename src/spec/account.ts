export type TUser = {
  id: string
  login?: string
  nickname?: string
  name?: string
  avatar: string
}
export type TAccount = TUser & {
  customization?: {
    theme: string
    bannerLayout: string
  }
  isLogin?: boolean
  isValidSession?: boolean
  // ...
}

export type TMembership = 'seniorMember' | 'sponsorMember' | 'donateMember'
