import React from 'react'

import Navigator from 'components/Navigator'
import { TYPE } from 'utils'
import MailBox from '../MailBox'
import UserLister from '../UserLister'
import Cashier from '../Cashier'
import UpgradePackges from '../UpgradePackges'

import ThreadsNav from './ThreadsNav'
import UserAccount from './UserAccount'
import AddOns from './AddOns'

import {
  Wrapper,
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
  <Wrapper id="whereCallShowDoraemon" leftOffset={leftOffset} fixed={fixed}>
    <InnerWrapper id={TYPE.APP_HEADER_ID}>
      <RouterWrapper>
        {fixed ? (
          <ThreadsNav activeInfo={activeInfo} curRoute={curRoute} />
        ) : (
          <Navigator
            curCommunity={curCommunity}
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
  </Wrapper>
)

export default Header
