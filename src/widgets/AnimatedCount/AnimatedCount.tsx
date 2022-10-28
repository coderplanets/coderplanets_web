import { FC, memo } from 'react'

import { SIZE } from '@/constant'

import { AnimateOnChange } from '@groupher/react-animation'

import type { TProps } from './index'
import { Wrapper } from './styles'

const AnimatedCount: FC<TProps> = ({
  count = 0,
  size = SIZE.SMALL,
  active = false,
}) => {
  return (
    <Wrapper size={size} $active={active} count={count}>
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
