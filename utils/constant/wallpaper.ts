const DIR = '/wallpaper'

const WALLPAPER = {
  // parttens
  bubbles: {
    bgImage: `${DIR}/bubbles.png`,
  },
  limones: {
    bgImage: `${DIR}/limones.jpeg`,
  },
  mataura: {
    bgImage: `${DIR}/mataura.png`,
    bgSize: 'cover',
  },
  curves: {
    bgImage: `${DIR}/curves.png`,
    bgColor: '#050139', // backgroundBg or fallback
  },
  newspaper: {
    bgImage: `${DIR}/newspaper.jpeg`,
  },
  rainbow: {
    bgImage: `${DIR}/rainbow.jpeg`,
  },
  fishes: {
    bgImage: `${DIR}/fishes.jpeg`,
  },
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
  elec: {
    bgImage: `${DIR}/elec.jpg`,
  },
  co2: {
    bgImage: `${DIR}/co2.jpeg`,
  },
  cartoon: {
    bgImage: `${DIR}/cartoon.jpeg`,
  },
  istanbul: {
    bgImage: `${DIR}/istanbul.jpeg`,
  },

  // linear gradian
  // background: #2c3e50; /* fallback for old browsers */
  // background: -webkit-linear-gradient(#C6D183, #72B58C); /* Chrome 10-25, Safari 5.1-6 */
  green: `
      background: url(${DIR}/patterns/1.png) repeat, linear-gradient(to bottom, #C6D183, #72B58C);
    `,
}

export default WALLPAPER
