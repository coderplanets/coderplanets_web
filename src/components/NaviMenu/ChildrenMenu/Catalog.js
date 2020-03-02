/*
 *
 * NaviMenu
 *
 */

import React, { useState, useCallback } from 'react'
import T from 'prop-types'
import R from 'ramda'

import { buildLog, nilOrEmpty, o2s, s2o } from '@utils'
import { SpaceGrow } from '@components/BaseStyled'

import ChildrenItems from './ChildrenItems'

import { Wrapper, Item, Icon } from '../styles/children_menu/catalog'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

/* <ActiveDot /> */
const Catalog = ({ menuItems, onSelect }) => {
  const [activeMenuId, setActiveMenuId] = useState(null)

  const handleSelect = useCallback(
    e => {
      const item = s2o(e.target.dataset.item)
      setActiveMenuId(item.id)
      nilOrEmpty(item.childMenu) && onSelect(item.id, item.displayType)
    },
    [onSelect]
  )

  return (
    <Wrapper>
      {menuItems.map(item => (
        <div key={item.id}>
          <Item
            data-item={o2s(item)}
            active={item.id === '0'}
            onClick={handleSelect}
          >
            <Icon active={item.id === '0'} src={item.icon} />
            <SpaceGrow />
            {item.title}
          </Item>
          {item.childMenu && !R.isEmpty(item.childMenu) && (
            <ChildrenItems
              activeMenuId={activeMenuId}
              parentId={item.id}
              items={item.childMenu}
              onSelect={onSelect}
            />
          )}
        </div>
      ))}
    </Wrapper>
  )
}

Catalog.propTypes = {
  onSelect: T.func.isRequired,
  menuItems: T.arrayOf(T.any).isRequired,
  // goBack: T.func.isRequired,
}

Catalog.defaultProps = {}

export default React.memo(Catalog)
