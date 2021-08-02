/*
 *
 * Header
 *
 */

import React, { FC, useEffect } from 'react'
import dynamic from 'next/dynamic'

import type { TMetric } from '@/spec'
import { C11N, METRIC } from '@/constant'
import { buildLog } from '@/utils/logger'
import { pluggedIn } from '@/utils/mobx'

import Navigator from '@/components/Navigator'

import type { TStore } from '../store'

import {
  Wrapper,
  ClassicInnerWrapper,
  HolyGrailInnerWrapper,
  RouterWrapper,
  Search,
  HeaderSearchIcon,
  Operations,
} from '../styles/desktop_view/community_view'
import { useInit, openDoraemon } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:Header')

let MailBox

const UserAccount = dynamic(() => import('../UserAccount'), { ssr: false })
const AddOns = dynamic(() => import('../AddOns'), { ssr: false })

type TProps = {
  // T.oneOf(values(METRIC)) TODO
  metric?: TMetric
  header?: TStore
}

const CommunityHeaderContainer: FC<TProps> = ({
  header: store,
  metric = METRIC.COMMUNITY,
}) => {
  // log('header metric: ', metric)
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

  const InnerWrapper =
    bannerLayout === C11N.CLASSIC ? ClassicInnerWrapper : HolyGrailInnerWrapper

  return (
    <Wrapper
      id="whereCallShowDoraemon"
      testid="header"
      leftOffset={leftOffset}
      noBorder={hasNoBottomBorder}
    >
      <InnerWrapper metric={metric}>
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
          <UserAccount isLogin={isLogin} accountInfo={accountInfo} />
        </Operations>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(CommunityHeaderContainer, 'header') as FC<TProps>
