export type TWallpaperFmt = {
  effect: string
  background: string
}

export type TWallpaperGradient = {
  colors?: string[]
  hasPattern?: boolean
  hasBlur?: boolean
  direction?: string
}

export type TWallpaperPic = {
  bgImage?: string
  bgColor?: string
  bgSize?: string // 'contain' | 'cover' | 'auto'
  hasBlur?: boolean
}

export type TWallpaper = TWallpaperGradient | TWallpaperPic

export type TWallpaperType = 'pattern' | 'gradient' | 'custom' | 'none'
