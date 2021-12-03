import type { TID } from './utils'

export type TCommunity = {
  id?: string
  index?: number
  title?: string
  logo?: string
  raw: string
  subscribersCount?: number
  articlesCount?: number
  viewerHasSubscribed?: boolean
  contributesDigest?: number[]
  editorsCount?: number
  desc?: string
  meta?: {
    postsCount: number
    jobsCount: number
    worksCount: number
    blogsCount: number
    radarsCount: number
  }
  threads?: {
    title: string
    raw: string
  }[]
}

export type TPagedCommunities = {
  entries: TCommunity[]
  totalCount?: number
  pageNumber?: number
  pageSize?: number
}

export type TTag = {
  id?: string
  index?: number
  raw: string
  title?: string
  color?: string
  group?: string
}

export type TFilterTag = {
  id?: string
  index?: number
  raw: string
  title?: string
  color?: string
  group?: string
}

// for cool-guide, awesome sort thing
export type TNaviTag = {
  id: string
  index?: number
  raw: string
  title?: string
  color?: string
  group?: string
  //
  icon?: string
  childMenu?: TNaviTag[]
  extra?: string[]
  fixedIcon?: string
  pinNumber?: number
  displayType?: string
}

export type TGroupedTags = {
  [group: string]: TTag[]
}[]

export type TCategory = {
  id: TID
  title: string
  raw: string
  index: number
  // author: T
}
