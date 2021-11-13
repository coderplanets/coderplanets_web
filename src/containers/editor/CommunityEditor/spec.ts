export type TCommunityType = 'STANDER' | 'CITY' | 'WORKS' | 'TEAM' | null

export type TStep = 'SELECT_TYPE' | 'SETUP_DOMAIN' | 'SETUP_INFO' | 'FINISHED'

export type TSelectTypeStatus = {
  communityType: TCommunityType
}

export type TSetupDomainStatus = {
  raw: string
}

export type TSetupInfoStatus = {
  raw: string
  title: string
  desc: string
  logo: string
}

export type TValidState = {
  isRawValid: boolean
  isTitleValid: boolean
  isDescValid: boolean
  isLogoValid: boolean
}
