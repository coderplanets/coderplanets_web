/*
 *
 * CommunityBanner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug } from '../../utils'

import DigestView from './DigestView'
import SimpleView from './SimpleView'

import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:CommunityBanner')
/* eslint-enable no-unused-vars */

class CommunityBannerContainer extends React.Component {
  componentDidMount() {
    const { communityBanner } = this.props
    logic.init(communityBanner)
  }

  render() {
    const { communityBanner } = this.props
    const {
      accountInfo: { customization: { bannerLayout } },
      viewing: { community, activeThread },
    } = communityBanner

    return (
      <div>
        {bannerLayout === 'DIGEST' ? (
          <DigestView
            community={community}
            activeThread={activeThread}
            layout={bannerLayout}
          />
        ) : (
          <SimpleView
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
