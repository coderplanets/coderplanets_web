import { FC, useState, useRef, useEffect } from 'react'

import { findIndex } from 'ramda'

import { ICON } from '@/config'
import { sortByColor } from '@/utils'

import type { TTag } from '@/spec'

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
const TOGGLE_SUB_TOGGLE_THROLD = 15

type TProps = {
  title: string
  allTags: TTag[]
  activeTag: TTag
  groupTags: TTag[]
  onSelect: (tag?: TTag) => void
}

const Folder: FC<TProps> = ({
  title,
  groupTags,
  allTags,
  activeTag,
  onSelect,
}) => {
  // 决定是否显示 '展示更多' 的时候参考标签总数
  const needSubToggle =
    allTags?.length > TOGGLE_SUB_TOGGLE_THROLD &&
    groupTags.length > MAX_DISPLAY_COUNT

  const initDisplayCount = needSubToggle ? MAX_DISPLAY_COUNT : groupTags.length

  const [isFolderOpen, toggleFolder] = useState(true)
  const [curDisplayCount, setCurDisplayCount] = useState(initDisplayCount)

  const sortedTags = sortByColor(groupTags)

  const isActiveTagInFolder =
    // @ts-ignore
    findIndex((item) => item.id === activeTag.id, groupTags) >= 0

  const subToggleRef = useRef(null)
  // 当选中的 Tag 被折叠在展示更多里面时，将其展开
  useEffect(() => {
    if (subToggleRef && isActiveTagInFolder) {
      setCurDisplayCount(groupTags.length)
    }
  }, [subToggleRef, isActiveTagInFolder, groupTags])

  return (
    <Wrapper>
      <Header
        onClick={() => {
          toggleFolder(!isFolderOpen)

          // 当关闭 Folder 的时候，如果当前 Folder 没有被激活的 Tag, 那么就回到折叠状态
          // 如果有，那么保持原来的状态
          if (isFolderOpen && !isActiveTagInFolder) {
            setCurDisplayCount(MAX_DISPLAY_COUNT)
          }
        }}
      >
        <ArrowIcon
          isOpen={isFolderOpen}
          src={`${ICON}/shape/arrow-simple.svg`}
        />
        <Title>{title}</Title>
        {!isFolderOpen && isActiveTagInFolder && (
          <TagItem tag={activeTag} active inline />
        )}
      </Header>

      <Content isOpen={isFolderOpen}>
        <TagsWrapper>
          {sortedTags.slice(0, curDisplayCount).map((tag) => (
            <TagItem
              key={tag.id}
              tag={tag}
              active={activeTag.title === tag.title}
              activeid={String(activeTag.id)}
              onSelect={onSelect}
            />
          ))}
        </TagsWrapper>
        {needSubToggle && (
          <SubToggle
            ref={subToggleRef}
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
