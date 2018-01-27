/*
*
* Header
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import keydown from 'react-keydown'
// import Link from 'next/link'
import Navigator from '../../components/Navigator'

import { makeDebugger, storeSelector, getSVGIconPath } from '../../utils'

import {
  Header,
  Router,
  Admin,
  Search,
  Notification,
  HeaderIcon,
  StateIcon,
  StateButton,
  DividerIcon,
  Operations,
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
        <Router>
          <Navigator />
        </Router>
        <Admin>
          <div style={{ display: 'flex' }}>
            <StateButton
              size="small"
              type="primary"
              ghost
              onClick={logic.previewState.bind(this, 'mst-state')}
            >
              <StateIcon path={getSVGIconPath('header_state')} />
              <div>STATE</div>
            </StateButton>

            <DividerIcon path={getSVGIconPath('more')} />
          </div>
        </Admin>

        <Operations>
          <Search onClick={logic.openDoraemon}>
            <HeaderIcon path={getSVGIconPath('header_search')} />
          </Search>
          <Notification onClick={logic.openPreview.bind(this, 'post')}>
            <HeaderIcon path={getSVGIconPath('notification')} />
          </Notification>
          <User onClick={logic.previewAccount.bind(this, 'account')}>
            <HeaderIcon path={getSVGIconPath('header_user')} />
          </User>
        </Operations>
      </Header>
    )
  }
}

export default inject(storeSelector('header'))(observer(HeaderContainer))
