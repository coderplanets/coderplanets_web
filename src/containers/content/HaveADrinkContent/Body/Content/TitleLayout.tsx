import { FC, memo } from 'react'

import Linker from '@/widgets/Linker'

import type { TDrinkItem } from '../../spec'
import { refreshDrink } from '../../logic'

import { Wrapper, Title, Desc } from '../../styles/body/content/title_layout'

type TProps = {
  item: TDrinkItem
}
const TitleLayout: FC<TProps> = ({ item }) => {
  const { title, text, reference } = item

  return (
    <Wrapper>
      <Title onClick={() => refreshDrink()}>{title}</Title>
      <Desc onClick={() => refreshDrink()}>{text}</Desc>
      {reference && <Linker src={reference} hint="参考" top={8} />}
    </Wrapper>
  )
}

export default memo(TitleLayout)
