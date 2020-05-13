/*
 *
 * NaviMenu
 *
 */

import React, { useCallback } from 'react'
import T from 'prop-types'
import R from 'ramda'

import { buildLog, nilOrEmpty, o2s, s2o } from '@/utils'
import { SpaceGrow } from '@/components/Common'

import ChildrenItems from './ChildrenItems'

import { Wrapper, Item, Icon } from '../styles/children_menu/catalog'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

// const activeIdCache = {}
const isChildItemActive = (childMenuId, childMenu) => {
  return R.findIndex(R.propEq('id', childMenuId), childMenu || []) >= 0
}

const CataLogItem = ({
  item,
  childMenuId,
  expandMenuId,
  handleSelect,
  onSelect,
}) => {
  const isChildActive = isChildItemActive(childMenuId, item.childMenu)
  const isActive = nilOrEmpty(item.childMenu)
    ? childMenuId === item.id
    : isChildActive

  return (
    <React.Fragment>
      <Item data-item={o2s(item)} active={isActive} onClick={handleSelect}>
        {item.title}
        <SpaceGrow />
        <Icon active={isActive} src={item.icon} />
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
    </React.Fragment>
  )
}

const Catalog = ({
  menuItems,
  childMenuId,
  expandChildId,
  onExpand,
  onSelect,
}) => {
  // const [expandMenuId, setExpandMenuId] = useState(null)
  const handleSelect = useCallback(
    e => {
      const item = s2o(e.target.dataset.item)
      // setExpandMenuId(item.id)
      onExpand(item)

      if (nilOrEmpty(item.childMenu)) {
        onSelect(item)
      }
    },
    [onExpand, onSelect]
  )

  return (
    <Wrapper>
      {menuItems.map(item => (
        <CataLogItem
          key={item.id}
          item={item}
          childMenuId={childMenuId}
          expandMenuId={expandChildId}
          handleSelect={handleSelect}
          onSelect={onSelect}
        />
      ))}
    </Wrapper>
  )
}

Catalog.propTypes = {
  childMenuId: T.string.isRequired,
  expandChildId: T.string.isRequired,
  onExpand: T.func.isRequired,
  onSelect: T.func.isRequired,
  menuItems: T.arrayOf(T.any).isRequired,
  // goBack: T.func.isRequired,
}

Catalog.defaultProps = {}

export default React.memo(Catalog)
