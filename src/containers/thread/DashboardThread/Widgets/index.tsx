import { FC, memo } from 'react'

import { Wrapper } from '../styles/widgets'

type TProps = {
  testid?: string
}

const Widgets: FC<TProps> = ({ testid = 'widgets' }) => {
  return (
    <Wrapper>
      <div>Widgets</div>
    </Wrapper>
  )
}

export default memo(Widgets)
