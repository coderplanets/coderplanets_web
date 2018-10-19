import React from 'react'
import { inject, observer } from 'mobx-react'

import { ContentBanner } from '../../components'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostBanner')
/* eslint-enable no-unused-vars */

class PostBannerContainer extends React.Component {
  componentWillMount() {
    const { postBanner } = this.props
    logic.init(postBanner)
  }

  render() {
    const { postBanner } = this.props
    const { viewingPostData } = postBanner

    return <ContentBanner data={viewingPostData} />
  }
}

export default inject(storePlug('postBanner'))(observer(PostBannerContainer))
