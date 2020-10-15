import React from 'react'

import { isCypressRunning } from '@/utils'
import HorizontalScroller from './HorizontalScroller'
import VerticalScroller from './VerticalScroller'

const CustomScroller = ({ direction, ...restProps }) => {
  const isE2ETesting = isCypressRunning()

  if (isE2ETesting) {
    return <div>{restProps.children}</div>
  }

  return direction === 'vertical' ? (
    <VerticalScroller {...restProps} />
  ) : (
    <HorizontalScroller {...restProps} />
  )
}

export default React.memo(CustomScroller)
