/*
 *
 * Header
 *
 */

import React, { FC, useEffect } from 'react'
import dynamic from 'next/dynamic'

import { METRIC } from '@/constant'
import { pluggedIn, buildLog } from '@/utils'

import UserLister from '@/containers/user/UserLister'
import Navigator from '@/components/Navigator'

import type { TStore } from '../store'
import UserAccount from '../UserAccount'
import AddOns from '../AddOns'

import {
  Wrapper,
  InnerWrapper,
  RouterWrapper,
  Search,
  HeaderSearchIcon,
  Operations,
} from '../styles/desktop_view/community_view'
import { useInit, openDoraemon } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:Header')

let MailBox

type TProps = {
  // T.oneOf(values(METRIC)) TODO
  metric?: string
  header?: TStore
}

const CommunityHeaderContainer: FC<TProps> = ({
  header: store,
  metric = METRIC.COMMUNITY,
}) => {
  log('header metric: ', metric)
  useInit(store, metric)

  const {
    isOnline,
    leftOffset,
    accountInfo,
    isLogin,
    curCommunity,
    hasNoBottomBorder,
    accountInfo: {
      customization: { bannerLayout },
    },
  } = store

  useEffect(() => {
    if (isLogin) {
      MailBox = dynamic(() => import('@/containers/tool/MailBox'), {
        /* eslint-disable react/display-name */
        loading: () => <div />,
        ssr: false,
      })
    }
  }, [isLogin])

  return (
    <Wrapper
      id="whereCallShowDoraemon"
      testid="header"
      leftOffset={leftOffset}
      noBorder={hasNoBottomBorder}
    >
      <InnerWrapper metric={metric} layout={bannerLayout}>
        <RouterWrapper>
          <Navigator
            community={curCommunity}
            layout={bannerLayout}
            isOnline={isOnline}
            metric={metric}
          />
        </RouterWrapper>
        <AddOns />
        <Operations>
          <Search onClick={openDoraemon} testid="header-search">
            <HeaderSearchIcon testid="header-search-icon" />
          </Search>

          {MailBox && <MailBox />}
          <UserLister />
          {/* <Cashier /> */}
          <UserAccount isLogin={isLogin} accountInfo={accountInfo} />
        </Operations>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(CommunityHeaderContainer, 'header') as FC<TProps>
