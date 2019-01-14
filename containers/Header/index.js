/*
 *
 * Header
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import keydown from 'react-keydown'
import { Affix } from 'antd'

import Header from './Header'

import { AffixHeader, RawHeader } from './styles'

import { makeDebugger, storePlug, TYPE } from '../../utils'
import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Header')

class HeaderContainer extends React.Component {
  componentDidMount() {
    const { header } = this.props
    logic.init(header)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  /* eslint-disable class-methods-use-this */
  @keydown(['ctrl+p'])
  openDoraemon() {
    // debug('openDoraemon')
    logic.openDoraemon()
  }
  /* eslint-enable class-methods-use-this */

  render() {
    const { header } = this.props
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
      <div id={TYPE.APP_HEADER_ID}>
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
      </div>
    )
  }
}

export default inject(storePlug('header'))(observer(HeaderContainer))
