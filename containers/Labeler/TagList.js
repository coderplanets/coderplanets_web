import React from 'react'
import shortid from 'shortid'

import { Wrapper, TagItem, TagDot, TagTitle } from './styles/tag_list'

const TagList = ({ data }) => (
  <Wrapper>
    {data.map(tag => (
      <TagItem key={shortid.generate()}>
        <TagDot color={tag.color} />
        <TagTitle title={tag.title}>{tag.title}</TagTitle>
      </TagItem>
    ))}
  </Wrapper>
)

export default TagList
