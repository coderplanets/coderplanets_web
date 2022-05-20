import { WALLPAPER } from '@/constant'

type TWallpaperFmt = {
  effect: string
  background: string
}

type TWallpaperGradient = {
  colors?: string[]
  hasPattern?: boolean
  hasBlur?: boolean
  direction?: string
}

type TWallpaperPic = {
  bgImage?: string
  bgColor?: string
  bgSize?: 'contain' | 'cover' | 'auto'
  // for ts check
  colors?: string[]
}

type TWallpaper = TWallpaperGradient | TWallpaperPic

/**
 * parse wallpaper both for gradient and picture background
 */
export const parseWallpaper = (name: string): TWallpaperFmt => {
  return _parseWallpaper(WALLPAPER[name])
}

export const holder = 1

/**
 * parse wallpaper both for gradient and picture background
 */
const _parseWallpaper = (wallpaper: TWallpaper): TWallpaperFmt => {
  return wallpaper.colors
    ? _parseGradientBackground(wallpaper)
    : _parsePicBackground(wallpaper)
}

const _parseGradientBackground = (
  gradient: TWallpaperGradient,
): TWallpaperFmt => {
  const DIR = '/wallpaper'
  const { direction, hasPattern, hasBlur } = gradient
  let background = `linear-gradient(${direction}, ${gradient.colors.join(',')})`

  const patternPic = `${DIR}/patterns/1.png`
  background = hasPattern
    ? `url(${patternPic}) repeat, ${background}`
    : background

  const effect = hasBlur ? 'filter: blur(3px)' : ''

  return {
    effect,
    background,
  }
}

const _parsePicBackground = (pic: TWallpaperPic): TWallpaperFmt => {
  const { bgImage, bgColor = '', bgSize = 'contain' } = pic
  const background = `url(${bgImage})`

  const effect = `background-color: ${bgColor}; background-size: ${bgSize} !important;`

  return {
    effect,
    background,
  }
}
