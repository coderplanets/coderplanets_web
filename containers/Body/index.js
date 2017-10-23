/*
*
* Body
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import keydown from 'react-keydown'

// import Link from 'next/link'
// import styled from 'styled-components'

import { makeDebugger } from '../../utils/functions'

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
} from './styles'

const debug = makeDebugger('C:Body')

const AppHeader = () => {
  return (
    <Header>
      <Router>Javascript / post / hello</Router>
      <Admin>管理页</Admin>
      <Search onClick={logic.openDoraemon}>
        <SearchIcon />
      </Search>
      <Notification>
        <NotificationIcon />
      </Notification>
      <User onClick={logic.openDrawer}>
        <UserIcon />
      </User>
    </Header>
  )
}
const AppBanner = () => {
  return <Banner>Banner</Banner>
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
    return (
      <Body id="whereCallShowDoraemon">
        <AppHeader />
        <AppBanner />
        <div>content</div>
      </Body>
    )
  }
}

export default inject(selector)(observer(ContentContainer))
