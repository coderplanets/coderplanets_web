/*
 *
 * Sidebar
 *
 */

import React from 'react'
import Link from 'next/link'
import R from 'ramda'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storeSelector, getSVGIconPath } from '../../utils'
import PinButton from './PinButton'
import { Sidebar, MenuItem, MenuRow, MenuItemIcon } from './styles'
import * as logic from './logic'

const debug = makeDebugger('C:Sidebar:index')

const MenuList = ({ items, pin, curPath }) => {
  const listItems = items.map(item => (
    <li key={item.name}>
      <div>
        <Link href={item.target.href} as={item.target.as}>
          <MenuRow pin={pin} active={curPath === R.toLower(item.name)}>
            <MenuItemIcon
              active={curPath === R.toLower(item.name)}
              path={getSVGIconPath(item.name)}
            />
            {/* eslint-disable jsx-a11y/anchor-is-valid */}
            <div style={{ marginRight: 10 }} />
            <a>{item.name}</a>
          </MenuRow>
        </Link>
      </div>
    </li>
  ))
  return <MenuItem>{listItems}</MenuItem>
}

class SidebarContainer extends React.Component {
  componentDidMount() {
    debug('init')
    logic.init(this.props.sidebar)
  }

  render() {
    const { sidebar } = this.props
    const { curPath, menuItems, pin } = sidebar
    //    onMouseLeave={logic.leaveSidebar}

    // onMouseLeave is not unreliable in chrome: https://github.com/facebook/react/issues/4492
    return (
      <Sidebar pin={pin}>
        <PinButton pin={pin} onClick={logic.pin} />
        <br />
        <br />

        <MenuList items={menuItems} pin={pin} curPath={curPath} />
      </Sidebar>
    )
  }
}

export default inject(storeSelector('sidebar'))(observer(SidebarContainer))
