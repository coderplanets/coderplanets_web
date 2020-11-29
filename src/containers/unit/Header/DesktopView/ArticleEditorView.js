/*
 *
 * Header
 *
 */

import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import T from 'prop-types'

import { ICON } from '@/config'
import { METRIC } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import Navigator from '@/components/Navigator'

import {
  Wrapper,
  InnerWrapper,
  RouterWrapper,
  Operations,
  MoreIcon,
} from '../styles/desktop_view/article_editor_view'

import { useInit } from '../logic'

/* eslint-disable-next-line */
const log = buildLog('C:Header')

let MailBox

const HeaderContainer = ({ header: store }) => {
  useInit(store)

  const {
    isOnline,
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
      <InnerWrapper layout={bannerLayout} metric={METRIC.ARTICLE_EDITOR}>
        <RouterWrapper>
          <Navigator
            curCommunity={curCommunity}
            layout={accountInfo.customization.bannerLayout}
            isOnline={isOnline}
            metric={METRIC.ARTICLE_EDITOR}
          />
        </RouterWrapper>
        <Operations>
          {MailBox && <MailBox />}
          <MoreIcon src={`${ICON}/shape/more-box.svg`} />
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
