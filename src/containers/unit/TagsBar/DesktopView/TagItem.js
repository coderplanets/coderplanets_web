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

const TagItem = ({ tag, active, activeId, isInline, onSelect }) => {
  return (
    <Wrapper active={active} isInline={isInline}>
      <HashSign
        color={tag.color}
        active={active}
        activeId={activeId}
        isInline={isInline}
      />

      <TagTitle
        active={active}
        isInline={isInline}
        onClick={() => onTagSelect(tag, onSelect)}
      >
        {Trans(tag.title)}
      </TagTitle>
      <SpaceGrow />

      {!isInline && (
        <CountInfoWrapper>
          <TagCount num={getRandomInt(5, 1000)} />
        </CountInfoWrapper>
      )}
    </Wrapper>
  )
}

export default TagItem
