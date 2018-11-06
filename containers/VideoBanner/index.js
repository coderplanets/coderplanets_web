/*
 *
 * VideoBanner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

// import { } from './styles'
import { ContentBanner } from '../../components'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:VideoBanner')
/* eslint-enable no-unused-vars */

class VideoBannerContainer extends React.Component {
  componentDidMount() {
    const { videoBanner } = this.props
    logic.init(videoBanner)
  }

  render() {
    const { videoBanner } = this.props
    const { viewingVideoData } = videoBanner

    return <ContentBanner data={viewingVideoData} />
  }
}

export default inject(storePlug('videoBanner'))(observer(VideoBannerContainer))
