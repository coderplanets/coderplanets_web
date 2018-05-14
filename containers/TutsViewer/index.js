/*
 *
 * TutsViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { makeDebugger, storePlug } from '../../utils'
import { Wrapper } from './styles'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:TutsViewer')
/* eslint-enable no-unused-vars */

class TutsViewerContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.tutsViewer)
  }

  render() {
    return <Wrapper>TutsViewer container!</Wrapper>
  }
}

export default inject(storePlug('tutsViewer'))(observer(TutsViewerContainer))
