/*
 *
 * Banner
 *
 */

import React from 'react'

import { connectStore, makeDebugger, ROUTE } from '@utils'

import UserBanner from '@containers/UserBanner'
import CommunitiesBanner from '@containers/CommunitiesBanner'
import CommunityBanner from '@containers/CommunityBanner'

import CheatsheetRootBanner from './CheatsheetRootBanner'
import ActivitiesRootBanner from './ActivitiesRootBanner'

import { useInit } from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Banner')

const BannerContent = ({ curRoute }) => {
  const { mainPath } = curRoute
  // debug('BannerContent mainPath: ', mainPath)
  // debug('ROUTE.COMMUNITIES: ', ROUTE.COMMUNITIES)
  switch (mainPath) {
    case ROUTE.CHEATSHEETS:
      return <CheatsheetRootBanner />

    case ROUTE.COMMUNITIES:
      return <CommunitiesBanner />

    case ROUTE.ACTIVITIES:
      return <ActivitiesRootBanner />

    /*
    case ROUTE.POST: {
      return <ArticleBanner />
    }
    case ROUTE.JOB: {
      return <ArticleBanner showStar={false} />
    }
    case ROUTE.VIDEO: {
      return <ArticleBanner showWordCount={false} />
    }
    case ROUTE.REPO: {
      return (
        <ArticleBanner showStar={false} showWordCount={false} showLastSync />
      )
    }
      */

    case ROUTE.USER:
      return <UserBanner />

    default:
      return <CommunityBanner />
  }
}

const BannerContainer = ({ banner }) => {
  useInit(banner)
  const { curRoute } = banner

  return <BannerContent curRoute={curRoute} banner={banner} />
}

export default connectStore(BannerContainer)
