/*
 *
 * CommunityBanner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import DigestView from './DigestView'
import BriefView from './BriefView'

import * as logic from './logic'
import { makeDebugger, storePlug, C11N } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:CommunityBanner')
/* eslint-enable no-unused-vars */

class CommunityBannerContainer extends React.Component {
  constructor(props) {
    super(props)
    const { communityBanner } = props
    logic.init(communityBanner)
  }

  render() {
    const { communityBanner } = this.props
    const {
      accountInfo: {
        customization: { bannerLayout },
      },
      viewing: { community, activeThread },
    } = communityBanner

    /* console.log('the - fuck? ', community.threads) */
    return (
      <div>
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
