/*
 *
 * VideoViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { ArticleHeader } from '../../components'

import { Wrapper } from './styles'

import PlayWindow from './PlayWindow'
import InfoBoard from './InfoBoard'

import BodyHeader from './BodyHeader'

import { makeDebugger, storePlug, THREAD } from '../../utils'
import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:VideoViewer')
/* eslint-enable no-unused-vars */

class VideoViewerContainer extends React.Component {
  componentWillMount() {
    const { videoViewer, attachment } = this.props
    logic.init(videoViewer, attachment)
  }

  render() {
    const { videoViewer } = this.props
    const { viewingData } = videoViewer

    return (
      <Wrapper>
        <ArticleHeader
          data={viewingData}
          author={viewingData.author}
          onReaction={logic.onReaction}
          thread={THREAD.VIDEO}
        />
        <BodyHeader />
        <PlayWindow poster={viewingData.poster} />
        <InfoBoard data={viewingData} />
      </Wrapper>
    )
  }
}

export default inject(storePlug('videoViewer'))(observer(VideoViewerContainer))
