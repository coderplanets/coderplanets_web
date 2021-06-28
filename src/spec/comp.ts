import { TSIZE } from './size'

// @/components/button
export type TButton = {
  size?: TSIZE
  active?: boolean
  ghost?: boolean
  disabled?: boolean
  noBorder?: boolean
  onClick?: (key?: string) => void
}

// @/components/FiltersMenu
export type TFiltersMenuItems = {
  id: string
  title: string
  icon: string
  options: {
    id: string
    title: string
  }[]
}[]
