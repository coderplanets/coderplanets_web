import React, { useState } from 'react'

import { findIndex } from 'ramda'

import { ICON } from '@/config'
import { sortByColor } from '@/utils'

import TagItem from './TagItem'

import { TagsWrapper } from '../styles/desktop_view'
import {
  Wrapper,
  Header,
  ArrowIcon,
  Title,
  Content,
  SubToggle,
  SubToggleTitle,
  SubTogglePrefixIcon,
} from '../styles/desktop_view/folder'

const MAX_DISPLAY_COUNT = 5
const TOGGLE_SUB_TOGGLE_THROLD = 5 // TODO: only for test, should be 15

const Folder = ({ title, groupTags, allTags, activeTag, onSelect }) => {
  // 如果标签总数都没有超过 15 个，那么就不用显示 '展示更多'了，直接全部显示完事儿
  const needSubToggle = allTags?.length > TOGGLE_SUB_TOGGLE_THROLD || false

  const initDisplayCount = needSubToggle ? MAX_DISPLAY_COUNT : groupTags.length

  const [isFolderOpen, toggleFolder] = useState(true)
  const [curDisplayCount, setCurDisplayCount] = useState(initDisplayCount)

  const sortedTags = sortByColor(groupTags)

  const isActiveTagInFolder =
    findIndex((item) => item.id === activeTag.id, groupTags) >= 0

  return (
    <Wrapper>
      <Header onClick={() => toggleFolder(!isFolderOpen)}>
        <ArrowIcon
          isOpen={isFolderOpen}
          src={`${ICON}/shape/arrow-simple.svg`}
        />
        <Title>{title}</Title>
        {!isFolderOpen && isActiveTagInFolder && (
          <TagItem tag={activeTag} active isInline />
        )}
      </Header>

      <Content isOpen={isFolderOpen}>
        <TagsWrapper>
          {sortedTags.slice(0, curDisplayCount).map((tag) => (
            <TagItem
              key={tag.id}
              tag={tag}
              active={activeTag.title === tag.title}
              activeId={activeTag.id}
              onSelect={onSelect}
            />
          ))}
        </TagsWrapper>
        {needSubToggle && (
          <SubToggle
            onClick={() => {
              setCurDisplayCount(
                curDisplayCount === MAX_DISPLAY_COUNT
                  ? groupTags.length
                  : MAX_DISPLAY_COUNT,
              )
            }}
          >
            <SubTogglePrefixIcon src={`${ICON}/shape/more.svg`} />
            <SubToggleTitle>
              {curDisplayCount === MAX_DISPLAY_COUNT ? '展开更多' : '收起'}
            </SubToggleTitle>
          </SubToggle>
        )}
      </Content>
    </Wrapper>
  )
}

export default Folder
