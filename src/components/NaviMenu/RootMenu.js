/*
 *
 * NaviMenu
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'
import { SpaceGrow } from '@components/BaseStyled'

import { Item, Icon } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

/* <ActiveDot /> */
const RootMenu = ({ menuItems, onSelect }) => {
  return (
    <React.Fragment>
      {menuItems.map(item => (
        <Item
          active={item.id === '0'}
          key={item.id}
          onClick={() => onSelect(item)}
        >
          <Icon active={item.id === '0'} src={item.icon} />
          <SpaceGrow />
          {item.title}
        </Item>
      ))}
    </React.Fragment>
  )
}

RootMenu.propTypes = {
  menuItems: T.arrayOf(T.object).isRequired,
  onSelect: T.func.isRequired,
}

RootMenu.defaultProps = {}

export default React.memo(RootMenu)
