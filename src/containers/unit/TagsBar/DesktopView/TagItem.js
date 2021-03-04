import React from 'react'

import { getRandomInt, Trans } from '@/utils'

import TagCount from './TagCount'

import {
  Wrapper,
  TagDot,
  HashSign,
  TagTitle,
  // AllTagIcon,
  CountInfoWrapper,
} from '../styles/desktop_view/tag_item'

import { onTagSelect } from '../logic'

const TagItem = ({ id, title, color, active, onSelect }) => {
  return (
    <Wrapper active={active}>
      <TagDot>
        <HashSign color={color} active={active} />
      </TagDot>

      <TagTitle
        active={active}
        title={title}
        color={color}
        onClick={onTagSelect({ id, title, color }, onSelect)}
      >
        {Trans(title)}
      </TagTitle>

      <CountInfoWrapper>
        <TagCount num={getRandomInt(5, 1000)} />
      </CountInfoWrapper>
    </Wrapper>
  )
}

export default TagItem
