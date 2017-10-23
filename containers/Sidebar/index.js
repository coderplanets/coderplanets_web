/*
 *
 * Sidebar
 *
 */

import React from 'react'
import Link from 'next/link'
import R from 'ramda'
import { inject, observer } from 'mobx-react'

import * as SuggestionIcons from '../../containers/Doraemon/styles/suggestionIcons'
// import { makeDebugger } from '../../utils/functions'

import { Sidebar, MenuItem, Row, SVGIconWrapper } from './styles'
import PinButton from './PinButton'
import { makeDebugger } from '../../utils/functions'
import * as logic from './logic'

const debug = makeDebugger('C:Sidebar:index')

const Icons = { ...SuggestionIcons }
const DefaultIcon = SuggestionIcons.javascript

const getIconKey = R.compose(R.last, R.split('--'), R.toLower)

const NodeIcon = ({ raw }) => {
  const lowerRaw = R.toLower(raw)
  // debug('raw: ', themeColorMap)
  /*
  if (R.contains(lowerRaw, SuggestionIcons.langImgIcons)) {
    return (
      <div style={{ width: '30px' }}>
        <SuggestionIcons.IconImg
          src={`/static/nodeIcons/programmingL/${lowerRaw}.png`}
          alt={lowerRaw}
        />
      </div>
    )
  }
  */

  const iconKey = getIconKey(lowerRaw)

  const Icon = Icons[iconKey] ? Icons[iconKey] : DefaultIcon
  return (
    <SVGIconWrapper>
      <Icon />
    </SVGIconWrapper>
  )
}

const MenuList = ({ items, open }) => {
  const listItems = items.map(item => (
    <li key={item.name}>
      {open ? (
        <div>
          <Link href={item.target.href} as={item.target.as}>
            <Row>
              <NodeIcon raw={item.name} />
              {/* eslint-disable jsx-a11y/anchor-is-valid */}
              <div style={{ marginRight: 10 }} />
              <a>{item.name}</a>
            </Row>
          </Link>
        </div>
      ) : (
        <Row>
          <NodeIcon raw={item.name} />
        </Row>
      )}
    </li>
  ))
  return <MenuItem>{listItems}</MenuItem>
}

const selector = ({ store }) => ({
  sidebar: store.sidebar,
})

class SidebarContainer extends React.Component {
  componentDidMount() {
    debug('init')
    logic.init(this.props.sidebar)
  }

  render() {
    const { sidebar } = this.props

    // debug('-----> newMenuData --------> : ', sidebar.newMenuData)
    // <MenuList items={sidebar.menuItemsData} open={sidebar.open} />

    return (
      <Sidebar
        open={sidebar.open}
        onMouseEnter={logic.enterSidebar}
        onMouseLeave={logic.leaveSidebar}
      >
        <PinButton open={sidebar.open} pin={sidebar.pin} onClick={logic.pin} />
        <br />
        <br />

        <MenuList items={sidebar.newMenuData} open={sidebar.open} />
      </Sidebar>
    )
  }
}

export default inject(selector)(observer(SidebarContainer))
