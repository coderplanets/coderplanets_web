/*
*
* Body
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import keydown from 'react-keydown'

// import Link from 'next/link'
import { Button } from '../../components'

import { storeSelector, getSVGIconPath } from '../../utils/functions'
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
  BannerLogo,
} from './styles'

const AppHeader = () => {
  return (
    <Header>
      <Router>Javascript / post / hello</Router>
      <Admin>
        <Button>管理页</Button>
      </Admin>
      <Search onClick={logic.openDoraemon}>
        <SearchIcon />
      </Search>
      <Notification onClick={logic.openPreview}>
        <NotificationIcon />
      </Notification>
      <User onClick={logic.openPreview.bind(this, 'user')}>
        <UserIcon />
      </User>
    </Header>
  )
}

const AppBanner = ({ curUrlPath }) => {
  const defaultIcon = 'js'
  const iconKey = curUrlPath === '/' ? defaultIcon : curUrlPath
  // debug('AppBanner curUrlPath: ', curUrlPath)
  // debug('iconKey: ', iconKey)

  return (
    <Banner>
      <BannerLogo path={getSVGIconPath(iconKey)} />
    </Banner>
  )
}

class ContentContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.body)
  }

  /* eslint-disable class-methods-use-this */
  @keydown(['ctrl+p'])
  openDoraemon() {
    // debug('openDoraemon')
    logic.openDoraemon()
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const { body } = this.props
    //    debug('route: ', route)
    return (
      <Body id="whereCallShowDoraemon">
        <AppHeader />
        <AppBanner curUrlPath={body.curUrlPath} />
        <div>content</div>
      </Body>
    )
  }
}

export default inject(storeSelector('body'))(observer(ContentContainer))
