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
}

export type TWallpaper = TWallpaperGradient & TWallpaperPic
