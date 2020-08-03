import React from 'react'
import { isEmpty } from 'ramda'

import { Wrapper, TagDot, TagTitle, NoMoreDesc } from './styles/tag_list'

const TagList = ({ items }) => {
  if (isEmpty(items)) return <NoMoreDesc>无标签</NoMoreDesc>

  return (
    <>
      {items.map((t) => (
        <Wrapper key={t.id}>
          <TagDot color={t.color} />
          <TagTitle>{t.title}</TagTitle>
        </Wrapper>
      ))}
    </>
  )
}

export default React.memo(TagList)
