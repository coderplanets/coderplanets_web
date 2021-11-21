import { FC, memo } from 'react'

import Linker from '@/widgets/Linker'

import type { TDrinkItem } from '../../spec'

import { Wrapper, Image, Desc } from '../../styles/body/content/image_layout'

type TProps = {
  item: TDrinkItem
}
const ImageLayout: FC<TProps> = ({ item }) => {
  const { reference, images, imageSize, text } = item
  const imageSrc = images[0]

  return (
    <Wrapper>
      <Image src={imageSrc} size={imageSize} />
      {reference && <Linker src={reference} hint="参考" top={8} />}
      <Desc>{text}</Desc>
    </Wrapper>
  )
}

export default memo(ImageLayout)
