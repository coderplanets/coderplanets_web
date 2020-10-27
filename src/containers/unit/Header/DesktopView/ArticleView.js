/*
 *
 * Header
 *
 */

import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import T from 'prop-types'

import { ICON } from '@/config'
import { connectStore, buildLog } from '@/utils'

import UserLister from '@/containers/user/UserLister'
import Navigator from '@/components/Navigator'

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

const HeaderContainer = ({ header: store }) => {
  useInit(store)

  const {
    leftOffset,
    accountInfo,
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
      testId="header"
      leftOffset={leftOffset}
      noBorder
    >
      <InnerWrapper layout={bannerLayout}>
        <RouterWrapper>
          <Navigator
            curCommunity={curCommunity}
            layout={accountInfo.customization.bannerLayout}
            // showLogoText
          />
        </RouterWrapper>
        <Operations>
          {MailBox && <MailBox />}
          {/* <UpgradePackages /> */}
          <UserLister />
          {/* <Cashier /> */}
          <UserInfoWrapper>
            <MoreIcon src={`${ICON}/shape/more-box.svg`} />
            {/* <UserAccount isLogin={isLogin} accountInfo={accountInfo} /> */}
          </UserInfoWrapper>
        </Operations>
      </InnerWrapper>
    </Wrapper>
  )
}

HeaderContainer.propTypes = {
  header: T.any.isRequired,
}

HeaderContainer.defaultProps = {}

export default connectStore(HeaderContainer)
