import type { TSize } from './size'

// @/widgets/button
export type TButton = {
  size?: TSize
  active?: boolean
  space?: number
  ghost?: boolean
  disabled?: boolean
  noBorder?: boolean
  onClick?: (key?: string) => void
}

// @/widgets/FiltersMenu
export type TFiltersMenuItems = {
  id: string
  title: string
  icon: string
  options: {
    id: string
    title: string
  }[]
}[]
