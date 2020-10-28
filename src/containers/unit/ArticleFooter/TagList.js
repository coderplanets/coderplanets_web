import React from 'react'

import { isEmpty } from 'ramda'
import { Wrapper, Tag, Dot } from './styles/tag_list'

const TagList = ({ items }) => {
  if (isEmpty(items)) return null

  return (
    <Wrapper>
      {items.map((item) => (
        <Tag key={item.id}>
          <Dot bgColor={item.color} />
          {item.title}
        </Tag>
      ))}
    </Wrapper>
  )
}

export default React.memo(TagList)
