import { FC, memo } from 'react'

import { WALLPAPER } from '@/constant'
import { isString } from '@/utils/validator'
import { Wrapper } from './styles/wallpaper'

// type TBackgroundEffect =
//   | {
//       bgImage: string
//       bgColor?: string
//       bgSize?: 'contain' | 'cover' | 'auto'
//     }
//   | string

const Wallpaper: FC = () => {
  const effect = WALLPAPER.green

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

export default memo(Wallpaper)
