import type { TCommunity } from '@/spec'

export type TStep = '0' | '1' | '2' | '3' | '4'

export type TSocialInfo = {
  platform: string
  link: string
}

export type TInputData = {
  title: string
  desc: string
  homeLink: string
  cities: string[]
  profitMode: string
  workingMode: string
  socialInfo: TSocialInfo[]
  techstacks: string[]
}

export type TTechCommunities = {
  lang: TCommunity[]
  framework: TCommunity[]
  database: TCommunity[]
  devOps: TCommunity[]
  design: TCommunity[]
}
