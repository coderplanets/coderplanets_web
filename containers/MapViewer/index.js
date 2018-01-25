/*
*
* MapViewer
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { makeDebugger, storeSelector } from '../../utils'
import { Wrapper } from './styles'
import * as logic from './logic'

const debug = makeDebugger('C:MapViewer')

class MapViewerContainer extends React.Component {
  componentWillMount() {
    debug('mount')
    logic.init(this.props.mapViewer)
  }

  render() {
    return <Wrapper>MapViewer container!</Wrapper>
  }
}

export default inject(storeSelector('mapViewer'))(observer(MapViewerContainer))
