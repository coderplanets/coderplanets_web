/*
 *
 * Header
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import keydown from 'react-keydown'
import { Affix } from 'antd'

import { makeDebugger, storePlug } from 'utils'
import Header from './Header'
import { AffixHeader, RawHeader } from './styles'

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
}

export default inject(storePlug('header'))(observer(HeaderContainer))
