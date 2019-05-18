/*
 *
 * Header
 *
 */

import React from 'react'
import { Affix } from 'antd'

import { connectStore, makeDebugger } from '@utils'

import Header from './Header'
import { useInit } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Header')

const HeaderContainer = ({ header }) => {
  useInit(header)

  const {
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
        <Affix onChange={debug}>
          <Header
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
