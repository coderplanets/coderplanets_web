import React from 'react'

import { cs } from '@/utils'

import MailBox from '@/containers/tool/MailBox'
import UserLister from '@/containers/user/UserLister'
// import Cashier from '@/containers/tool/Cashier'
// import UpgradePackages from '@/containers/tool/UpgradePackages'

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
} from './styles/fixed_header'

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
  activeInfo,
  curRoute,
  fixed,
  leftOffset,
  isLogin,
  accountInfo,
  hasNoBottomBorder,
}) => {
  return (
    <Wrapper
      leftOffset={leftOffset}
      noBorder={hasNoBottomBorder}
      testId="header"
      fixed={fixed}
    >
      <InnerWrapper metric={METRIC_MAP[metric]}>
        <RouterWrapper>
          <ThreadsNav activeInfo={activeInfo} curRoute={curRoute} />
        </RouterWrapper>
        <AddOns mstStateTestId="fixed-header-mst-state" />
        <Operations>
          <Search onClick={openDoraemon} testId="fixed-header-search">
            <HeaderSearchIcon testId="fixed-header-search-icon" />
          </Search>

          {isLogin && <MailBox />}

          <UserLister />
          {/* <Cashier /> */}
          <UserAccount isLogin={isLogin} accountInfo={accountInfo} />
        </Operations>
      </InnerWrapper>
    </Wrapper>
  )
}

export default React.memo(Header)
