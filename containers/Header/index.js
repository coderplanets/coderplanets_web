/*
 *
 * Header
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import keydown from 'react-keydown'

import { ICON_ASSETS } from '../../config/assets'
import { Affix, Navigator } from '../../components'

import { makeDebugger, storeSelector } from '../../utils'

import {
  HeaderWrapper,
  RouterWrapper,
  MiniMapWrapper,
  CommunityLogo,
  MiniTab,
  Admin,
  Search,
  Notification,
  HeaderIcon,
  UserAvatar,
  StateIcon,
  StateButton,
  DividerIcon,
  Operations,
  User,
  AffixHeader,
  RawHeader,
} from './styles'

import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Header')
/* eslint-enable no-unused-vars */

const MiniMap = ({ curRoute }) => {
  const defaultIcon = 'js'
  const { mainQuery } = curRoute
  const iconKey = mainQuery.length > 1 ? mainQuery : defaultIcon

  return (
    <MiniMapWrapper>
      <CommunityLogo path={`${ICON_ASSETS}/pl/${iconKey}.svg`} />
      <MiniTab active>帖子</MiniTab>
      <MiniTab>教程</MiniTab>
      <MiniTab>动态</MiniTab>
      <MiniTab>视频</MiniTab>
      <MiniTab>地图</MiniTab>
      <MiniTab>cheatsheet</MiniTab>
    </MiniMapWrapper>
  )
}

const Header = ({ curRoute, leftOffset, fixed, isLogin, accountInfo }) => (
  <HeaderWrapper
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
          <StateIcon path={`${ICON_ASSETS}/cmd/header_state.svg`} />
          <div>STATE</div>
        </StateButton>

        <DividerIcon path={`${ICON_ASSETS}/cmd/more.svg`} />
      </div>
    </Admin>

    <Operations>
      <Search onClick={logic.openDoraemon}>
        <HeaderIcon path={`${ICON_ASSETS}/cmd/search2.svg`} />
      </Search>
      <Notification onClick={logic.openPreview.bind(this, 'post')}>
        <HeaderIcon path={`${ICON_ASSETS}/cmd/notification_none.svg`} />
      </Notification>

      {isLogin ? (
        <User onClick={logic.previewAccount.bind(this, 'account')}>
          <UserAvatar src={accountInfo.avatar} />
        </User>
      ) : (
        <User onClick={logic.login}>
          <HeaderIcon path={`${ICON_ASSETS}/cmd/header_user.svg`} />
        </User>
      )}
    </Operations>
  </HeaderWrapper>
)

class HeaderContainer extends React.Component {
  componentWillMount() {
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
    const {
      fixed,
      curRoute,
      leftOffset,
      accountInfo,
      isLogin,
    } = this.props.header

    // <Affix style={{ display: fixed ? 'block' : 'none' }}>
    return (
      <div>
        <AffixHeader fixed={fixed}>
          <Affix>
            <Header
              fixed={fixed}
              curRoute={curRoute}
              leftOffset={leftOffset}
              accountInfo={accountInfo}
              isLogin={isLogin}
            />
          </Affix>
        </AffixHeader>
        <RawHeader fixed={fixed}>
          <Header
            fixed={fixed}
            curRoute={curRoute}
            leftOffset={leftOffset}
            accountInfo={accountInfo}
            isLogin={isLogin}
          />
        </RawHeader>
      </div>
    )
  }
}

export default inject(storeSelector('header'))(observer(HeaderContainer))
