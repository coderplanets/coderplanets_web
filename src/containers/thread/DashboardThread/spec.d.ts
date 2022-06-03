import type { TWallpaper } from '@/spec'

export type TTab =
  | 'overview'
  | 'basic_info'
  | 'ui'
  | 'threads'
  | 'domain'
  | 'third_part'
  | 'admins'
  | 'widgets'

export type TUiSettings = {
  wallpaper: TWallpaper
}
