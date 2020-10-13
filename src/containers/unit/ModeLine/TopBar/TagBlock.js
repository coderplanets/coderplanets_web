import React from 'react'

import {
  TagWrapper,
  ArrowShapeLeft,
  InnerWrapper,
  Dot,
  Title,
} from '../styles/top_bar/tag_block'

const TagBlock = () => {
  const bgColor = '#071f27'

  return (
    <TagWrapper bgColor={bgColor}>
      <ArrowShapeLeft bgColor={bgColor} />
      <InnerWrapper>
        <Dot />
        <Title>问答</Title>
      </InnerWrapper>
      {/* <MenuLogo src={`${ICON}/user/account-solid.svg`} /> */}
    </TagWrapper>
  )
}

export default TagBlock
