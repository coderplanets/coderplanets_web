import React, { useState, useRef, useEffect } from 'react'
import T from 'prop-types'

import { findIndex } from 'ramda'

import { ICON } from '@/config'
import { buildLog } from '@/utils/logger'

import Item from './Item'

import {
  Wrapper,
  TagsWrapper,
  Header,
  ArrowIcon,
  Title,
  Content,
  SubToggle,
  SubToggleTitle,
  SubTogglePrefixIcon,
} from './styles/group'

/* eslint-disable-next-line */
const log = buildLog('w:CollapseMenu:Group')

const Group = ({
  title,
  groupItems,
  items,
  activeItem,
  onSelect,
  maxDisplayCount,
  totalToggleThrold,
}) => {
  // 决定是否显示 '展示更多' 的时候参考标签总数
  const needSubToggle =
    items?.length > totalToggleThrold && groupItems.length > maxDisplayCount

  const initDisplayCount = needSubToggle ? maxDisplayCount : groupItems.length

  const [isFolderOpen, toggleFolder] = useState(true)
  const [curDisplayCount, setCurDisplayCount] = useState(initDisplayCount)

  const sortedItems = groupItems // sortByColor(groupItems)

  const isActiveTagInFolder =
    findIndex((item) => item.id === activeItem.id, groupItems) >= 0

  const subToggleRef = useRef(null)
  // 当选中的 Tag 被折叠在展示更多里面时，将其展开
  useEffect(() => {
    if (subToggleRef && isActiveTagInFolder) {
      setCurDisplayCount(groupItems.length)
    }
  }, [subToggleRef, isActiveTagInFolder, groupItems])

  return (
    <Wrapper>
      <Header
        onClick={() => {
          toggleFolder(!isFolderOpen)

          // 当关闭 Folder 的时候，如果当前 Folder 没有被激活的 Tag, 那么就回到折叠状态
          // 如果有，那么保持原来的状态
          if (isFolderOpen && !isActiveTagInFolder) {
            setCurDisplayCount(maxDisplayCount)
          }
        }}
      >
        <ArrowIcon
          $isOpen={isFolderOpen}
          src={`${ICON}/shape/arrow-simple.svg`}
        />
        <Title>{title}</Title>
      </Header>

      <Content $isOpen={isFolderOpen}>
        <TagsWrapper>
          {sortedItems.slice(0, curDisplayCount).map((item) => (
            <Item
              key={item.id}
              item={item}
              active={activeItem.id === item.id}
              activeid={activeItem.id}
              onSelect={onSelect}
            />
          ))}
        </TagsWrapper>
        {needSubToggle && (
          <SubToggle
            ref={subToggleRef}
            onClick={() => {
              setCurDisplayCount(
                curDisplayCount === maxDisplayCount
                  ? groupItems.length
                  : maxDisplayCount,
              )
            }}
          >
            <SubTogglePrefixIcon src={`${ICON}/shape/more.svg`} />
            <SubToggleTitle>
              {curDisplayCount === maxDisplayCount ? '展开更多' : '收起'}
            </SubToggleTitle>
          </SubToggle>
        )}
      </Content>
    </Wrapper>
  )
}

Group.propTypes = {
  // title, groupItems, items, activeItem, onSelect
  title: T.string,
  groupItems: T.arrayOf(
    T.shape({
      id: T.number,
      title: T.string,
    }),
  ).isRequired,
  items: T.arrayOf(
    T.shape({
      id: T.number,
      title: T.string,
    }),
  ).isRequired,
  activeItem: T.shape({
    id: T.number,
    title: T.string,
  }).isRequired,
  maxDisplayCount: T.number.isRequired,
  totalToggleThrold: T.number.isRequired,
  onSelect: T.func.isRequired,
}

Group.defaultProps = {
  title: '',
}

export default React.memo(Group)
