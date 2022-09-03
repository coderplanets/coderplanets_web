import type { TID } from '@/spec'

export type TView = string

export type TSettingOption = {
  fontSize: string
  animateType: string
}

export type TInterval = '3s' | '5s' | '10s'

export type TDrinkItem = {
  title?: string
  text: string
  reference?: string
  images?: string[]
  imageSize?: string
  num?: number
  unit?: string
}

export type TDrinkCategory = {
  id: TID
  icon: string
  title: string
  desc: string
  upvoteAlias: string
  entries: TDrinkItem[]
}

export type TPagiState = {
  curIdx: number
  total: number
}
