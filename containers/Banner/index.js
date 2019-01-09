/*
 *
 * Banner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import UserBanner from '../UserBanner'

import ArticleBanner from '../ArticleBanner'
import VideoBanner from '../VideoBanner'
import RepoBanner from '../RepoBanner'
import CommunitiesBanner from '../CommunitiesBanner'
import CommunityBanner from '../CommunityBanner'

import CheatsheetRootBanner from './CheatsheetRootBanner'
import ActivitiesRootBanner from './ActivitiesRootBanner'

import { makeDebugger, storePlug, ROUTE } from '../../utils'
import init from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Banner')
/* eslint-enable no-unused-vars */

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
      return <VideoBanner />
    }
    case ROUTE.REPO: {
      return <RepoBanner />
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
