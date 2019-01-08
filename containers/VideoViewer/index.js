/*
 *
 * VideoViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import ArticleBodyHeader from '../ArticleBodyHeader'
import { ArticleHeader } from '../../components'

import Comments from '../Comments'
import PlayWindow from './PlayWindow'
import InfoBoard from './InfoBoard'

import { Wrapper, BodyHeaderWrapper, CommentsWrapper } from './styles'

import { makeDebugger, storePlug, THREAD } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:VideoViewer')
/* eslint-enable no-unused-vars */

class VideoViewerContainer extends React.Component {
  componentDidMount() {
    const { videoViewer, attachment } = this.props
    logic.init(videoViewer, attachment)
  }

  componentWillUnmount() {
    logic.uninit()
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
        <BodyHeaderWrapper>
          <ArticleBodyHeader
            data={viewingData}
            thread={THREAD.VIDEO}
            middle="labeler"
          />
        </BodyHeaderWrapper>
        {viewingData.poster ? <PlayWindow poster={viewingData.poster} /> : null}
        <InfoBoard data={viewingData} />
        <CommentsWrapper>
          <Comments />
        </CommentsWrapper>
      </Wrapper>
    )
  }
}

export default inject(storePlug('videoViewer'))(observer(VideoViewerContainer))
