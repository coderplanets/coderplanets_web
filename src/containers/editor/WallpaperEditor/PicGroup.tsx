import { FC, memo } from 'react'
import { keys } from 'ramda'
import { PATTERN_WALLPAPER } from '@/constant'

import {
  Wrapper,
  Block,
  Image,
  ActiveSign,
  CheckIcon,
} from './styles/pic_group'

import { setWallpaper } from './logic'

type TProps = {
  wallpaper: string
}

const PicGroup: FC<TProps> = ({ wallpaper }) => {
  const patternKeys = keys(PATTERN_WALLPAPER)

  return (
    <Wrapper>
      {patternKeys.map((name) => (
        <Block key={name} $active={name === wallpaper}>
          {name === wallpaper && (
            <ActiveSign>
              <CheckIcon />
            </ActiveSign>
          )}
          <Image
            src={PATTERN_WALLPAPER[name].bgImage}
            onClick={() => setWallpaper(name)}
          />
        </Block>
      ))}
    </Wrapper>
  )
}

export default memo(PicGroup)
