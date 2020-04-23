import React from 'react'

import { cs } from '@utils'

import MailBox from '@containers/MailBox'
import UserLister from '@containers/user/UserLister'
import Cashier from '@containers/Cashier'
import UpgradePackges from '@containers/UpgradePackges'
import Navigator from '@components/Navigator'

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

// different view has different size
const METRIC_MAP = {
  default: {
    maxWidth: cs.MAX_CONTENT_WIDTH,
    padding: '0 6vw',
  },

  article: {
    maxWidth: cs.ARTICLE_PAGE_MAX_CONTENT_WIDTH,
    padding: '0 5vw',
  },
}

const Header = ({
  metric,
  isOnline,
  activeInfo,
  curRoute,
  leftOffset,
  fixed,
  isLogin,
  accountInfo,
  curCommunity,
  hasNoBottomBorder,
}) => {
  return (
    <Wrapper
      id="whereCallShowDoraemon"
      leftOffset={leftOffset}
      fixed={fixed}
      noBorder={hasNoBottomBorder}
      testid="header"
    >
      <InnerWrapper metric={METRIC_MAP[metric]}>
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
          {!isOnline && <OfflineAlert />}
        </RouterWrapper>
        <AddOns />
        <Operations>
          <Search onClick={openDoraemon} testid="header-search">
            <HeaderSearchIcon offsettop="-1px" testid="header-search-icon" />
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
}

export default React.memo(Header)
