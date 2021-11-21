import { FC, memo } from 'react'

import Linker from '@/widgets/Linker'

import ImageLayout from './ImageLayout'
import NumberLayout from './NumberLayout'
import TitleLayout from './TitleLayout'

import type { TDrinkItem } from '../../spec'
import { refreshDrink } from '../../logic'

import { Wrapper, TextWrapper } from '../../styles/body/content'

type TProps = {
  item: TDrinkItem
}

const Content: FC<TProps> = ({ item }) => {
  const { title, num, images, text, reference } = item

  if (num) {
    return <NumberLayout item={item} />
  }

  if (images && images.length === 1) {
    return <ImageLayout item={item} />
  }

  if (title) {
    return <TitleLayout item={item} />
  }

  // default layout
  return (
    <Wrapper>
      <TextWrapper onClick={() => refreshDrink()}>{text}</TextWrapper>
      {reference && <Linker src={reference} hint="参考" top={8} />}
    </Wrapper>
  )
}

export default memo(Content)
