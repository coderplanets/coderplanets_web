/*
 *
 * Header
 *
 */

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import T from 'prop-types'
import { contains } from 'ramda'

import { TYPE, ROUTE } from '@/constant'
import { connectStore, buildLog, getRoutePathList } from '@/utils'

import Header from './Header'
import FixedHeader from './FixedHeader'
import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:Header')

const HeaderContainer = ({ header: store, metric }) => {
  useInit(store)

  const [hasNoBottomBorder, setHasNoBottomBorder] = useState(false)

  const {
    isOnline,
    fixed,
    curRoute,
    leftOffset,
    accountInfo,
    isLogin,
    activeInfo,
    curCommunity,
  } = store

  const router = useRouter()
  const [mainPath] = getRoutePathList(router.asPath)

  useEffect(() => {
    setHasNoBottomBorder(
      contains(mainPath, [ROUTE.COMMUNITIES, ROUTE.SPONSOR, ROUTE.SUBSCRIBE]),
    )
  }, [mainPath])

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
