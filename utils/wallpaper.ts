import { keys, includes } from 'ramda'
import { PATTERN_WALLPAPER, WALLPAPER_TYPE } from '@/constant'

import type {
  TWallpaperFmt,
  TWallpaperGradient,
  TWallpaperPic,
  TWallpaper,
  TWallpaperType,
} from '@/spec'

/**
 * parse wallpaper both for gradient and picture background
 */
export const parseWallpaper = (
  wallpapers: Record<string, TWallpaper>,
  name: string,
): TWallpaperFmt => {
  return _parseWallpaper(wallpapers[name])
}

export const getWallpaperType = (name: string): TWallpaperType => {
  if (includes(name, keys(PATTERN_WALLPAPER))) {
    return WALLPAPER_TYPE.PATTERN
  }
  return WALLPAPER_TYPE.GRADIENT
}

/**
 * parse wallpaper both for gradient and picture background
 */
const _parseWallpaper = (wallpaper: TWallpaper): TWallpaperFmt => {
  // @ts-ignore
  return wallpaper?.colors
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
  const { bgImage, bgColor = '', bgSize = 'contain', hasBlur } = pic
  const background = `url(${bgImage})`

  const blur = hasBlur ? 'filter: blur(3px)' : ''
  const effect = `background-color: ${bgColor}; background-size: ${bgSize} !important; ${blur}`

  return {
    effect,
    background,
  }
}
