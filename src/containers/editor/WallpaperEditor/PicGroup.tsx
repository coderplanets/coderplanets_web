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

import { setCurrent } from './logic'

type TProps = {
  current: string
}

const PicGroup: FC<TProps> = ({ current }) => {
  const patternKeys = keys(PATTERN_WALLPAPER)

  return (
    <Wrapper>
      {patternKeys.map((name) => (
        <Block key={name} $active={name === current}>
          {name === current && (
            <ActiveSign>
              <CheckIcon />
            </ActiveSign>
          )}
          <Image
            src={PATTERN_WALLPAPER[name].bgImage}
            onClick={() => setCurrent(name)}
          />
        </Block>
      ))}
    </Wrapper>
  )
}

export default memo(PicGroup)
