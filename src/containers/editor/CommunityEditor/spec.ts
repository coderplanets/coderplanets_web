export type TCommunityType = 'STANDER' | 'CITY' | 'WORKS' | 'TEAM' | null

export type TStep = 'SELECT_TYPE' | 'SETUP_DOMAIN' | 'SETUP_INFO'

export type TSelectTypeStatus = {
  communityType: TCommunityType
}

export type TSetupDomainStatus = {
  domainValue: string
}

export type TSetupInfoStatus = {
  domainValue: string
  titleValue: string
  descValue: string
}
