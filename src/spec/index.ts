import { IRootStore as RootStoreInterface } from '@/stores/RootStore'

export type TThemeName =
  | 'cyan'
  | 'solarizedDark'
  | 'purple'
  | 'yellow'
  | 'github'
  | 'Green'
  | 'ironGreen'
  | 'monokai'

export type TTestable = {
  testid: string
}

export type TActive = {
  active?: boolean
  show?: boolean
  visible?: boolean
}

export type TSpace = {
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type IRootStore = RootStoreInterface

// c# like
export type Nullable<T> = T | null

export type TCommunity = {
  id: string
  title: string
  logo: string
  raw: string
}

export type TUser = {
  id: string
  login: string
  nickname: string
  avatar: string
}
export type TAccount = TUser & {
  customization?: {
    theme: string
    bannerLayout: string
  }
  // ...
}
export type TArticle = {
  id: string
  title: string
  body: string
  author: {
    id: string
    login: string
    nickname: string
    avatar: string
  }
  // ...
}

export type TViewing = {
  community: TCommunity
  post: TArticle
}

// export type TTheme = ((obj: any) => unknown) | string
export type TTheme = any
// export type TTheme = string

// google analytis format
export type GA_EVENT = {
  action: string
  category: string
  label: string
  value: string
}

export type TSEO = {
  url: string
  title: string
  description: string
}

export type TButtonSize = 'tiny' | 'small' | 'medium' | 'large'

// button
export type TButton = {
  size: TButtonSize
  active: boolean
  ghost?: boolean
  disabled?: boolean
  noBorder?: boolean
}
