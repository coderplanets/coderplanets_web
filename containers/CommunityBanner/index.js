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
      viewing: { community, activeThread },
    } = communityBanner
    const layout = 'SIMPLE'
    /* const layout = 'DIGEST' */

    return (
      <div>
        {layout === 'DIGEST' ? (
          <DigestView community={community} activeThread={activeThread} />
        ) : (
          <SimpleView community={community} activeThread={activeThread} />
        )}
      </div>
    )
  }
}

export default inject(storePlug('communityBanner'))(
  observer(CommunityBannerContainer)
)
