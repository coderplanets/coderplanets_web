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
  bgSize?: 'contain' | 'cover' | 'auto'
  // for ts check
  colors?: string[]
}

export type TWallpaper = TWallpaperGradient | TWallpaperPic
