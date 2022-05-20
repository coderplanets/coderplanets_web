import { WALLPAPER } from '@/constant'
import type {
  TWallpaperFmt,
  TWallpaperGradient,
  TWallpaperPic,
  TWallpaper,
} from '@/spec'

/**
 * parse wallpaper both for gradient and picture background
 */
export const parseWallpaper = (name: string): TWallpaperFmt => {
  return _parseWallpaper(WALLPAPER[name])
}

export const parseWallpaper2 = (
  wallpapers: Record<string, TWallpaper>,
  name: string,
): TWallpaperFmt => {
  return _parseWallpaper(wallpapers[name])
}

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
