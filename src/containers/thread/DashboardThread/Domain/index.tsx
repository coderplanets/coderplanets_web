import { FC, memo } from 'react'

import { Wrapper } from '../styles/domain'

type TProps = {
  testid?: string
}

const Domain: FC<TProps> = ({ testid = 'domain' }) => {
  return (
    <Wrapper>
      <div>Domain</div>
    </Wrapper>
  )
}

export default memo(Domain)
