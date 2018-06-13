/*
 *
 * Banner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { TYPE, makeDebugger, storePlug } from '../../utils'

import CheatsheetRootBanner from './CheatsheetRootBanner'
import CommunitiesRootBanner from './CommunitiesRootBanner'
import CommunityBanner from './CommunityBanner'
import ActivitiesRootBanner from './ActivitiesRootBanner'

import { PostBanner } from '../../containers'

import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:Banner')
/* eslint-enable no-unused-vars */

const onChange = e => {
  logic.tabberChange(e)
}

const BannerContent = ({ curRoute, detail: { type, content } }) => {
  switch (type) {
    case TYPE.CHEATSHEET_ROOT_PAGE: {
      return <CheatsheetRootBanner />
    }
    case TYPE.COMMUNITIES_ROOT_PAGE: {
      return <CommunitiesRootBanner onChange={onChange} />
    }
    case TYPE.ACTIVITIES_ROOT_PAGE: {
      return <ActivitiesRootBanner />
    }
    case TYPE.POST_PAGE: {
      return <PostBanner />
    }
    default:
      return <CommunityBanner content={content} curRoute={curRoute} />
  }
}

class BannerContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.banner)
  }

  render() {
    const { banner } = this.props
    const { curRoute, detail } = banner
    // const { mainPath } = curRoute
    // debug('detail ---> ', detail)

    return <BannerContent curRoute={curRoute} banner={banner} detail={detail} />
  }
}

export default inject(storePlug('banner'))(observer(BannerContainer))
