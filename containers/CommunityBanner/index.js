/*
 *
 * CommunityBanner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug, C11N } from 'utils'
import DigestView from './DigestView'
import BriefView from './BriefView'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:CommunityBanner')

class CommunityBannerContainer extends React.Component {
  componentDidMount() {
    const { communityBanner } = this.props
    logic.init(communityBanner)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { communityBanner } = this.props
    const {
      accountInfo: {
        customization: { bannerLayout },
      },
      viewing: { community, activeThread },
    } = communityBanner

    return (
      <div data-testid="community-banner">
        {bannerLayout === C11N.DIGEST ? (
          <DigestView
            community={community}
            activeThread={activeThread}
            layout={bannerLayout}
          />
        ) : (
          <BriefView
            community={community}
            activeThread={activeThread}
            layout={bannerLayout}
          />
        )}
      </div>
    )
  }
}

export default inject(storePlug('communityBanner'))(
  observer(CommunityBannerContainer)
)
