/*
*
* Header
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import keydown from 'react-keydown'

// import Link from 'next/link'
import { Button } from '../../components'

import {
  makeDebugger,
  storeSelector,
  getSVGIconPath,
} from '../../utils/functions'

import {
  Header,
  Router,
  Admin,
  Search,
  Notification,
  HeaderIcon,
  User,
} from './styles'

import * as logic from './logic'

const debug = makeDebugger('C:Header')

class HeaderContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.header)
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
      <Header id="whereCallShowDoraemon">
        <Router>Javascript / Elixir / go</Router>
        <Admin>
          <Button size="small" type="primary">
            管理页
          </Button>
        </Admin>
        <Search onClick={logic.openDoraemon}>
          <HeaderIcon path={getSVGIconPath('header_search')} />
        </Search>
        <Notification onClick={logic.openPreview}>
          <HeaderIcon path={getSVGIconPath('notification')} />
        </Notification>
        <User onClick={logic.openPreview.bind(this, 'account')}>
          <HeaderIcon path={getSVGIconPath('header_user')} />
        </User>
      </Header>
    )
  }
}

export default inject(storeSelector('header'))(observer(HeaderContainer))
