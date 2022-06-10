import { isEmpty, keys, includes } from 'ramda'
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
  if (isEmpty(name)) {
    return {
      effect: '',
      background: '',
    }
  }

  return _parseWallpaper(wallpapers[name])
}

export const parseWallpaperRaw = (wallpaper: TWallpaper): TWallpaperFmt => {
  return _parseWallpaper(wallpaper)
}

export const getWallpaperType = (name: string): TWallpaperType => {
  if (isEmpty(name)) return WALLPAPER_TYPE.NONE
  if (includes(name, keys(PATTERN_WALLPAPER))) return WALLPAPER_TYPE.PATTERN

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
  const colors = gradient.colors.join(',')
  // let background = `linear-gradient(to ${direction}, ${colors})`
  let background = `linear-gradient(to ${direction}, ${colors})`

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
  if (!pic) {
    // for BLANK background settings
    return {
      effect: '',
      background: '',
    }
  }

  const { bgImage, bgColor = '', bgSize = 'contain', hasBlur } = pic
  const background = `url(${bgImage})`

  const blur = hasBlur ? 'filter: blur(3px)' : ''
  const effect = `background-color: ${bgColor}; background-size: ${bgSize} !important; ${blur}`

  return {
    effect,
    background,
  }
}
