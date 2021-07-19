import { FC, memo } from 'react'

import type { TSIZE_SML } from '@/spec'
import { SIZE } from '@/constant'

import { AnimateOnChange } from 'react-animation'
import { Wrapper } from '../styles/total_count'

type TProps = {
  count?: number
  size?: TSIZE_SML
}

const AnimatedCount: FC<TProps> = ({ count = 0, size = SIZE.SMALL }) => {
  return (
    <Wrapper size={size}>
      <AnimateOnChange
        animationIn="fadeInUp"
        animationOut="bounceOut"
        durationOut={200}
      >
        {count}
      </AnimateOnChange>
    </Wrapper>
  )
}

export default memo(AnimatedCount)
