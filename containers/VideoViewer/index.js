/*
 *
 * VideoViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { makeDebugger, storePlug, THREAD } from 'utils'

import ArticleViewerHeader from 'containers/ArticleViewerHeader'
import ArticleBodyHeader from 'containers/ArticleBodyHeader'
import Comments from 'containers/Comments'

import Maybe from 'components/Maybe'
import VideoPoster from 'components/VideoPoster'
import VideoInfoCard from 'components/VideoInfoCard'

import { Wrapper, BodyHeaderWrapper, CommentsWrapper } from './styles'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:VideoViewer')

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
    const { curCommunity, viewingData } = videoViewer

    return (
      <Wrapper>
        <ArticleViewerHeader
          data={viewingData}
          author={viewingData.author}
          thread={THREAD.VIDEO}
        />
        <BodyHeaderWrapper>
          <ArticleBodyHeader
            communityRaw={curCommunity.raw}
            thread={THREAD.VIDEO}
            data={viewingData}
            middle="labeler"
          />
        </BodyHeaderWrapper>
        <Maybe test={viewingData.poster}>
          <VideoPoster poster={viewingData.poster} />
          <VideoInfoCard data={viewingData} />
        </Maybe>
        <CommentsWrapper>
          <Comments />
        </CommentsWrapper>
      </Wrapper>
    )
  }
}

export default inject(storePlug('videoViewer'))(observer(VideoViewerContainer))
