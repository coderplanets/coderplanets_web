import React from 'react'

import { Wrapper, Title, Desc } from './styles/brand'

type TProps = {
  testid?: string
}

const Brand: React.FC<TProps> = ({ testid = 'works-content-brand' }) => {
  return (
    <Wrapper testid={testid}>
      <Title>作品集市</Title>
      <Desc>by makers, for makers.</Desc>
    </Wrapper>
  )
}

export default Brand
