/*
 *
 * Header
 *
 */

import React from 'react'
import { Affix } from 'antd'

import { TYPE } from '@constant'
import { connectStore, buildLog } from '@utils'

import Header from './Header'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Header')

const HeaderContainer = ({ header }) => {
  useInit(header)

  const {
    isOnline,
    fixed,
    curRoute,
    leftOffset,
    accountInfo,
    isLogin,
    activeInfo,
    curCommunity,
  } = header

  return (
    <div id={TYPE.APP_HEADER_ID}>
      {fixed && (
        <Affix onChange={log}>
          <Header
            isOnline={isOnline}
            fixed={fixed}
            curRoute={curRoute}
            leftOffset={leftOffset}
            accountInfo={accountInfo}
            isLogin={isLogin}
            activeInfo={activeInfo}
            curCommunity={curCommunity}
          />
        </Affix>
      )}
      {!fixed && (
        <Header
          isOnline={isOnline}
          fixed={fixed}
          curRoute={curRoute}
          leftOffset={leftOffset}
          accountInfo={accountInfo}
          isLogin={isLogin}
          activeInfo={activeInfo}
          curCommunity={curCommunity}
        />
      )}
    </div>
  )
}

export default connectStore(HeaderContainer)
