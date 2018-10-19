/*
*
* JobBanner
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import { } from './styles'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:JobBanner')
/* eslint-enable no-unused-vars */

// NOTE: add me to ../containers/index
class JobBannerContainer extends React.Component {
  componentWillMount() {
    const { jobBanner } = this.props
    logic.init(jobBanner)
  }

  render() {
    return (
      <div>
        <h2>JobBanner container!</h2>
        <div>impress me!</div>
      </div>
    )
  }
}

export default inject(storePlug('jobBanner'))(observer(JobBannerContainer))
