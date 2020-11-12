import React from 'react'

import { Wrapper, Price, Slash, Unit } from './styles/price_tag'

const PriceTag = ({ active, price, unit = '月' }) => {
  const localeUnit = unit === 'yearly' ? '每年' : '每月'

  return (
    <Wrapper>
      ¥ <Price active={active}>{price}</Price>
      <Slash>/</Slash>
      <Unit>{localeUnit}</Unit>
    </Wrapper>
  )
}

export default React.memo(PriceTag)
