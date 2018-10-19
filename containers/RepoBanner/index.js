/*
 *
 * RepoBanner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ContentBanner } from '../../components'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:RepoBanner')
/* eslint-enable no-unused-vars */

class RepoBannerContainer extends React.Component {
  componentWillMount() {
    const { repoBanner } = this.props
    logic.init(repoBanner)
  }

  render() {
    const { repoBanner } = this.props
    const { viewingRepoData } = repoBanner

    return <ContentBanner data={viewingRepoData} />
  }
}

export default inject(storePlug('repoBanner'))(observer(RepoBannerContainer))
