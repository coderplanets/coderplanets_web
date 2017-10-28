/*
 *
 * Sidebar
 *
 */

import React from 'react'
import Link from 'next/link'
import R from 'ramda'
import { inject, observer } from 'mobx-react'

import {
  makeDebugger,
  storeSelector,
  getSVGIconPath,
} from '../../utils/functions'
import PinButton from './PinButton'
import { Sidebar, MenuItem, Row, MenuItemIcon } from './styles'
import * as logic from './logic'

const debug = makeDebugger('C:Sidebar:index')

const MenuList = ({ items, open, curUrlPath }) => {
  const listItems = items.map(item => (
    <li key={item.name}>
      {open ? (
        <div>
          <Link href={item.target.href} as={item.target.as}>
            <Row active={curUrlPath === R.toLower(item.name)}>
              <MenuItemIcon
                active={curUrlPath === R.toLower(item.name)}
                path={getSVGIconPath(item.name)}
              />
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <div style={{ marginRight: 10 }} />
              <a>{item.name}</a>
            </Row>
          </Link>
        </div>
      ) : (
        <Row>
          <MenuItemIcon
            active={curUrlPath === R.toLower(item.name)}
            path={getSVGIconPath(item.name)}
          />
        </Row>
      )}
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
    const { curUrlPath, menuItems, open, pin } = sidebar
    //    debug('-----> sidebar route --------> : ', this.props.router)

    return (
      <Sidebar
        open={sidebar.open}
        onMouseEnter={logic.enterSidebar}
        onMouseLeave={logic.leaveSidebar}
      >
        <PinButton open={open} pin={pin} onClick={logic.pin} />
        <br />
        <br />

        <MenuList items={menuItems} open={open} curUrlPath={curUrlPath} />
      </Sidebar>
    )
  }
}

export default inject(storeSelector('sidebar'))(observer(SidebarContainer))
