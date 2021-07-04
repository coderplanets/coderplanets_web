import { FC, memo } from 'react'

import { range } from 'ramda'
import { Wrapper, Block } from './styles/loading_blocks'

const LoadingBlocks: FC = () => {
  return (
    <Wrapper>
      {range(0, 14).map((num) => (
        <Block key={num} />
      ))}
    </Wrapper>
  )
}

export default memo(LoadingBlocks)
