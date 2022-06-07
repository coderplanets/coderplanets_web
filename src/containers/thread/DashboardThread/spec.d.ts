import type {
  TWallpaper,
  TColorName,
  TPostLayout,
  TChangelogLayout,
  TBannerLayout,
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

export type TUiSettings = {
  wallpaper: TWallpaper
  primaryColor: TColorName
  bannerLayout: TBannerLayout
  postLayout: TPostLayout
  changelogLayout: TChangelogLayout
}
