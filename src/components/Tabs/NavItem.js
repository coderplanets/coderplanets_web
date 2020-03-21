/*
 *
 * Tabs
 *
 */

import React, { useEffect, useRef } from 'react'
import T from 'prop-types'

import { ICON_CMD } from '@config'
import { buildLog } from '@utils'

import { Wrapper, Label, Icon } from './styles/nav_item'

/* eslint-disable-next-line */
const log = buildLog('c:Tabs:index')

const NavItem = ({ item, setWidth, index, onClick }) => {
  const ref = useRef(null)

  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0
    console.log('changed ? ', index)
    setWidth(index, width)
  }, [setWidth, index])

  return (
    <Wrapper ref={ref}>
      <Label onClick={e => onClick(index, e)}>
        <Icon src={`${ICON_CMD}/navi/fire.svg`} />
        {item}
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
