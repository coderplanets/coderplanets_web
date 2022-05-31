import { FC, memo } from 'react'

import { Wrapper } from '../styles/threads'

type TProps = {
  testid?: string
}

const Threads: FC<TProps> = ({ testid = 'threads' }) => {
  return (
    <Wrapper>
      <div>Threads</div>
    </Wrapper>
  )
}

export default memo(Threads)
