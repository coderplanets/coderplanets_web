import { FC, memo } from 'react'

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
        <Image src="/bg/Limones.jpeg" />
      </Block>
      <Block>
        <Image src="/bg/Squares.png" />
      </Block>
      <Block>
        <Image src="/bg/Antiquitarian.jpeg" />
      </Block>
      <Block>
        <Image src="/bg/CyBeRGaTa.jpeg" />
      </Block>
    </Wrapper>
  )
}

export default memo(PicGroup)
