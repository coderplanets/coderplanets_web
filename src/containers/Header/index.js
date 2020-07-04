/*
 *
 * Header
 *
 */

import React from 'react'
import T from 'prop-types'

import { TYPE } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import Header from './Header'
import FixedHeader from './FixedHeader'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Header')

const HeaderContainer = ({ header: store, metric }) => {
  useInit(store)

  const {
    isOnline,
    fixed,
    curRoute,
    leftOffset,
    accountInfo,
    isLogin,
    activeInfo,
    curCommunity,
    hasNoBottomBorder,
  } = store

  const props = {
    metric,
    isOnline,
    fixed,
    curRoute,
    leftOffset,
    accountInfo,
    isLogin,
    activeInfo,
    curCommunity,
    hasNoBottomBorder,
  }

  return (
    <div id={TYPE.APP_HEADER_ID} style={{ position: 'relative' }}>
      <FixedHeader {...props} />
      <Header {...props} />
    </div>
  )
}

HeaderContainer.propTypes = {
  metric: T.oneOf(['default', 'article']),
  header: T.any.isRequired,
  // header: T.objectOf({
  //   isOnline: T.bool,
  //   fixed: T.bool,
  //   curRoute: T.object,
  //   leftOffset: T.string,
  //   accountInfo: T.object,
  //   isLogin: T.bool,
  //   activeInfo: T.object,
  //   curCommunity: T.object,
  // }).isRequired,
}

HeaderContainer.defaultProps = {
  metric: 'default',
}

export default connectStore(HeaderContainer)
