import { IRootStore as RootStoreInterface } from '@/stores/RootStore'

export type IRootStore = RootStoreInterface

export type TCommunity = {
  id: string
  title: string
  logo: string
  raw: string
}
