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

// const activeIdCache = {}
const isActiveId = (childMenuId, childMenu) => {
  return R.findIndex(R.propEq('id', childMenuId), childMenu || []) >= 0
}

const CataLogItem = ({
  item,
  childMenuId,
  expandMenuId,
  handleSelect,
  onSelect,
}) => {
  const active = isActiveId(childMenuId, item.childMenu)

  return (
    <div>
      <Item data-item={o2s(item)} active={active} onClick={handleSelect}>
        <Icon active={active} src={item.icon} />
        <SpaceGrow />
        {item.title}
      </Item>
      {item.childMenu && !R.isEmpty(item.childMenu) && (
        <ChildrenItems
          childMenuId={childMenuId}
          expandMenuId={expandMenuId}
          parentId={item.id}
          items={item.childMenu}
          onSelect={onSelect}
        />
      )}
    </div>
  )
}

const Catalog = ({ menuItems, childMenuId, onSelect }) => {
  const [expandMenuId, setExpandMenuId] = useState(null)

  const handleSelect = useCallback(
    e => {
      const item = s2o(e.target.dataset.item)
      setExpandMenuId(item.id)

      if (nilOrEmpty(item.childMenu)) {
        onSelect(item.id, item.displayType)
      }
    },
    [onSelect]
  )

  return (
    <Wrapper>
      {menuItems.map(item => (
        <CataLogItem
          key={item.id}
          item={item}
          childMenuId={childMenuId}
          expandMenuId={expandMenuId}
          handleSelect={handleSelect}
          onSelect={onSelect}
        />
      ))}
    </Wrapper>
  )
}

Catalog.propTypes = {
  childMenuId: T.string.isRequired,
  onSelect: T.func.isRequired,
  menuItems: T.arrayOf(T.any).isRequired,
  // goBack: T.func.isRequired,
}

Catalog.defaultProps = {}

export default React.memo(Catalog)
