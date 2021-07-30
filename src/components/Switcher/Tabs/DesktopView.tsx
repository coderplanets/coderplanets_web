/*
 *
 * Tabs
 *
 */

import { FC, useEffect, useRef, useState, useCallback, memo } from 'react'
import { isEmpty, findIndex } from 'ramda'

import type { TSIZE_SM, TTabItem, TC11NLayout } from '@/spec'
import { isMobile } from 'react-device-detect'
import { SIZE, C11N } from '@/constant'
import { buildLog, isString } from '@/utils'

import TabItem from './TabItem'
import { Wrapper, Nav, SlipBar, RealBar } from '../styles/tabs'
import { getSlipMargin } from '../styles/metric/tabs'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

// const defaultItems2 = ['帖子', '开源项目', 'Cheatsheet', '工作机会', '职场']
const temItems = [
  {
    title: '帖子',
    raw: 'posts',
    // icon: `${ICON_CMD}/navi/fire.svg`,
    localIcon: 'settings',
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
const getDefaultActiveTabIndex = (
  items: TTabItem[],
  activeKey: string,
): number => {
  if (isEmpty(activeKey)) return 0
  const index = findIndex((item) => {
    return activeKey === (item.raw || item.title)
  }, items)

  return index >= 0 ? index : 0
}

type TProps = {
  items?: TTabItem[]
  layout?: TC11NLayout
  onChange: () => void
  activeKey?: string
  size: TSIZE_SM
  slipHeight: '1px' | '2px'
}

const Tabs: FC<TProps> = ({
  size = SIZE.MEDIUM,
  onChange = log,
  items = temItems,
  layout = C11N.CLASSIC,
  activeKey = '',
  slipHeight = '2px',
}) => {
  const defaultActiveTabIndex = getDefaultActiveTabIndex(items, activeKey)

  const [active, setActive] = useState(defaultActiveTabIndex)
  const [slipWidth, setSlipWidth] = useState(0)
  const [tabWidthList, setTabWidthList] = useState([])

  const navRef = useRef(null)

  // set initial slipbar with of active item
  // 给 slipbar 设置一个初始宽度
  useEffect(() => {
    if (navRef.current) {
      const activeSlipWidth =
        navRef.current.childNodes[defaultActiveTabIndex].firstElementChild
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
    getSlipMargin(size, isMobile) * active
  }px`

  return (
    <Wrapper testid="tabs">
      <Nav ref={navRef}>
        {items.map((item, index) => (
          <TabItem
            key={isString(item) ? item : item.raw || item.title}
            mobileView={isMobile}
            holyGrailView={layout === C11N.HOLY_GRAIL}
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
          <RealBar
            width={`${size === SIZE.MEDIUM ? slipWidth : slipWidth - 6}px`}
          />
        </SlipBar>
      </Nav>
    </Wrapper>
  )
}

export default memo(Tabs)
