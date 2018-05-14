/*
 *
 * JobsViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { makeDebugger, storePlug } from '../../utils'
import { Wrapper } from './styles'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:JobsViewer')
/* eslint-enable no-unused-vars */

class JobsViewerContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.jobsViewer)
  }

  render() {
    return <Wrapper>JobsViewer container!</Wrapper>
  }
}

export default inject(storePlug('jobsViewer'))(observer(JobsViewerContainer))
