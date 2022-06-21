import { FC, memo } from 'react'

import { Wrapper } from '../styles/alias'

type TProps = {
  testid?: string
}

const Alias: FC<TProps> = ({ testid = 'alias' }) => {
  return (
    <Wrapper>
      <div>Widgets</div>
    </Wrapper>
  )
}

export default memo(Alias)
