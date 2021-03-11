import { IRootStore as RootStoreInterface } from '@/stores/RootStore'

export type IRootStore = RootStoreInterface

export type TCommunity = {
  id: string
  title: string
  logo: string
  raw: string
}

export type TTheme = ((obj: any) => unknown) | string

// google analytis format
export type GA_EVENT = {
  action: string
  category: string
  label: string
  value: string
}
