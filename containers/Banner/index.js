/*
 *
 * Banner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug, ROUTE } from '../../utils'

import CheatsheetRootBanner from './CheatsheetRootBanner'
import CommunityBanner from './CommunityBanner'
import ActivitiesRootBanner from './ActivitiesRootBanner'

import { UserBanner, PostBanner, CommunitiesBanner } from '..'

import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Banner')
/* eslint-enable no-unused-vars */

const BannerContent = ({ viewing, curRoute }) => {
  const { mainPath } = curRoute
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
      return <PostBanner />
    }
    case ROUTE.USER: {
      return <UserBanner />
    }
    default:
      return <CommunityBanner viewing={viewing} />
  }
}

class BannerContainer extends React.Component {
  componentWillMount() {
    const { banner } = this.props
    logic.init(banner)
  }

  render() {
    const { banner } = this.props
    const { viewing, curRoute } = banner
    // const { mainPath } = curRoute
    // debug('detail ---> ', detail)

    return (
      <BannerContent viewing={viewing} curRoute={curRoute} banner={banner} />
    )
  }
}

export default inject(storePlug('banner'))(observer(BannerContainer))
