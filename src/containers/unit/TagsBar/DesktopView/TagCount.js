import React from 'react'

import { getRandomInt } from '@/utils'
import { Wrapper, Count, ChartBar } from '../styles/desktop_view/tag_count'

const TagCount = ({ num }) => {
  const percent = getRandomInt(5, 100) / 100
  return (
    <Wrapper>
      <Count>{num}</Count>
      <ChartBar percent={percent} />
    </Wrapper>
  )
}
// <div>只看/不看</div>

export default React.memo(TagCount)
