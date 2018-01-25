/*
*
* TutsViewer
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { makeDebugger, storeSelector } from '../../utils'
import { Wrapper } from './styles'
import * as logic from './logic'

const debug = makeDebugger('C:TutsViewer')

class TutsViewerContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.tutsViewer)
  }

  render() {
    return <Wrapper>TutsViewer container!</Wrapper>
  }
}

export default inject(storeSelector('tutsViewer'))(
  observer(TutsViewerContainer)
)
