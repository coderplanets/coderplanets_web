import { TRootStore as RootStoreInterface } from '@/stores/RootStore'

export type TRootStore = RootStoreInterface

// c# like
export type Nullable<T> = T | null

export type TCommunity = {
  id: string
  title: string
  logo: string
  raw: string
}

export type TAccount = {
  id: string
  login: string
  nickname: string
  avatar: string
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

export type TTheme = ((obj: any) => unknown) | string

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
