import type { TTag } from '@/spec'

export type TMenu = {
  id: string
  title: string
  icon?: string
  options: TTag[]
}[]
