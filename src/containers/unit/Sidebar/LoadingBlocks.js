import React from 'react'

import { range } from 'ramda'
import { Wrapper, Block } from './styles/loading_blocks'

const LoadingBlocks = () => {
  return (
    <Wrapper>
      {range(0, 14).map((num) => (
        <Block key={num} />
      ))}
    </Wrapper>
  )
}

export default React.memo(LoadingBlocks)
