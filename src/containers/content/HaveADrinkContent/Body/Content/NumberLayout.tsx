import { FC, memo } from 'react'

import Linker from '@/widgets/Linker'

import type { TDrinkItem } from '../../spec'

import {
  Wrapper,
  Desc,
  NumWrapper,
  Num,
  Unit,
} from '../../styles/body/content/number_layout'

type TProps = {
  item: TDrinkItem
}
const NumberLayout: FC<TProps> = ({ item }) => {
  const { num, unit, text, reference } = item

  return (
    <Wrapper>
      <NumWrapper>
        <Num>{num}</Num>
        <Unit>{unit}</Unit>
      </NumWrapper>
      <Desc>{text}</Desc>
      {reference && <Linker src={reference} hint="参考" top={8} />}
    </Wrapper>
  )
}

export default memo(NumberLayout)
