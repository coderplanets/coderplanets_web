import React from 'react'

import { Wrapper, Tag } from './styles/inline_tags'

const InlineTags = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </Wrapper>
  )
}

export default React.memo(InlineTags)
