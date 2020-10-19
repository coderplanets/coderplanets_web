import React from 'react'

import HorizontalScroller from './HorizontalScroller'
import VerticalScroller from './VerticalScroller'

const CustomScroller = ({ direction, ...restProps }) => {
  return direction === 'vertical' ? (
    <VerticalScroller {...restProps} />
  ) : (
    <HorizontalScroller {...restProps} />
  )
}

export default React.memo(CustomScroller)
