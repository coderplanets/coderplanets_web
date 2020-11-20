import React from 'react'

import { Wrapper } from '../styles/content'

const Content = ({ curStep }) => {
  return (
    <Wrapper>
      <div>content {curStep} </div>
    </Wrapper>
  )
}

export default React.memo(Content)
