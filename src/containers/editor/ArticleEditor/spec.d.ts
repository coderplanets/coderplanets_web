import type { TID } from '@/spec'

export type TTexts = {
  holder: {
    title: string
    body: string
  }
}

export type TEditData = {
  title: string
  body: string
  copyRight: string
  isQuestion?: boolean
  linkAddr?: string

  company?: string
  companyLink?: string

  articleTags: [TID]
}
