import React from 'react'

import { TYPE } from 'utils'

import MailBox from 'containers/MailBox'
import UserLister from 'containers/UserLister'
import Cashier from 'containers/Cashier'
import UpgradePackges from 'containers/UpgradePackges'
import Navigator from 'components/Navigator'

import ThreadsNav from './ThreadsNav'
import UserAccount from './UserAccount'
import AddOns from './AddOns'

import {
  HeaderWrapper,
  InnerWrapper,
  RouterWrapper,
  Search,
  HeaderSearchIcon,
  Operations,
} from './styles/header'

import { openDoraemon } from './logic'

const Header = ({
  activeInfo,
  curRoute,
  leftOffset,
  fixed,
  isLogin,
  accountInfo,
  curCommunity,
}) => (
  <HeaderWrapper
    id="whereCallShowDoraemon"
    leftOffset={leftOffset}
    fixed={fixed}
  >
    <InnerWrapper id={TYPE.APP_HEADER_ID}>
      <RouterWrapper>
        {fixed ? (
          <ThreadsNav activeInfo={activeInfo} curRoute={curRoute} />
        ) : (
          <Navigator
            curCommunity={curCommunity}
            curRoute={curRoute}
            layout={accountInfo.customization.bannerLayout}
          />
        )}
      </RouterWrapper>
      <AddOns />
      <Operations>
        <Search onClick={openDoraemon}>
          <HeaderSearchIcon offsettop="-1px" />
        </Search>

        {isLogin && <MailBox />}

        <UpgradePackges />
        <UserLister />
        <Cashier />
        <UserAccount isLogin={isLogin} accountInfo={accountInfo} />
      </Operations>
    </InnerWrapper>
  </HeaderWrapper>
)

export default Header
