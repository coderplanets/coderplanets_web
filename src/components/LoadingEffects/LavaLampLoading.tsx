import { FC, memo } from 'react'
import { range } from 'ramda'

import { Wrapper, Container, Circle } from './styles/lava_lamp_loading'

const LavaLampLoading: FC = () => {
  return (
    <Wrapper>
      <Container>
        {range(0, 9).map((num) => (
          <Circle key={num} index={num} />
        ))}
      </Container>
    </Wrapper>
  )
}

export default memo(LavaLampLoading)
