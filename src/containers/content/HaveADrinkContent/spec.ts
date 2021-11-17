import type { TID } from '@/spec'

export type TView = string

export type TSettingOption = {
  fontSize: '24px' | '27px'
  animateType: 'fade' | 'bounce'
}

export type TInterval = '3s' | '5s' | '10s'

export type TDrinkItem = {
  text: string
  reference?: string
  images?: string[]
}

export type TDrinkCategory = {
  id: TID
  icon: string
  title: string
  desc: string
  upvoteAlias: string
  entries: TDrinkItem[]
}
