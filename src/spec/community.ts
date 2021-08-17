export type TCommunity = {
  id?: string
  index?: number
  title?: string
  logo?: string
  raw: string
  subscribersCount?: number
  viewerHasSubscribed?: boolean
  contributesDigest?: number[]
  desc?: string
  threads?: {
    title: string
    raw: string
  }[]
}

export type TPagedCommunities = {
  entries: TCommunity[]
  totalCount?: number
}

export type TTag = {
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
