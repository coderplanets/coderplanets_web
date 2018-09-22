/*
 *
 * Header
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import keydown from 'react-keydown'

import { ICON_CMD } from '../../config/assets'

import MailBox from '../MailBox'
import UpgradePackges from '../UpgradePackges'

import { Affix, Navigator } from '../../components'
import UserAccount from './UserAccount'
import AddOns from './AddOns'

import {
  HeaderWrapper,
  RouterWrapper,
  MiniMapWrapper,
  CommunityLogo,
  MiniTab,
  Search,
  HeaderIcon,
  Operations,
  AffixHeader,
  RawHeader,
} from './styles'

import { uid, makeDebugger, storePlug, TYPE, Trans } from '../../utils'
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
          key={uid.gen()}
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
    <AddOns />
    <Operations>
      <Search onClick={logic.openDoraemon}>
        <HeaderIcon src={`${ICON_CMD}/search2.svg`} />
      </Search>

      <MailBox />
      <UserAccount isLogin={isLogin} accountInfo={accountInfo} />
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
