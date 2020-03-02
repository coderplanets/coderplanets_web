import React from 'react'

import { uid } from '@utils'
import { Wrapper, Tag } from './styles/inline_tags'

const InlineTags = ({ items }) => {
  return (
    <Wrapper>
      {items.map(item => (
        <Tag key={uid.gen()}>{item}</Tag>
      ))}
    </Wrapper>
  )
}

export default React.memo(InlineTags)
