/*
*
* MapViewer
*
*/

import React from 'react'
import { inject, observer } from 'mobx-react'
import ReactMapGL, { NavigationControl } from 'react-map-gl'

// import Link from 'next/link'

import defaultMapStyle from './defaultMapStyle'
import { makeDebugger, storeSelector } from '../../utils'
import { Wrapper } from './styles'
import * as logic from './logic'

const debug = makeDebugger('C:MapViewer')

class MapViewerContainer extends React.Component {
  state = {
    viewport: {
      width: 800,
      height: 400,
      latitude: 30.67,
      longitude: 104.06,
      zoom: 4,
    },
    /*
    refrence:
              https://uber.github.io/react-map-gl/#/Examples/dynamic-styling
              https://github.com/uber/react-map-gl/blob/3.2-release/examples/layers/src/app.js
              https://github.com/uber/react-map-gl/blob/3.2-release/examples/layers/src/control-panel.js

    mapStyle: {
      visibility: {
        water: true,
        parks: true,
        buildings: true,
        roads: true,
        labels: true,
        background: true,
      },
      color: {
        water: '#DBE2E6',
        parks: '#E6EAE9',
        buildings: '#c0c0c8',
        roads: '#ffffff',
        labels: '#78888a',
        background: '#EBF0F0',
      },
    },
    */
  }

  componentWillMount() {
    debug('mount')
    logic.init(this.props.mapViewer)
  }

  render() {
    const { viewport } = this.state
    // debug('defaultMapStyle: ', defaultMapStyle)

    return (
      <Wrapper>
        MapViewer container!
        <ReactMapGL
          {...viewport}
          mapStyle={defaultMapStyle}
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <div style={{ position: 'absolute', right: 0 }}>
            <NavigationControl
              onViewportChange={viewport => this.setState({ viewport })}
            />
          </div>
        </ReactMapGL>
      </Wrapper>
    )
  }
}

export default inject(storeSelector('mapViewer'))(observer(MapViewerContainer))
