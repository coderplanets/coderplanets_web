/*
 *
 * Tabs
 *
 */

import React, { useEffect, useCallback, useRef } from 'react'
import T from 'prop-types'

import { buildLog, isString } from '@utils'

import TabIcon from './TabIcon'
import { Wrapper, Label } from './styles/tab_item'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

const TabItem = ({ item, setWidth, index, onClick }) => {
  const ref = useRef(null)
  const clickableRef = useRef(null)

  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0
    setWidth(index, width)
  }, [setWidth, index])

  const handleWrapperClick = useCallback(() => clickableRef.current.click(), [
    clickableRef,
  ])

  const handleLabelClick = useCallback(
    e => {
      e.stopPropagation()
      onClick(index, e)
    },
    [onClick, index]
  )

  return (
    <Wrapper ref={ref} onClick={handleWrapperClick}>
      <Label ref={clickableRef} onClick={handleLabelClick}>
        {!isString(item) && <TabIcon item={item} clickableRef={clickableRef} />}
        {isString(item) ? item : item.title}
      </Label>
    </Wrapper>
  )
}

TabItem.propTypes = {
  item: T.any.isRequired,
  index: T.number.isRequired,
  setWidth: T.func.isRequired,
  onClick: T.func.isRequired,
}

TabItem.defaultProps = {}

export default React.memo(TabItem)
