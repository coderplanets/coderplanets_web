import React from 'react'

import { getRandomInt, Trans } from '@/utils'
import { SpaceGrow } from '@/components/Common'

import TagCount from './TagCount'

import {
  Wrapper,
  HashSign,
  TagTitle,
  CountInfoWrapper,
} from '../styles/desktop_view/tag_item'

import { onTagSelect } from '../logic'

const TagItem = ({ tag, active, activeId, inline, onSelect }) => {
  return (
    <Wrapper active={active} inline={inline}>
      <HashSign
        color={tag.color}
        active={active}
        activeId={activeId}
        inline={inline}
      />

      <TagTitle
        active={active}
        inline={inline}
        onClick={() => onTagSelect(tag, onSelect)}
      >
        {Trans(tag.title)}
      </TagTitle>
      <SpaceGrow />

      {!inline && (
        <CountInfoWrapper>
          <TagCount num={getRandomInt(5, 1000)} />
        </CountInfoWrapper>
      )}
    </Wrapper>
  )
}

export default TagItem
