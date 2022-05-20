const DIR = '/wallpaper'

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
  // newspaper: {
  //   bgImage: `${DIR}/newspaper.jpeg`,
  // },
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
  direction: 'to bottom',
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
    colors: ['#6EC0C2', '#222937'],
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
    colors: ['#D6C4BA', '#C5BADB'],
    ...DEFAULT_GRADIENT_EFFECT,
    hasBlur: true,
  },
}

export const WALLPAPER = {
  ...PATTERN_WALLPAPER,
  ...GRADIENT_WALLPAPER,
}
