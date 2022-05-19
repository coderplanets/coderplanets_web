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

export const GRADIENT_WALLPAPER = {
  // linear gradian
  // background: #2c3e50; /* fallback for old browsers */
  // background: -webkit-linear-gradient(#C6D183, #72B58C); /* Chrome 10-25, Safari 5.1-6 */
  green: `
      background: url(${DIR}/patterns/1.png) repeat, linear-gradient(to bottom, #C6D183, #72B58C);
    `,
  purple: `
    background: url(${DIR}/patterns/1.png) repeat, linear-gradient(to bottom, #BBA4C9, #8390CD);
  `,
  yellow: `
    background: url(${DIR}/patterns/1.png) repeat, linear-gradient(to bottom, #F7CE7E, #E17D43);
  `,
  cyan: `
    background: url(${DIR}/patterns/1.png) repeat, linear-gradient(to bottom, #6EC0C2, #222937);
  `,
  red: `
    background: url(${DIR}/patterns/1.png) repeat, linear-gradient(to bottom, #E76B66, #6E3837);
  `,
  blue: `
    background: url(${DIR}/patterns/1.png) repeat, linear-gradient(to bottom, #85AADA, #274AA1);
  `,
  pink: `
    background: url(${DIR}/patterns/1.png) repeat, linear-gradient(to bottom, #D6C4BA, #C5BADB);
  `,
}

export const WALLPAPER = {
  ...PATTERN_WALLPAPER,
  ...GRADIENT_WALLPAPER,
}
