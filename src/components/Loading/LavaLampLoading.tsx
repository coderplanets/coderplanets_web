import { FC, memo } from 'react'
import { range } from 'ramda'

import type { TSpace } from '@/spec'
import { Wrapper, Container, Circle } from './styles/lava_lamp_loading'

type TProps = TSpace

const LavaLampLoading: FC<TProps> = (props) => {
  return (
    <Wrapper {...props}>
      <Container>
        {range(0, 9).map((num) => (
          <Circle key={num} index={num} />
        ))}
      </Container>
    </Wrapper>
  )
}

export default memo(LavaLampLoading)
