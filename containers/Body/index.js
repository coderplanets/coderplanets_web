/*
*
* Body
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import keydown from 'react-keydown'
import R from 'ramda'

// import Link from 'next/link'
// import styled from 'styled-components'

import { makeDebugger } from '../../utils/functions'

import * as SuggestionIcons from '../Doraemon/styles/suggestionIcons'
import * as logic from './logic'

import {
  Body,
  Header,
  Banner,
  Router,
  Admin,
  Search,
  SearchIcon,
  Notification,
  NotificationIcon,
  User,
  UserIcon,
  AddonSVGIconWrapper,
} from './styles'

const debug = makeDebugger('C:Body')

const Icons = { ...SuggestionIcons }
const DefaultIcon = SuggestionIcons.js

const AppHeader = () => {
  return (
    <Header>
      <Router>Javascript / post / hello</Router>
      <Admin>管理页</Admin>
      <Search onClick={logic.openDoraemon}>
        <SearchIcon />
      </Search>
      <Notification onClick={logic.openDrawer}>
        <NotificationIcon />
      </Notification>
      <User onClick={logic.openDrawer.bind(this, 'user')}>
        <UserIcon />
      </User>
    </Header>
  )
}

const AppBanner = ({ route }) => {
  let iconKey
  // console.log('AppBanner route: ', route.query)

  if (R.isEmpty(route.query)) {
    iconKey = 'js'
  } else {
    // getPath(route.asPath)
    iconKey = route.query.name
  }

  const Icon = Icons[iconKey] ? Icons[iconKey] : DefaultIcon
  return (
    <Banner>
      <AddonSVGIconWrapper>
        <Icon />
      </AddonSVGIconWrapper>
    </Banner>
  )
}

const selector = ({ store }) => ({
  body: store.body,
})

class ContentContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.body)
    debug('init')
  }

  /* eslint-disable class-methods-use-this */
  @keydown(['ctrl+p'])
  openDoraemon() {
    // debug('openDoraemon')
    logic.openDoraemon()
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const { route } = this.props
    console.log('route: ', route)
    return (
      <Body id="whereCallShowDoraemon">
        <AppHeader />
        <AppBanner route={route} />
        <div>content</div>
      </Body>
    )
  }
}

export default inject(selector)(observer(ContentContainer))
