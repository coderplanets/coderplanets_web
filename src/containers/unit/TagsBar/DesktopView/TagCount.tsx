import { FC, memo } from 'react'
import { getRandomInt } from '@/utils/helper'
import { Wrapper, Count, ChartBar } from '../styles/desktop_view/tag_count'

type TProps = {
  num: number
}

const TagCount: FC<TProps> = ({ num }) => {
  const percent = getRandomInt(5, 100) / 100
  return (
    <Wrapper>
      <Count>{num}</Count>
      <ChartBar percent={percent} />
    </Wrapper>
  )
}
// <div>只看/不看</div>

export default memo(TagCount)
