import { FC, memo } from 'react'

import { AnimateOnChange } from 'react-animation'
import { Wrapper } from '../styles/total_count'

type TProps = {
  count?: number
}

const AnimatedCount: FC<TProps> = ({ count = 0 }) => {
  return (
    <Wrapper>
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
