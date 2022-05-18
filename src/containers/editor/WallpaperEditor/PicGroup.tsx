import { FC, memo } from 'react'
import { WALLPAPER } from '@/constant'

import {
  Wrapper,
  Block,
  Image,
  ActiveSign,
  CheckIcon,
} from './styles/pic_group'

const PicGroup: FC = () => {
  return (
    <Wrapper>
      <Block $active>
        <ActiveSign>
          <CheckIcon />
        </ActiveSign>
        <Image src={WALLPAPER.bubbles.bgImage} />
      </Block>
      <Block>
        <Image
          src={WALLPAPER.curves.bgImage}
          bgColor={WALLPAPER.curves.bgColor}
        />
      </Block>
      <Block>
        <Image src={WALLPAPER.cartoon.bgImage} />
      </Block>
      <Block>
        <Image src={WALLPAPER.rainbow.bgImage} />
      </Block>
      <Block>
        <Image src={WALLPAPER.earth.bgImage} />
      </Block>
      <Block>
        <Image src={WALLPAPER.co2.bgImage} />
      </Block>
      <Block>
        <Image src={WALLPAPER.code.bgImage} />
      </Block>
    </Wrapper>
  )
}

export default memo(PicGroup)
