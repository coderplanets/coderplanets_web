/*
 *
 * Tabs
 *
 */

import React, { useEffect, useRef } from 'react'
import T from 'prop-types'

import { buildLog, isString } from '@utils'
import LocalIcon from './LocalIcon'
import { Wrapper, Label, IconWrapper, Icon } from './styles/nav_item'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

const NavIcon = ({ item }) => {
  /* disable svg click event */
  if (item.localIcon) {
    return (
      <IconWrapper onClick={e => e.stopPropagation()}>
        <LocalIcon raw={item.localIcon} />
      </IconWrapper>
    )
  }
  return (
    <IconWrapper onClick={e => e.stopPropagation()}>
      <Icon src={item.icon} />
    </IconWrapper>
  )
}

const NavItem = ({ item, setWidth, index, onClick }) => {
  const ref = useRef(null)

  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0
    setWidth(index, width)
  }, [setWidth, index])

  return (
    <Wrapper ref={ref}>
      <Label onClick={e => onClick(index, e)}>
        {!isString(item) && <NavIcon item={item} />}
        {isString(item) ? item : item.title}
      </Label>
    </Wrapper>
  )
}

NavItem.propTypes = {
  item: T.any.isRequired,
  index: T.number.isRequired,
  setWidth: T.func.isRequired,
  onClick: T.func.isRequired,
}

NavItem.defaultProps = {}

export default React.memo(NavItem)
