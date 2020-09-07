/*
 *
 * Tabs
 *
 */

import React, { useEffect, useCallback, useRef } from 'react'
import T from 'prop-types'

import { buildLog, isString, Trans } from '@/utils'

import TabIcon from './TabIcon'
import { Wrapper, Label } from '../styles/tabs/tab_item'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

const TabItem = ({
  mobile,
  item,
  setWidth,
  index,
  size,
  onClick,
  activeKey,
}) => {
  const ref = useRef(null)
  const clickableRef = useRef(null)

  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0
    setWidth(index, width)
    // return () => setWidth(index, 0)
  }, [setWidth, index])

  const handleWrapperClick = useCallback(() => {
    clickableRef.current.click()
  }, [clickableRef])

  const handleLabelClick = useCallback(
    (e) => {
      e.stopPropagation()
      onClick(index, e)
    },
    [onClick, index],
  )

  return (
    <Wrapper ref={ref} mobile={mobile} size={size} onClick={handleWrapperClick}>
      <Label
        ref={clickableRef}
        onClick={handleLabelClick}
        active={item.raw === activeKey}
      >
        {!isString(item) && (item.icon || item.localIcon) && (
          <TabIcon
            item={item}
            clickableRef={clickableRef}
            active={item.raw === activeKey}
          />
        )}
        {isString(item) ? item : item.alias || Trans(item.title)}
      </Label>
    </Wrapper>
  )
}

TabItem.propTypes = {
  mobile: T.bool,
  item: T.any.isRequired,
  index: T.number.isRequired,
  setWidth: T.func.isRequired,
  onClick: T.func.isRequired,
  activeKey: T.string.isRequired,
  size: T.oneOf(['default', 'small']).isRequired,
}

TabItem.defaultProps = {
  mobile: false,
}

export default React.memo(TabItem)
