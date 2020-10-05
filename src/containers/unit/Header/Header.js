import React from 'react'

import MailBox from '@/containers/MailBox'
import UserLister from '@/containers/user/UserLister'
import Cashier from '@/containers/Cashier'
// import UpgradePackages from '@/containers/tool/UpgradePackages'
import Navigator from '@/components/Navigator'

import ThreadsNav from './ThreadsNav'
import UserAccount from './UserAccount'
import AddOns from './AddOns'
import OfflineAlert from './OfflineAlert'

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
  metric,
  isOnline,
  activeInfo,
  leftOffset,
  fixed,
  isLogin,
  accountInfo,
  curCommunity,
  hasNoBottomBorder,
  layout,
}) => {
  return (
    <Wrapper
      id="whereCallShowDoraemon"
      testId="header"
      leftOffset={leftOffset}
      fixed={fixed}
      noBorder={hasNoBottomBorder}
    >
      <InnerWrapper type={metric} layout={layout}>
        <RouterWrapper>
          {fixed ? (
            <ThreadsNav activeInfo={activeInfo} />
          ) : (
            <Navigator
              curCommunity={curCommunity}
              layout={accountInfo.customization.bannerLayout}
            />
          )}
          {!isOnline && <OfflineAlert />}
        </RouterWrapper>
        <AddOns mstStateTestId="mst-state" />
        <Operations>
          <Search onClick={openDoraemon} testId="header-search">
            <HeaderSearchIcon testId="header-search-icon" />
          </Search>

          {isLogin && <MailBox />}

          {/* <UpgradePackages /> */}
          <UserLister />
          <Cashier />
          <UserAccount isLogin={isLogin} accountInfo={accountInfo} />
        </Operations>
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(Header)
