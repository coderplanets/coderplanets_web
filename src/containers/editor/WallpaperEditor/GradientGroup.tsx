import { FC, memo } from 'react'
import { keys } from 'ramda'

import { GRADIENT_WALLPAPER } from '@/constant'
import { parseWallpaper } from '@/utils/wallpaper'

import { Wrapper, Block, ColorBall } from './styles/gradient_group'

import { setCurrent } from './logic'

type TProps = {
  current: string
}

const PicGroup: FC<TProps> = ({ current }) => {
  const gradientKeys = keys(GRADIENT_WALLPAPER)

  return (
    <Wrapper>
      {gradientKeys.map((name) => (
        <Block
          key={name}
          $active={name === current}
          onClick={() => setCurrent(name)}
        >
          <ColorBall background={parseWallpaper(name).background} />
        </Block>
      ))}
    </Wrapper>
  )
}

export default memo(PicGroup)
