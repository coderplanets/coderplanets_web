import { FC, memo } from 'react'

import { isString } from '@/utils/validator'
import { Wrapper } from './styles/custom_bg'

type TBackgroundEffect =
  | {
      bgImage: string
      bgColor?: string
      bgSize?: 'contain' | 'cover'
    }
  | string

const ComstomBg: FC = () => {
  const effects = {
    // linear colors
    a: `background-image: linear-gradient(
      45deg,
      hsl(240deg 100% 20%) 0%,
      hsl(289deg 100% 21%) 11%,
      hsl(315deg 100% 27%) 22%,
      hsl(329deg 100% 36%) 33%,
      hsl(337deg 100% 43%) 44%,
      hsl(357deg 91% 59%) 56%,
      hsl(17deg 100% 59%) 67%,
      hsl(34deg 100% 53%) 78%,
      hsl(45deg 100% 50%) 89%,
      hsl(55deg 100% 50%) 100%
    )`,
    b: `
      background: #2c3e50; /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #2c3e50, #fd746c); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #2c3e50, #fd746c);
    `,
    c: `
    // 3: https://codepen.io/tennowman/pen/AYRqzO
    background-color: #269;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.5) 2px,
        transparent 2px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.5) 2px, transparent 2px),
      linear-gradient(rgba(255, 255, 255, 0.28) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.28) 1px, transparent 1px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    `,
    d: `
    // 4: https://codepen.io/thebabydino/pen/dMaRYx
    background-image: linear-gradient(90deg, #fff 0.25em, transparent 0),
      linear-gradient(90deg, #36599d 50%, transparent 0),
      linear-gradient(90deg, #643140 50%, #0a226a 0);
    background-size: 2.25em, 4.5em, 9em;
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
    h: {
      bgImage: '/bg/Waimakariri.png',
    },
    i: {
      bgImage: '/bg/Doubs.png',
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
    y: {
      bgImage: '/bg/waves.png',
    },
  }

  // e, h,
  // y, g
  const effect = effects.g

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
