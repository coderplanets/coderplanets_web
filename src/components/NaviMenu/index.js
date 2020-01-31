/*
 *
 * NaviMenu
 *
 */

import React, { useState } from 'react'
// import T from 'prop-types'

import { buildLog } from '@utils'

import RootMenu from './RootMenu'
import ChildrenMenu from './ChildrenMenu'

import { Wrapper /* ActiveDot */ } from './styles'

/* eslint-disable-next-line */
const log = buildLog('c:NaviMenu:index')

/* <ActiveDot /> */
const NaviMenu = () => {
  const [menuMode, setMenuMode] = useState('root')

  return (
    <Wrapper>
      {menuMode === 'root' ? (
        <RootMenu onSelect={() => setMenuMode('child')} />
      ) : (
        <ChildrenMenu goBack={() => setMenuMode('root')} />
      )}
    </Wrapper>
  )
}

NaviMenu.propTypes = {
  // https://www.npmjs.com/package/prop-types
}

NaviMenu.defaultProps = {}

export default React.memo(NaviMenu)
