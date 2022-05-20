import { FC, memo } from 'react'
import { keys } from 'ramda'

import { GRADIENT_WALLPAPER } from '@/constant'
import { parseWallpaperByName } from '@/utils/wallpaper'

import {
  Wrapper,
  Block,
  // Image,
  // ActiveSign,
  // CheckIcon,
} from './styles/gradient_group'

// import { setCurrent } from './logic'

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
          background={parseWallpaperByName(name).background}
        >
          {/* {name === current && (
            <ActiveSign>
              <CheckIcon />
            </ActiveSign>
          )} */}
          {/* <Image
            src={GRADIENT_WALLPAPER[name].bgImage}
            bgColor={GRADIENT_WALLPAPER[name].bgColor}
            onClick={() => setCurrent(name)}
          /> */}
        </Block>
      ))}
    </Wrapper>
  )
}

export default memo(PicGroup)
