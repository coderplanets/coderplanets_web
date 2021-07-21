/*
 *
 * Header
 *
 */

import React, { FC, useEffect } from 'react'
import dynamic from 'next/dynamic'

import type { TMetric } from '@/spec'
import { ICON } from '@/config'
import { pluggedIn, buildLog } from '@/utils'

import UserLister from '@/containers/user/UserLister'
import Navigator from '@/components/Navigator'

import type { TStore } from '../store'
// import UserAccount from '../UserAccount'
import {
  Wrapper,
  InnerWrapper,
  RouterWrapper,
  Operations,
  MoreIcon,
} from '../styles/desktop_view/article_view'
import { useInit } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:Header')

let MailBox

type TProps = {
  header?: TStore
  metric?: TMetric
}

const ArticleHeaderContainer: FC<TProps> = ({ header: store, metric }) => {
  useInit(store, metric)

  const {
    isOnline,
    leftOffset,
    isLogin,
    curCommunity,
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
      noBorder
    >
      <InnerWrapper>
        <RouterWrapper metric={metric}>
          <Navigator
            community={curCommunity}
            layout={bannerLayout}
            isOnline={isOnline}
            // showLogoText
          />
        </RouterWrapper>
        <Operations metric={metric}>
          {MailBox && <MailBox />}
          <UserLister />
          {/* <Cashier /> */}
          <MoreIcon src={`${ICON}/shape/more-box.svg`} />
        </Operations>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(ArticleHeaderContainer, 'header') as FC<TProps>
