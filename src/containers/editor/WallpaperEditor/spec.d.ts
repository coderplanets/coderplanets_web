import type { TWallpaper, TWallpaperType } from '@/spec'

export type TWallpaperData = {
  wallpaper: string
  gradientWallpapers: Record<string, TWallpaper>
  patternWallpapers: Record<string, TWallpaper>
  wallpaperType: TWallpaperType
  hasPattern: boolean
  hasBlur: boolean
}

export type TTab = 'buildin' | 'custom'
