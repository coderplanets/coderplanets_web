export type TCommunity = {
  id?: string
  title: string
  logo?: string
  raw: string
  subscribersCount?: number
  viewerHasSubscribed?: boolean
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
  id: number
  title: string
  color: string
  group?: string
}
