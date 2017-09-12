/*
 *
 * Sidebar
 *
 */

import React from 'react'
import Link from 'next/link'

// import styled from 'styled-components'
// import { FormattedMessage as I18n } from 'react-intl'
// import lang from './lang'

// import observer from '../../utils/mobx_utils'
import { inject, observer } from 'mobx-react'

import Sidebar from './Sidebar'
import MenuItem from './MenuItem'

import { makeDebugger } from '../../utils/debug'
import * as logic from './logic'

const debug = makeDebugger('C:Sidebar:index')

const MenuList = ({ items }) => {
  const listItems = items.map(item => (
    <li key={item.id}>
      <span>
        <Link href={item.target.href} as={item.target.as}>
          <a>{item.name}</a>
        </Link>
      </span>
    </li>
  ))
  return <MenuItem>{listItems}</MenuItem>
}

const selector = ({ store }) => ({
  sidebar: store.sidebar,
})

class SidebarContainer extends React.Component {
  componentDidMount() {
    logic.init(this.props.sidebar)
  }

  render() {
    const { sidebar, theme } = this.props
    debug('verson ---> : ', theme)

    return (
      <Sidebar>
        <div>
          <div>{sidebar.one}</div>
          <button onClick={logic.addOne}>add</button>
          <button onClick={logic.changeTheme.bind(this, 'cyan')}>theme</button>
          <MenuList items={sidebar.menuItems} />
        </div>
      </Sidebar>
    )
  }
}

export default inject(selector)(observer(SidebarContainer))
