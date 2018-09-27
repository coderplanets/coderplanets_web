/*
 *
 * VideoViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { Wrapper } from './styles'

import PlayWindow from './PlayWindow'
import InfoBoard from './InfoBoard'

import { makeDebugger, storePlug } from '../../utils'

import Header from './Header'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:VideoViewer')
/* eslint-enable no-unused-vars */

class VideoViewerContainer extends React.Component {
  componentWillMount() {
    const { videoViewer, attachment } = this.props
    debug('attachment: ', attachment)
    logic.init(videoViewer, attachment)
  }

  render() {
    const { videoViewer } = this.props
    const { viewingData } = videoViewer

    return (
      <Wrapper>
        <Header data={viewingData} />
        <PlayWindow poster={viewingData.poster} />
        <InfoBoard data={viewingData} />
      </Wrapper>
    )
  }
}

export default inject(storePlug('videoViewer'))(observer(VideoViewerContainer))
