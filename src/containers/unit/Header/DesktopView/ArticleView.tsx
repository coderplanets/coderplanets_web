/*
 *
 * Header
 *
 */

import React, { FC, useEffect } from 'react'
import dynamic from 'next/dynamic'

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
  UserInfoWrapper,
  MoreIcon,
} from '../styles/desktop_view/article_view'
import { useInit } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:Header')

let MailBox

type TProps = {
  header?: TStore
  metric?: string
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
        <RouterWrapper>
          <Navigator
            curCommunity={curCommunity}
            layout={bannerLayout}
            isOnline={isOnline}
            // showLogoText
          />
        </RouterWrapper>
        <Operations>
          {MailBox && <MailBox />}
          <UserLister />
          {/* <Cashier /> */}
          <UserInfoWrapper>
            <MoreIcon src={`${ICON}/shape/more-box.svg`} />
          </UserInfoWrapper>
        </Operations>
      </InnerWrapper>
    </Wrapper>
  )
}

export default pluggedIn(ArticleHeaderContainer, 'header') as FC<TProps>
