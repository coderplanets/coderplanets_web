import { FC, memo } from 'react'

import { Wrapper } from '../styles/ui'

type TProps = {
  testid?: string
}

const UI: FC<TProps> = ({ testid = 'ui' }) => {
  return (
    <Wrapper>
      <div>UI</div>
    </Wrapper>
  )
}

export default memo(UI)
