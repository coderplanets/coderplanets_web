/*
 *
 * NaviMenu
 *
 */

import React, { useState } from 'react'
import T from 'prop-types'
import R from 'ramda'

import { buildLog } from '@utils'
import { SpaceGrow } from '@components/BaseStyled'

import ChildrenItems from './ChildrenItems'

import { Wrapper, Item, Icon } from '../styles/children_menu/catalog'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

/* <ActiveDot /> */
const Catalog = ({ menuItems }) => {
  const [activeMenuId, setActiveMenuId] = useState(null)

  return (
    <Wrapper>
      {menuItems.map(item => (
        <div key={item.id}>
          <Item
            active={item.id === '0'}
            onClick={() => setActiveMenuId(item.id)}
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
              itemOnClick={id => {
                console.log('click child item d: ', id)
              }}
            />
          )}
        </div>
      ))}
    </Wrapper>
  )
}

Catalog.propTypes = {
  menuItems: T.arrayOf(T.any).isRequired,
  // goBack: T.func.isRequired,
}

Catalog.defaultProps = {}

export default React.memo(Catalog)
