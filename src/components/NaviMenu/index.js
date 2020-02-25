/*
 *
 * NaviMenu
 *
 */

import React, { useState } from 'react'
// import T from 'prop-types'
import R from 'ramda'

import { buildLog } from '@utils'

import RootMenu from './RootMenu'
import ChildrenMenu from './ChildrenMenu'

import menuItems from './menuData'
import { Wrapper /* ActiveDot */ } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

/* <ActiveDot /> */
const NaviMenu = () => {
  const [menuMode, setMenuMode] = useState('root')
  const [parentMenuId, setParentMenuId] = useState('')

  const parentMenuIndex = R.findIndex(
    item => item.id === parentMenuId,
    menuItems
  )

  const childMenuItems =
    parentMenuIndex >= 0 ? menuItems[parentMenuIndex].childMenu : []

  console.log('childMenuItems:  ', childMenuItems)
  // console.log('setParentMenuId: ', parentMenuId)
  // console.log('menuItems[parentMenuIndex]: ', menuItems[parentMenuIndex])

  return (
    <Wrapper>
      {menuMode === 'root' || R.isEmpty(childMenuItems) ? (
        <RootMenu
          menuItems={menuItems}
          onSelect={item => {
            setParentMenuId(item.id)
            setMenuMode('child')
          }}
        />
      ) : (
        <ChildrenMenu
          parentMenuItem={menuItems[parentMenuIndex]}
          menuItems={childMenuItems}
          goBack={() => setMenuMode('root')}
        />
      )}
    </Wrapper>
  )
}

NaviMenu.propTypes = {
  // https://www.npmjs.com/package/prop-types
}

NaviMenu.defaultProps = {}

export default React.memo(NaviMenu)
