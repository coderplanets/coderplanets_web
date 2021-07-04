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
  title?: string
  color?: string
  group?: string
}
