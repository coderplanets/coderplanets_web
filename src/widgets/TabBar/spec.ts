import { ReactNode } from 'react'

export type TTabItem = {
  title?: string
  raw: string
  alias?: string
  icon?: string | ReactNode
  localIcon?: string
  index?: number
}
