/*
 *
 * Banner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import UserBanner from '../UserBanner'

import ArticleBanner from '../ArticleBanner'
import CommunitiesBanner from '../CommunitiesBanner'
import CommunityBanner from '../CommunityBanner'

import CheatsheetRootBanner from './CheatsheetRootBanner'
import ActivitiesRootBanner from './ActivitiesRootBanner'

import { makeDebugger, storePlug, ROUTE } from '../../utils'
import init from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:Banner')

const BannerContent = ({ curRoute }) => {
  const { mainPath } = curRoute
  // debug('BannerContent mainPath: ', mainPath)
  // debug('ROUTE.COMMUNITIES: ', ROUTE.COMMUNITIES)
  switch (mainPath) {
    case ROUTE.CHEATSHEETS: {
      return <CheatsheetRootBanner />
    }
    case ROUTE.COMMUNITIES: {
      return <CommunitiesBanner />
    }
    case ROUTE.ACTIVITIES: {
      return <ActivitiesRootBanner />
    }
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
    case ROUTE.USER: {
      return <UserBanner />
    }
    default:
      return <CommunityBanner />
  }
}

class BannerContainer extends React.Component {
  constructor(props) {
    super(props)

    const { banner } = props
    init(banner)
  }

  render() {
    const { banner } = this.props
    const { curRoute } = banner
    // const { mainPath } = curRoute
    // debug('detail ---> ', detail)

    return <BannerContent curRoute={curRoute} banner={banner} />
  }
}

export default inject(storePlug('banner'))(observer(BannerContainer))
