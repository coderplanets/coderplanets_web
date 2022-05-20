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
export const parseWallpaperByName = (name: string): TWallpaperFmt => {
  return parseWallpaper(WALLPAPER[name])
}

/**
 * parse wallpaper both for gradient and picture background
 */
export const parseWallpaper = (wallpaper: TWallpaper): TWallpaperFmt => {
  return wallpaper.colors
    ? gotGradientBackground(wallpaper)
    : getPicBackground(wallpaper)
}

const gotGradientBackground = (gradient: TWallpaperGradient): TWallpaperFmt => {
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

const getPicBackground = (pic: TWallpaperPic): TWallpaperFmt => {
  const { bgImage, bgColor = '', bgSize = 'contain' } = pic
  const background = `url(${bgImage})`

  const effect = `background-color: ${bgColor}; background-size: ${bgSize}`

  return {
    effect,
    background,
  }
}
