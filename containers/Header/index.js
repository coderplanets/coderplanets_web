/*
*
* Header
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import { Affix } from 'antd'
import keydown from 'react-keydown'
// import Link from 'next/link'
import Navigator from '../../components/Navigator'

import {
  makeDebugger,
  storeSelector,
  getSVGIconPath,
  getParameterByName,
  Global,
} from '../../utils'

import {
  Header,
  RouterWrapper,
  MiniMapWrapper,
  CommunityLogo,
  MiniTab,
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

const MiniMap = ({ curRoute }) => {
  const defaultIcon = 'js'
  const { mainQuery } = curRoute
  const iconKey = mainQuery.length > 1 ? mainQuery : defaultIcon

  return (
    <MiniMapWrapper>
      <CommunityLogo path={getSVGIconPath(iconKey)} />
      <MiniTab active>帖子</MiniTab>
      <MiniTab>教程</MiniTab>
      <MiniTab>动态</MiniTab>
      <MiniTab>视频</MiniTab>
      <MiniTab>地图</MiniTab>
      <MiniTab>cheatsheet</MiniTab>
    </MiniMapWrapper>
  )
}

class HeaderContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.header)
  }

  componentDidMount() {
    const fuck = getParameterByName('fuck')

    if (fuck) {
      console.log('i am here to fuck you')
      Global.postMessage('love you', Global.location.href)
      /* console.log('-----> componentDidMount code: ', code) */
      /* logic.signinGithub(code) */
      /* query_for_token? */
    }
  }

  /* eslint-disable class-methods-use-this */
  @keydown(['ctrl+p'])
  openDoraemon() {
    // debug('openDoraemon')
    logic.openDoraemon()
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const { fixed, curRoute, leftOffset } = this.props.header

    return (
      <Affix>
        <Header
          id="whereCallShowDoraemon"
          leftOffset={leftOffset}
          fixed={fixed}
        >
          <RouterWrapper>
            {fixed ? <MiniMap curRoute={curRoute} /> : <Navigator />}
          </RouterWrapper>
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
      </Affix>
    )
  }
}

export default inject(storeSelector('header'))(observer(HeaderContainer))
