import React from 'react'
import R from 'ramda'

import { Wrapper, TagDot, TagTitle, NomoreDesc } from './styles/tag_list'

import { uid } from '../../utils'

const TagList = ({ items }) => {
  if (R.isEmpty(items)) return <NomoreDesc>无标签</NomoreDesc>

  return (
    <React.Fragment>
      {items.map(t => (
        <Wrapper key={uid.gen()}>
          <TagDot color={t.color} />
          <TagTitle>{t.title}</TagTitle>
        </Wrapper>
      ))}
    </React.Fragment>
  )
}

export default TagList
