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

import { PostBanner, CommunitiesBanner } from '..'

import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Banner')
/* eslint-enable no-unused-vars */

const BannerContent = ({ curCommunity, curRoute }) => {
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
    default:
      return <CommunityBanner curCommunity={curCommunity} />
  }
}

class BannerContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.banner)
  }

  render() {
    const { banner } = this.props
    const { curCommunity, curRoute } = banner
    // const { mainPath } = curRoute
    // debug('detail ---> ', detail)

    return (
      <BannerContent
        curCommunity={curCommunity}
        curRoute={curRoute}
        banner={banner}
      />
    )
  }
}

export default inject(storePlug('banner'))(observer(BannerContainer))
