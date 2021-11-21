import { FC, memo } from 'react'

import Linker from '@/widgets/Linker'

import type { TDrinkItem } from '../spec'
import {
  Wrapper,
  Title,
  Desc,
  TextWrapper,
  ImageContentWrapper,
  NumberContentWrapper,
  NumberWrapper,
  Number,
  Unit,
  Image,
  Text,
} from '../styles/body/content'

type TProps = {
  item: TDrinkItem
}

const Content: FC<TProps> = ({ item }) => {
  const refLink = item.reference

  if (item.num) {
    const { num, unit } = item

    return (
      <NumberContentWrapper>
        <NumberWrapper>
          <Number>{num}</Number>
          <Unit>{unit}</Unit>
        </NumberWrapper>
        <Desc>{item.text}</Desc>
        {refLink && <Linker src={refLink} hint="参考" top={8} />}
      </NumberContentWrapper>
    )
  }

  if (item.images && item.images.length === 1) {
    const imageSrc = item.images[0]

    return (
      <ImageContentWrapper>
        <Image src={imageSrc} size={item.imageSize} />
        {refLink && <Linker src={refLink} hint="参考" top={8} />}
        <Text>{item.text}</Text>
      </ImageContentWrapper>
    )
  }

  if (item.title) {
    return (
      <Wrapper>
        <Title>{item.title}</Title>
        <Desc>{item.text}</Desc>
        {refLink && <Linker src={refLink} hint="参考" top={8} />}
      </Wrapper>
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
