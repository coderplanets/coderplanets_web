import type {
  TWallpaper,
  TColorName,
  TPostLayout,
  TChangelogLayout,
  TBannerLayout,
  TTag,
} from '@/spec'

export type TTab =
  | 'overview'
  // basic-info
  | 'basic_info'
  | 'ui'
  | 'threads'
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
}

export type TSettingField =
  | 'primaryColor'
  | 'postLayout'
  | 'bannerLayout'
  | 'changelogLayout'
  | 'tag'