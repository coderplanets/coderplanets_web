import type { ReactNode } from 'react'

import type {
  TWallpaper,
  TColorName,
  TPostLayout,
  TChangelogLayout,
  TBannerLayout,
  TTag,
} from '@/spec'

type TMenuGroupName = 'BASIC' | 'ANALYSIS' | 'MANAGEMENT' | 'INTEGRATE'

export type TMenuGroup = {
  title: string
  icon: ReactNode
  children: TMenuItem[]
}
type TMenuItem = { title: string; raw: TTab }

export type TMenu = {
  [k: TMenuGroupName]: TMenuGroup
}

export type TTab =
  | 'overview'
  // basic-info
  | 'basic_info'
  | 'ui'
  | 'threads'
  | 'alias'
  | 'domain'
  // analysis
  // --
  // contents
  | 'tags'
  | 'post'
  | 'kanban'
  | 'changelog'
  | 'help'
  | 'blackhouse'
  // integrates
  | 'third_part'
  | 'admins'
  | 'widgets'

export type TTagSettings = {
  tags: TTag[]
  editingTag: TTag
}

export type TAlias = {
  raw: string
  name: string
  original?: string
}
export type TAliasSettings = {
  alias: TAlias[]
  editingAlias: TAlias
}

export type TUiSettings = {
  wallpaper: TWallpaper
  primaryColor: TColorName
  bannerLayout: TBannerLayout
  postLayout: TPostLayout
  changelogLayout: TChangelogLayout
}

export type TTouched = {
  primaryColor: boolean
  bannerLayout: boolean
  postLayout: boolean
  changelogLayout: boolean
  // sidebar
  ui: boolean
}

export type TSettingField =
  | 'primaryColor'
  | 'postLayout'
  | 'bannerLayout'
  | 'changelogLayout'
  | 'tag'
  | 'alias'
