import { FC, memo } from 'react'
import { range, merge } from 'ramda'

import type { TSpace, TSizeTSM } from '@/spec'
import { SIZE } from '@/constant'

import { Wrapper, Container, Circle } from './styles/lava_lamp_loading'

type TProps = TSpace & { size?: TSizeTSM }

const LavaLampLoading: FC<TProps> = (props) => {
  const { size } = props
  const _props = merge({ size: size || SIZE.MEDIUM }, props)

  return (
    <Wrapper {..._props}>
      <Container>
        {range(0, 9).map((num) => (
          <Circle key={num} index={num} />
        ))}
      </Container>
    </Wrapper>
  )
}

export default memo(LavaLampLoading)
