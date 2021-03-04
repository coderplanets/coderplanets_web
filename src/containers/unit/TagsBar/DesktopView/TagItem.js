import React from 'react'

import { getRandomInt, Trans } from '@/utils'

import TagCount from './TagCount'

import {
  Wrapper,
  TagDot,
  HashSign,
  TagTitle,
  CountInfoWrapper,
} from '../styles/desktop_view/tag_item'

import { onTagSelect } from '../logic'

const TagItem = ({ tag, active, activeId, onSelect }) => {
  return (
    <Wrapper active={active}>
      <TagDot>
        <HashSign color={tag.color} active={active} activeId={activeId} />
      </TagDot>

      <TagTitle active={active} onClick={() => onTagSelect(tag, onSelect)}>
        {Trans(tag.title)}
      </TagTitle>

      <CountInfoWrapper>
        <TagCount num={getRandomInt(5, 1000)} />
      </CountInfoWrapper>
    </Wrapper>
  )
}

export default TagItem
