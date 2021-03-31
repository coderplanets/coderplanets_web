import type { TCommunity } from './index'
import type { TUser } from './account'

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
  origialCommunity?: TCommunity
  commentsParticipators?: TUser
  // ...
}

export type TJob = {
  id: string
  title: string
  body: string
  author: {
    id: string
    login: string
    nickname: string
    avatar: string
  }
}

export type TPagedJobs = {
  entries: TJob[]
  totalCount: number
  pageNumber: number
  pageSize: number
  totalPages: number
}
