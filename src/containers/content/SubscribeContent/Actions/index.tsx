import { FC, memo } from 'react'

import Detail from './Detail'

import { Wrapper, InnerWrapper } from '../styles/actions'

const Actions: FC = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Detail />
      </InnerWrapper>
    </Wrapper>
  )
}

export default memo(Actions)
