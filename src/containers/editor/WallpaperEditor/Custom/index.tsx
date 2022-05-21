import { FC, memo } from 'react'

import { Wrapper } from '../styles/custom'

const Custom: FC = () => {
  return (
    <Wrapper>
      <div>Custom</div>
    </Wrapper>
  )
}

export default memo(Custom)
