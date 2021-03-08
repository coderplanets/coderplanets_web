import React from 'react'

import { Wrapper, InnerWrapper } from './styles/digest'

const Digest = ({ metric }) => {
  return (
    <Wrapper metric={metric}>
      <InnerWrapper metric={metric}>
        <div>- coderplanets / 帮助中心</div>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Digest
