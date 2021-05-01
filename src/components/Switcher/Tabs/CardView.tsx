/*
 *
 * Tabs
 *
 */

import React, { FC, useRef, useState, useCallback } from 'react'

import type { TSIZE_SM, TTabItem } from '@/spec'
import { buildLog, isString } from '@/utils'
import { SIZE } from '@/constant'

import TabItem from './TabItem'
import { Wrapper, Nav } from '../styles/tabs'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

// const defaultItems2 = ['帖子', '开源项目', 'Cheatsheet', '工作机会', '职场']
const temItems = [
  {
    title: '帖子',
    raw: 'posts',
    localIcon: 'settings',
  },
]

type TProps = {
  items?: TTabItem[]
  onChange: () => void
  activeKey?: string
  size: TSIZE_SM
  slipHeight: '1px' | '2px'
}

const Tabs: FC<TProps> = ({
  size = SIZE.MEDIUM,
  onChange = log,
  items = temItems,
  activeKey = '',
}) => {
  const [tabWidthList, setTabWidthList] = useState([])

  const navRef = useRef(null)

  // set slipbar with for current nav item
  // 为下面的滑动条设置当前 TabItem 的宽度
  const handleNaviItemWith = useCallback(
    (index, width) => {
      tabWidthList[index] = width
      setTabWidthList(tabWidthList)
    },
    [tabWidthList],
  )

  const handleItemClick = useCallback(
    (index) => {
      const item = items[index]

      onChange(isString(item) ? item : item.raw || item.title)
    },
    [onChange, items],
  )

  return (
    <Wrapper testid="tabs">
      <Nav ref={navRef}>
        {items.map((item, index) => (
          <TabItem
            key={isString(item) ? item : item.raw || item.title}
            activeKey={activeKey}
            index={index}
            item={item}
            size={size}
            setItemWidth={handleNaviItemWith}
            onClick={handleItemClick}
            cardView
          />
        ))}
      </Nav>
    </Wrapper>
  )
}

export default React.memo(Tabs)
