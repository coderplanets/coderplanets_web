import { IRootStore as RootStoreInterface } from '@/stores/RootStore'

// most of the cycle import error is caused by @/types, which is fine
// since @/types is used only when TS compiler, will not effect production code
// @ts-ignore
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
