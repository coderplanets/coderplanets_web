/*
*
* JobsViewer
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { makeDebugger, storeSelector } from '../../utils'
import { Wrapper } from './styles'
import * as logic from './logic'

const debug = makeDebugger('C:JobsViewer')

class JobsViewerContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.jobsViewer)
  }

  render() {
    return <Wrapper>JobsViewer container!</Wrapper>
  }
}

export default inject(storeSelector('jobsViewer'))(
  observer(JobsViewerContainer)
)
