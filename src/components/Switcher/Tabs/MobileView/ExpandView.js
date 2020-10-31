/*
 *
 * Tabs
 *
 */

import React, { useEffect, useRef, useState, useCallback } from 'react'
import T from 'prop-types'

import { ICON } from '@/config'
import { useDevice } from '@/hooks'
import { buildLog, isString } from '@/utils'

import TabItem from '../TabItem'
import {
  Wrapper,
  Nav,
  MoreWrapper,
  ArrowIcon,
} from '../../styles/tabs/mobile_view/expand_view'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

const MobileView = ({ size, onChange, items, activeKey, toggleExpand }) => {
  const { isMobile } = useDevice()

  const [tabWidthList, setTabWidthList] = useState([])
  const [showMore, setShowMore] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const tabWidthSum = tabWidthList.reduce((a, b) => a + b, 0)
    const navWidth = navRef?.current?.clientWidth
    if (navWidth && navWidth < tabWidthSum) {
      setShowMore(true)
    } else {
      setShowMore(false)
    }
  }, [tabWidthList])

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
      {showMore && (
        <MoreWrapper onClick={toggleExpand}>
          <ArrowIcon src={`${ICON}/shape/arrow-simple.svg`} />
        </MoreWrapper>
      )}
      <Nav ref={navRef}>
        {items.map((item, index) => (
          <TabItem
            key={isString(item) ? item : item.raw || item.title}
            mobileView={isMobile}
            activeKey={activeKey}
            index={index}
            item={item}
            size={size}
            setItemWidth={handleNaviItemWith}
            onClick={handleItemClick}
            wrapMode
          />
        ))}
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
  toggleExpand: T.func.isRequired,
}

MobileView.defaultProps = {
  items: [],
  onChange: log,
  activeKey: '',
  size: 'default',
}

export default React.memo(MobileView)
