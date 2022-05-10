import { FC, memo } from 'react'

import { isString } from '@/utils/validator'
import { Wrapper } from './styles/custom_bg'

type TBackgroundEffect =
  | {
      bgImage: string
      bgColor?: string
      bgSize?: 'contain' | 'cover' | 'auto'
    }
  | string

const ComstomBg: FC = () => {
  const effects = {
    // linear colors
    b: `
      background: #2c3e50; /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #2c3e50, #fd746c); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #2c3e50, #fd746c);
    `,

    // custom-images
    e: {
      bgImage: '/bg/Waihou.png',
    },
    f: {
      bgImage: '/bg/Limones.jpeg',
    },
    g: {
      bgImage: '/bg/Mataura.png',
      bgSize: 'cover',
    },
    j: {
      bgImage: '/bg/Taieri.png',
      bgColor: '#050139', // backgroundBg or fallback
    },
    k: {
      bgImage: '/bg/Squares.png',
    },
    m: {
      bgImage: '/bg/Antiquitarian.jpeg',
    },
    l: {
      bgImage: '/bg/CyBeRGaTa.jpeg',
    },
    o: {
      bgImage: '/bg/Fishes.jpeg',
    },
    x: {
      bgImage: '/bg/space.svg',
      bgColor: '#002630', // backgroundBg
    },
    tg: {
      bgImage: '/bg/tg-green.jpg',
      bgSize: 'auto',
    },
    tg2: {
      bgImage: '/bg/tg-earth.jpg',
    },
    tg3: {
      bgImage: '/bg/tg-code.jpg',
    },
    tg4: {
      bgImage: '/bg/tg-elec.jpg',
    },
    tg5: {
      bgImage: '/bg/tg-co2.jpeg',
    },
    tg6: {
      bgImage: '/bg/tg-cartoon.jpeg',
    },
    tg7: {
      bgImage: '/bg/tg-istanbul.jpeg',
    },
  }

  const effect = effects.tg

  // for linear/solid background colors
  if (isString(effect)) {
    // @ts-ignore
    return <Wrapper effect={effect as string} />
  }

  // @ts-ignore
  const { bgImage, bgColor = '', bgSize = 'contain' } = effect

  // for custom image/svg
  // for use style object not passing props
  // @link see https://github.com/styled-components/styled-components/issues/3315#issuecomment-885977691
  return (
    <Wrapper
      effect={`background-color: ${bgColor}; background-size: ${bgSize}`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    />
  )
}

export default memo(ComstomBg)
