import { FC, memo } from 'react'
import { keys } from 'ramda'

import type { TWallpaper } from '@/spec'
import { parseWallpaper2 } from '@/utils/wallpaper'

import { Wrapper, Block, ColorBall } from './styles/gradient_group'

import { setWallpaper } from './logic'

type TProps = {
  wallpaper: string
  gradientWallpapers: Record<string, TWallpaper>
}

const PicGroup: FC<TProps> = ({ wallpaper, gradientWallpapers }) => {
  const gradientKeys = keys(gradientWallpapers)

  return (
    <Wrapper>
      {gradientKeys.map((name) => (
        <Block
          key={name}
          $active={name === wallpaper}
          onClick={() => setWallpaper(name)}
        >
          <ColorBall
            background={parseWallpaper2(gradientWallpapers, name).background}
          />
        </Block>
      ))}
    </Wrapper>
  )
}

export default memo(PicGroup)
