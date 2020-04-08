/*
 *
 * NaviMenu
 *
 */

import React from 'react'
import T from 'prop-types'

import { buildLog } from '@utils'
import { SpaceGrow } from '@components/BaseStyled'

import { Item, Icon, ActiveDot } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

const RootMenu = ({ menuItems, onSelect, activeParentMenuId }) => {
  return (
    <React.Fragment>
      {menuItems.map(item => (
        <Item
          key={item.id}
          active={item.id === activeParentMenuId}
          onClick={() => onSelect(item)}
        >
          {item.title}
          <SpaceGrow />
          {item.icon ? (
            <Icon active={item.id === activeParentMenuId} src={item.icon} />
          ) : (
            <ActiveDot />
          )}
        </Item>
      ))}
    </React.Fragment>
  )
}

RootMenu.propTypes = {
  menuItems: T.arrayOf(T.object).isRequired,
  onSelect: T.func.isRequired,
  activeParentMenuId: T.string.isRequired,
}

RootMenu.defaultProps = {}

export default React.memo(RootMenu)
