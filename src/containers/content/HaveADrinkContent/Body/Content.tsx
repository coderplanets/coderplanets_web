import { FC, memo } from 'react'

import Linker from '@/widgets/Linker'

import type { TDrinkItem } from '../spec'
import {
  Wrapper,
  TextWrapper,
  ImageContentWrapper,
  Image,
  Text,
} from '../styles/body/content'

type TProps = {
  item: TDrinkItem
}

const Content: FC<TProps> = ({ item }) => {
  const refLink = item.reference

  if (item.images && item.images.length === 1) {
    const imageSrc = item.images[0]

    return (
      <ImageContentWrapper>
        <Image src={imageSrc} />
        {refLink && <Linker src={refLink} hint="参考" top={8} />}
        <Text>{item.text}</Text>
      </ImageContentWrapper>
    )
  }

  return (
    <Wrapper>
      <TextWrapper>{item.text}</TextWrapper>
      {refLink && <Linker src={refLink} hint="参考" top={8} />}
    </Wrapper>
  )
}

export default memo(Content)
