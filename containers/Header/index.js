/*
 *
 * Header
 *
 */

import React from 'react'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react-lite'
import { Affix } from 'antd'

import { makeDebugger, storePlug } from '@utils'
import Header from './Header'
import { AffixHeader, RawHeader } from './styles'

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
      <AffixHeader fixed={fixed}>
        <Affix>
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
      </AffixHeader>
      <RawHeader fixed={fixed}>
        <Header
          fixed={fixed}
          curRoute={curRoute}
          leftOffset={leftOffset}
          accountInfo={accountInfo}
          isLogin={isLogin}
          activeInfo={activeInfo}
          curCommunity={curCommunity}
        />
      </RawHeader>
    </React.Fragment>
  )
}

export default inject(storePlug('header'))(observer(HeaderContainer))
