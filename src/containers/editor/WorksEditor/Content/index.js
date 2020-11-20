import React from 'react'

import { Wrapper } from '../styles/content'

import NamePart from './NamePart'

const Content = ({ step, works }) => {
  console.log(step)
  return (
    <Wrapper>
      <NamePart works={works} />
    </Wrapper>
  )
}

export default React.memo(Content)
