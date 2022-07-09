import type { ReactNode } from 'react'

import type {
  TWallpaper,
  TColorName,
  TPostLayout,
  TChangelogLayout,
  TBrandLayout,
  TBannerLayout,
  TBannerNotifyLayout,
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
  saving: boolean
  tags: TTag[]
  editingTag: TTag
}

export type TAlias = {
  raw: string
  name: string
  original?: string
  suggestions?: string[]
}
export type TAliasSettings = {
  saving: boolean
  alias: TAlias[]
  editingAlias: TAlias
}

export type TUiSettings = {
  saving: boolean
  wallpaper: TWallpaper
  primaryColor: TColorName
  brandLayout: TBrandLayout
  bannerLayout: TBannerLayout
  bannerNotifyLayout: TBannerNotifyLayout
  postLayout: TPostLayout
  changelogLayout: TChangelogLayout
}

export type TTouched = {
  primaryColor: boolean
  brandLayout: boolean
  bannerLayout: boolean
  bannerNotifyLayout: boolean
  postLayout: boolean
  changelogLayout: boolean
  alias: boolean
  tags: boolean
  // sidebar
  ui: boolean
}

export type TSettingField =
  | 'primaryColor'
  | 'postLayout'
  | 'brandLayout'
  | 'bannerLayout'
  | 'bannerNotifyLayout'
  | 'changelogLayout'
  | 'tag'
  | 'alias'
