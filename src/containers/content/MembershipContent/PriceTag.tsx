import { FC, memo } from 'react'

import { PAY } from './constant'
import { Wrapper, Price, Slash, Unit } from './styles/price_tag'

type TProps = {
  testid?: string
  active: boolean
  price: string
  unit?: string
}

const PriceTag: FC<TProps> = ({
  testid = 'membership-price-tag',
  active,
  price,
  unit = '月',
}) => {
  const localeUnit = unit === PAY.YEARLY ? '每年' : '每月'

  return (
    <Wrapper testid={testid}>
      ¥ <Price active={active}>{price}</Price>
      <Slash>/</Slash>
      <Unit>{localeUnit}</Unit>
    </Wrapper>
  )
}

export default memo(PriceTag)
