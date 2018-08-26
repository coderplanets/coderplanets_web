/*
 *
 * Header
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import keydown from 'react-keydown'
import shortid from 'shortid'

import { ICON_ASSETS } from '../../config/assets'
import { UpgradePackges } from '..'
import { Affix, Navigator, Button } from '../../components'

import { makeDebugger, storePlug, TYPE, Trans } from '../../utils'

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

const MiniMap = ({ activeInfo: { community, activeThread } }) => (
  <MiniMapWrapper>
    <CommunityLogo src={community.logo} />
    <React.Fragment>
      {community.threads.map(t => (
        <MiniTab
          key={shortid.generate()}
          active={t.raw === activeThread}
          onClick={logic.onThreadChange.bind(this, t)}
        >
          {Trans(t.title)}
        </MiniTab>
      ))}
    </React.Fragment>
  </MiniMapWrapper>
)

const Header = ({
  activeInfo,
  curRoute,
  leftOffset,
  fixed,
  isLogin,
  accountInfo,
}) => (
  <HeaderWrapper
    id="whereCallShowDoraemon"
    leftOffset={leftOffset}
    fixed={fixed}
  >
    <RouterWrapper>
      {fixed ? (
        <MiniMap activeInfo={activeInfo} curRoute={curRoute} />
      ) : (
        <Navigator />
      )}
    </RouterWrapper>
    <Admin>
      <div style={{ display: 'flex' }}>
        <Button size="small" type="primary" ghost onClick={logic.upgradeHepler}>
          upgrade
        </Button>
        &nbsp;&nbsp;&nbsp;
        <StateButton
          size="small"
          type="primary"
          ghost
          onClick={logic.previewState.bind(this, 'mst-state')}
        >
          <StateIcon src={`${ICON_ASSETS}/cmd/header_state.svg`} />
          <div>STATE</div>
        </StateButton>
        <DividerIcon src={`${ICON_ASSETS}/cmd/more.svg`} />
      </div>
    </Admin>

    <Operations>
      <Search onClick={logic.openDoraemon}>
        <HeaderIcon src={`${ICON_ASSETS}/cmd/search2.svg`} />
      </Search>
      <Notification onClick={logic.openPreview.bind(this, 'post')}>
        <HeaderIcon src={`${ICON_ASSETS}/cmd/notification_none.svg`} />
      </Notification>

      {isLogin ? (
        <User onClick={logic.previewAccount.bind(this, 'account')}>
          <UserAvatar src={accountInfo.avatar} />
        </User>
      ) : (
        <User onClick={logic.login}>
          <HeaderIcon src={`${ICON_ASSETS}/cmd/default_user.svg`} />
        </User>
      )}
    </Operations>
  </HeaderWrapper>
)

class HeaderContainer extends React.Component {
  componentWillMount() {
    const { header } = this.props
    logic.init(header)
  }

  /* eslint-disable class-methods-use-this */
  @keydown(['ctrl+p'])
  openDoraemon() {
    // debug('openDoraemon')
    logic.openDoraemon()
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const { header } = this.props
    const {
      fixed,
      curRoute,
      leftOffset,
      accountInfo,
      isLogin,
      activeInfo,
    } = header

    return (
      <div id={TYPE.APP_HEADER_ID}>
        <UpgradePackges />
        <AffixHeader fixed={fixed}>
          <Affix>
            <Header
              fixed={fixed}
              curRoute={curRoute}
              leftOffset={leftOffset}
              accountInfo={accountInfo}
              isLogin={isLogin}
              activeInfo={activeInfo}
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
            activeInfo={activeInfo}
          />
        </RawHeader>
      </div>
    )
  }
}

export default inject(storePlug('header'))(observer(HeaderContainer))
