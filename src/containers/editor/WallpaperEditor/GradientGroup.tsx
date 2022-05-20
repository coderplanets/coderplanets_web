import { FC, memo } from 'react'
import { keys } from 'ramda'

import type { TWallpaperGradient } from '@/spec'
import { parseWallpaper } from '@/utils/wallpaper'

import { Wrapper, Block, BallWrapper, ColorBall } from './styles/gradient_group'

import { setWallpaper } from './logic'

type TProps = {
  wallpaper: string
  gradientWallpapers: Record<string, TWallpaperGradient>
}

const PicGroup: FC<TProps> = ({ wallpaper, gradientWallpapers }) => {
  const gradientKeys = keys(gradientWallpapers)

  return (
    <Wrapper>
      {gradientKeys.map((name) => (
        <Block key={name}>
          <BallWrapper
            $active={name === wallpaper}
            onClick={() => setWallpaper(name)}
          >
            <ColorBall
              $active={name === wallpaper}
              background={parseWallpaper(gradientWallpapers, name).background}
            />
          </BallWrapper>
        </Block>
      ))}
    </Wrapper>
  )
}

export default memo(PicGroup)
