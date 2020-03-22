/*
 *
 * Tabs
 *
 */

import React, { useEffect, useRef, useState, useCallback } from 'react'
import T from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from '@config'
import { buildLog, isString } from '@utils'

import TabItem from './TabItem'
import { Wrapper, Nav, SlipBar, RealBar } from './styles'

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

/**
 * get default active key in tabs array
 * if not found, return 0 as first
 *
 * @param {array of string or object} items
 * @param {string} activeKey
 * @returns number
 */
const getDefaultActiveTabIndex = (items, activeKey) => {
  if (R.isEmpty(activeKey)) return 0
  const index = R.findIndex(item => {
    return isString(item) ? activeKey === item : activeKey === item.title
  }, items)

  return index >= 0 ? index : 0
}

const Tabs = ({ onChange, items, margin, activeKey }) => {
  const defaultActiveTabIndex = getDefaultActiveTabIndex(items, activeKey)

  const [active, setActive] = useState(defaultActiveTabIndex)
  const [slipWidth, setSlipWidth] = useState(0)
  const [tabWidthList, setTabWidthList] = useState([])

  const ref = useRef(null)

  // set initial slipbar with of active item
  // 给 slipbar 设置一个初始宽度
  useEffect(() => {
    if (ref.current) {
      const activeSlipWidth =
        ref.current.childNodes[defaultActiveTabIndex].firstElementChild
          .offsetWidth
      setSlipWidth(activeSlipWidth)
    }
  }, [tabWidthList, defaultActiveTabIndex])

  // set slipbar with for current nav item
  // 为下面的滑动条设置当前 TabItem 的宽度
  const handleNaviItemWith = useCallback(
    (index, width) => {
      tabWidthList[index] = width
      setTabWidthList(tabWidthList)
    },
    [tabWidthList]
  )

  const handleItemClick = useCallback(
    (index, e) => {
      const item = items[index]

      setSlipWidth(e.target.offsetWidth)
      setActive(index)
      onChange(isString(item) ? item : item.title)
    },
    [setSlipWidth, setActive, onChange, items]
  )

  return (
    <Wrapper testid="tabs">
      <Nav ref={ref}>
        {items.map((item, index) => (
          <TabItem
            key={isString(item) ? item : item.title}
            item={item}
            index={index}
            setWidth={handleNaviItemWith}
            onClick={handleItemClick}
          />
        ))}

        <SlipBar
          active={`${tabWidthList.slice(0, active).reduce((a, b) => a + b, 0) +
            margin * active}px`}
          width={`${tabWidthList[active]}px`}
        >
          <RealBar width={`${slipWidth}px`} />
        </SlipBar>
      </Nav>
    </Wrapper>
  )
}

Tabs.propTypes = {
  items: T.oneOfType(
    T.arrayOf(T.string),
    T.arrayOf(
      T.shape({
        title: T.string,
        icon: T.oneOfType([T.string, T.node]),
      })
    )
  ),
  onChange: T.func,
  margin: T.number,
  activeKey: T.string,
}

Tabs.defaultProps = {
  items: temItems,
  onChange: log,
  margin: 32,
  activeKey: '',
}

export default React.memo(Tabs)
