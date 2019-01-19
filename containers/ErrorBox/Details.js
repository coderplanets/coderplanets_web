import React from 'react'

// import { ICON_CMD } from '../../config'
import { Wrapper, TitleWrapper, Dot, Title, Desc } from './styles/details'

const Details = () => (
  <Wrapper>
    <TitleWrapper>
      <Dot />
      <Title>createPost</Title>
    </TitleWrapper>
    <Desc>title can nott be empty</Desc>
  </Wrapper>
)

export default Details
