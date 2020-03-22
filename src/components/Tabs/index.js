/*
 *
 * Tabs
 *
 */

import React, { useEffect, useRef, useState, useCallback } from 'react'
import T from 'prop-types'
import R from 'ramda'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import NavItem from './NavItem'

import { Wrapper, Nav, SlipBar, RealBar } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

// const defaultItems2 = ['帖子', '开源项目', 'Cheatsheet', '工作机会', '职场']
const defaultItems = [
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
const getDefaultActiveIndex = (items, activeKey) => {
  if (R.isEmpty(activeKey)) return 0
  const index = R.findIndex(item => {
    return typeof item === 'string'
      ? activeKey === item
      : R.propEq('title', item) === activeKey
  }, items)

  return index >= 0 ? index : 0
}

const Tabs = ({ onChange, items, margin, activeKey }) => {
  const defaultActiveIndx = getDefaultActiveIndex(items, activeKey)
  const [active, setActive] = useState(defaultActiveIndx)
  const [slipWidth, setSlipWidth] = useState(0)

  const [navWidthList, setNaviWidthList] = useState([])

  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      const activeSlipWidth =
        ref.current.childNodes[defaultActiveIndx].firstElementChild.offsetWidth
      setSlipWidth(activeSlipWidth)
    }
  }, [navWidthList, defaultActiveIndx])

  const handleNaviItemWith = useCallback(
    (index, width) => {
      navWidthList[index] = width
      setNaviWidthList(navWidthList)
    },
    [navWidthList]
  )

  const handleItemClick = useCallback(
    (index, e) => {
      setSlipWidth(e.target.offsetWidth)
      setActive(index)
      onChange()
    },
    [setSlipWidth, setActive, onChange]
  )

  return (
    <Wrapper testid="tabs">
      <Nav ref={ref}>
        {items.map((item, index) => (
          <NavItem
            key={typeof item === 'string' ? item : item.title}
            item={item}
            index={index}
            setWidth={handleNaviItemWith}
            onClick={handleItemClick}
          />
        ))}

        <SlipBar
          active={`${navWidthList.slice(0, active).reduce((a, b) => a + b, 0) +
            margin * active}px`}
          width={`${navWidthList[active]}px`}
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
  items: defaultItems,
  onChange: log,
  margin: 32,
  activeKey: '',
}

export default React.memo(Tabs)
