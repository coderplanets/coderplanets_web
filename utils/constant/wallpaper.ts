import type { TWallpaper, TWallpaperType } from '@/spec'

const DIR = '/wallpaper'

export const WALLPAPER_TYPE = {
  PATTERN: 'pattern',
  GRADIENT: 'gradient',
  CUSTOM: 'custom',
  NONE: 'none',
} as Record<Uppercase<TWallpaperType>, TWallpaperType>

export const PATTERN_WALLPAPER = {
  // bubbles: {
  //   bgImage: `${DIR}/bubbles.png`,
  // },
  limones: {
    bgImage: `${DIR}/limones.jpeg`,
  },
  mataura: {
    bgImage: `${DIR}/mataura.png`,
    bgSize: 'cover',
  },
  // curves: {
  //   bgImage: `${DIR}/curves.png`,
  //   bgColor: '#050139', // backgroundBg or fallback
  // },
  newspaper: {
    bgImage: `${DIR}/newspaper.jpeg`,
  },
  rainbow: {
    bgImage: `${DIR}/rainbow.jpeg`,
  },
  // fishes: {
  //   bgImage: `${DIR}/fishes.jpeg`,
  // },
  // space: {
  //   bgImage: `${DIR}/space.svg`,
  //   bgColor: '#002630',
  // },
  earth: {
    bgImage: `${DIR}/earth.jpg`,
  },
  code: {
    bgImage: `${DIR}/code.jpg`,
  },
  // elec: {
  //   bgImage: `${DIR}/elec.jpg`,
  // },
  co2: {
    bgImage: `${DIR}/co2.jpeg`,
  },
  cartoon: {
    bgImage: `${DIR}/cartoon.jpeg`,
  },
  // istanbul: {
  //   bgImage: `${DIR}/istanbul.jpeg`,
  // },
}

// demo: `
//     background: url(${DIR}/patterns/1.png) repeat, linear-gradient(to bottom, #C6D183, #72B58C);
//   `,

const DEFAULT_GRADIENT_EFFECT = {
  hasPattern: false,
  hasBlur: false,
  direction: 'bottom',
}

export const GRADIENT_WALLPAPER = {
  // linear gradian
  // background: #2c3e50; /* fallback for old browsers */
  // background: -webkit-linear-gradient(#C6D183, #72B58C); /* Chrome 10-25, Safari 5.1-6 */

  green: {
    colors: ['#C6D183', '#72B58C'],
    ...DEFAULT_GRADIENT_EFFECT,
    hasPattern: true,
  },
  purple: {
    colors: ['#BBA4C9', '#8390CD'],
    ...DEFAULT_GRADIENT_EFFECT,
  },
  yellow: {
    colors: ['#F7CE7E', '#E17D43'],
    ...DEFAULT_GRADIENT_EFFECT,
  },
  cyan: {
    colors: ['#568A79', '#295054'],
    ...DEFAULT_GRADIENT_EFFECT,
  },
  red: {
    colors: ['#E76B66', '#6E3837'],
    ...DEFAULT_GRADIENT_EFFECT,
  },
  blue: {
    colors: ['#85AADA', '#274AA1'],
    ...DEFAULT_GRADIENT_EFFECT,
  },
  pink: {
    colors: ['#FBEFDE', '#D8B9E3'],
    ...DEFAULT_GRADIENT_EFFECT,
    hasBlur: true,
  },
} as Record<string, TWallpaper>

export const WALLPAPER = {
  ...PATTERN_WALLPAPER,
  ...GRADIENT_WALLPAPER,
}
