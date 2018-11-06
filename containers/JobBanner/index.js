/*
 *
 * JobBanner
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ContentBanner } from '../../components'
import MiddleInfo from './MiddleInfo'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:JobBanner')
/* eslint-enable no-unused-vars */

class JobBannerContainer extends React.Component {
  componentDidMount() {
    const { jobBanner } = this.props
    logic.init(jobBanner)
  }

  render() {
    const { jobBanner } = this.props
    const { viewingJobData } = jobBanner

    return <ContentBanner data={viewingJobData} middleNode={<MiddleInfo />} />
  }
}

export default inject(storePlug('jobBanner'))(observer(JobBannerContainer))
