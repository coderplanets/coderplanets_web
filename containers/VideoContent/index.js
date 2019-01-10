/*
 *
 * VideoContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Comments from '../Comments'
import { Maybe, VideoPoster, VideoInfoCard } from '../../components'
import SideCards from './SideCards'

import { Wrapper, MainWrapper, ArticleWrapper, CommentsWrapper } from './styles'

import { makeDebugger, storePlug } from '../../utils'
import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:VideoContent')
/* eslint-enable no-unused-vars */

class VideoContentContainer extends React.Component {
  componentDidMount() {
    const { videoContent } = this.props
    logic.init(videoContent)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { videoContent } = this.props
    const { viewingData } = videoContent

    return (
      <Wrapper>
        <Maybe test={viewingData.id}>
          <React.Fragment>
            <MainWrapper>
              <ArticleWrapper>
                <Maybe test={viewingData.poster}>
                  <VideoPoster poster={viewingData.poster} />
                  <VideoInfoCard data={viewingData} />
                </Maybe>
              </ArticleWrapper>
              <CommentsWrapper>
                <Comments />
              </CommentsWrapper>
            </MainWrapper>
            <SideCards data={viewingData} />
          </React.Fragment>
        </Maybe>
      </Wrapper>
    )
  }
}

export default inject(storePlug('videoContent'))(
  observer(VideoContentContainer)
)
