import { FC, memo } from 'react'

import { Wrapper } from './styles/count'

type TProps = {
  count?: number
}

const NormalCount: FC<TProps> = ({ count = 0 }) => {
  return <Wrapper>{count}</Wrapper>
}

export default memo(NormalCount)
