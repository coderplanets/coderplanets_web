/*
 *
 * IntroSidebar
 *
 */

import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'

// import styled from 'styled-components'
// import { FormattedMessage as I18n } from 'react-intl'
// import lang from './lang'

// import observer from '../../utils/mobx_utils'

import { makeDebugger, storeSelector } from '../../utils/functions'
import { Sidebar, MenuItem } from './styles'
import PinButton from './PinButton'

import {
  HomeIcon,
  FeatureIcon,
  ThemeIcon,
  I18nIcon,
  ExampleIcon,
  CmdIcon,
  GraphQLIcon,
} from './MenuIcon'
import * as logic from './logic'

const debug = makeDebugger('C:IntroSidebar:index')

const MenuIcon = ({ name }) => {
  switch (name) {
    case 'home':
      return <HomeIcon />
    case 'feature':
      return <FeatureIcon />
    case 'theme':
      return <ThemeIcon />
    case 'i18n':
      return <I18nIcon />
    case 'example':
      return <ExampleIcon />
    case 'cmdpanel':
      return <CmdIcon />
    case 'graphql':
      return <GraphQLIcon />
    default:
      return <HomeIcon />
  }
}

const MenuList = ({ items, open }) => {
  const listItems = items.map(item => (
    <li key={item.id}>
      {open ? (
        <span>
          <Link href={item.target.href} as={item.target.as}>
            <span>
              <MenuIcon name={item.name} />
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <a>{item.name}</a>
            </span>
          </Link>
        </span>
      ) : (
        <span>
          <MenuIcon name={item.name} />
        </span>
      )}
    </li>
  ))
  return <MenuItem>{listItems}</MenuItem>
}

class IntroSidebarContainer extends React.Component {
  componentDidMount() {
    debug('init')
    logic.init(this.props.sidebar)
  }

  render() {
    const { sidebar } = this.props
    // debug('-----> langs --------> : ', sidebar.langMessages)

    return (
      <Sidebar
        open={sidebar.open}
        onMouseEnter={logic.enterSidebar}
        onMouseLeave={logic.leaveSidebar}
      >
        <div>
          <PinButton
            open={sidebar.open}
            pin={sidebar.pin}
            onClick={logic.pin}
          />
          <br />
          <br />
          <br />
          <MenuList items={sidebar.menuItemsData} open={sidebar.open} />
        </div>
      </Sidebar>
    )
  }
}

export default inject(storeSelector('sidebar'))(observer(IntroSidebarContainer))
