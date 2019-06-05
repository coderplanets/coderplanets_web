/*
 *
 * Header
 *
 */

import React from 'react'
import { Affix } from 'antd'

import { connectStore, makelogger } from '@utils'

import Header from './Header'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = makelogger('C:Header')

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
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default connectStore(HeaderContainer)
