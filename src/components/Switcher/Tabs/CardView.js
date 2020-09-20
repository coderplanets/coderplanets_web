/*
 *
 * Tabs
 *
 */

import React, { useRef, useState, useCallback } from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@/config'
import { buildLog, isString } from '@/utils'

import TabItem from './TabItem'
import { Wrapper, Nav } from '../styles/tabs'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

// const defaultItems2 = ['帖子', '开源项目', 'Cheatsheet', '工作机会', '职场']
const temItems = [
  {
    title: '帖子',
    // icon: `${ICON_CMD}/navi/fire.svg`,
    localIcon: 'settings',
  },
  {
    title: '开源项目',
    icon: `${ICON_CMD}/navi/hammer.svg`,
  },
  {
    title: 'Cheatsheet',
    icon: `${ICON_CMD}/navi/fire.svg`,
  },
  {
    title: '工作机会',
    icon: `${ICON_CMD}/navi/fire.svg`,
  },
  {
    title: '职场',
    icon: `${ICON_CMD}/navi/fire.svg`,
  },
]

const Tabs = ({ size, onChange, items, activeKey }) => {
  const [tabWidthList, setTabWidthList] = useState([])

  const ref = useRef(null)

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
    <Wrapper testId="tabs">
      <Nav ref={ref}>
        {items.map((item, index) => (
          <TabItem
            key={isString(item) ? item : item.raw || item.title}
            activeKey={activeKey}
            index={index}
            item={item}
            size={size}
            setWidth={handleNaviItemWith}
            onClick={handleItemClick}
            cardView
          />
        ))}
      </Nav>
    </Wrapper>
  )
}

Tabs.propTypes = {
  items: T.oneOfType([
    T.arrayOf(T.string),
    T.arrayOf(
      T.shape({
        title: T.string,
        raw: T.string,
        alias: T.string,
        icon: T.oneOfType([T.string, T.node]),
        localIcon: T.string,
      }),
    ),
  ]),
  onChange: T.func,
  activeKey: T.string,
  size: T.oneOf(['default', 'small']),
}

Tabs.defaultProps = {
  items: temItems,
  onChange: log,
  activeKey: '',
  size: 'default',
}

export default React.memo(Tabs)
