/*
 *
 * VideoContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import ArticleBodyHeader from '../ArticleBodyHeader'
import Comments from '../Comments'
import { Maybe, VideoPoster, VideoInfoCard, Affix } from '../../components'
import SideCards from './SideCards'

import {
  Wrapper,
  MainWrapper,
  ArticleWrapper,
  BodyHeaderWrapper,
  CommentsWrapper,
} from './styles'

import { makeDebugger, storePlug, THREAD } from '../../utils'
import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:VideoContent')

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
                <BodyHeaderWrapper>
                  <ArticleBodyHeader data={viewingData} thread={THREAD.VIDEO} />
                </BodyHeaderWrapper>
                <Maybe test={viewingData.poster}>
                  <VideoPoster poster={viewingData.poster} />
                  <VideoInfoCard data={viewingData} />
                </Maybe>
              </ArticleWrapper>
              <CommentsWrapper>
                <Comments />
              </CommentsWrapper>
            </MainWrapper>
            <Affix offsetTop={30}>
              <SideCards data={viewingData} />
            </Affix>
          </React.Fragment>
        </Maybe>
      </Wrapper>
    )
  }
}

export default inject(storePlug('videoContent'))(
  observer(VideoContentContainer)
)
