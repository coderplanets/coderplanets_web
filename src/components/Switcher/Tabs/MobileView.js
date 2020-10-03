/*
 *
 * Tabs
 *
 */

import React, { useEffect, useRef, useState, useCallback } from 'react'
import T from 'prop-types'
import { isEmpty, findIndex } from 'ramda'

import { ICON, ICON_CMD } from '@/config'
import { useMedia } from '@/hooks'
import { buildLog, isString } from '@/utils'

import TabItem from './TabItem'
import {
  Wrapper,
  Nav,
  SlipBar,
  RealBar,
  MoreWrapper,
  ArrowIcon,
} from '../styles/tabs/mobile'
import { getSlipMargin } from '../styles/metric/tabs'

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
  if (isEmpty(activeKey)) return 0
  const index = findIndex((item) => {
    return isString(item)
      ? activeKey === item
      : activeKey === (item.raw || item.title)
  }, items)

  return index >= 0 ? index : 0
}

const MobileView = ({ size, onChange, items, activeKey, slipHeight }) => {
  const { mobile } = useMedia()

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
    setActive(defaultActiveTabIndex)
  }, [defaultActiveTabIndex])

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
    (index, e) => {
      const item = items[index]

      setSlipWidth(e.target.offsetWidth)
      setActive(index)
      onChange(isString(item) ? item : item.raw || item.title)
    },
    [setSlipWidth, setActive, onChange, items],
  )

  const translateX = `${
    tabWidthList.slice(0, active).reduce((a, b) => a + b, 0) +
    getSlipMargin(size, mobile) * active
  }px`

  return (
    <Wrapper testId="tabs">
      <MoreWrapper>
        <ArrowIcon src={`${ICON}/arrow-simple.svg`} />
      </MoreWrapper>
      <Nav ref={ref}>
        {items.map((item, index) => (
          <TabItem
            key={isString(item) ? item : item.raw || item.title}
            mobileView={mobile}
            activeKey={activeKey}
            index={index}
            item={item}
            size={size}
            setItemWidth={handleNaviItemWith}
            onClick={handleItemClick}
          />
        ))}

        <SlipBar
          translateX={translateX}
          width={`${tabWidthList[active]}px`}
          slipHeight={slipHeight}
        >
          {/* mobile tab slipbar looks shorter than the desktop one */}
          <RealBar width={`${slipWidth - 24}px`} />
        </SlipBar>
      </Nav>
    </Wrapper>
  )
}

MobileView.propTypes = {
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
  slipHeight: T.oneOf(['1px', '2px']),
}

MobileView.defaultProps = {
  items: temItems,
  onChange: log,
  activeKey: '',
  size: 'default',
  slipHeight: '2px',
}

export default React.memo(MobileView)
