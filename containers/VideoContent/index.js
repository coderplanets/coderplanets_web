/*
 *
 * VideoContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import { Affix } from 'antd'

import { makeDebugger, storePlug, THREAD } from 'utils'

import Maybe from 'components/Maybe'
import VideoPoster from 'components/VideoPoster'
import VideoInfoCard from 'components/VideoInfoCard'

import ArticleBodyHeader from 'containers/ArticleBodyHeader'
import Comments from 'containers/Comments'

import SideCards from './SideCards'

import {
  Wrapper,
  MainWrapper,
  ArticleWrapper,
  BodyHeaderWrapper,
  CommentsWrapper,
} from './styles'

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
    const { curRoute, viewingData } = videoContent
    const { mainPath: communityRaw } = curRoute

    return (
      <Wrapper>
        <Maybe test={viewingData.id}>
          <React.Fragment>
            <MainWrapper>
              <ArticleWrapper>
                <BodyHeaderWrapper>
                  <ArticleBodyHeader
                    communityRaw={communityRaw}
                    thread={THREAD.VIDEO}
                    data={viewingData}
                  />
                </BodyHeaderWrapper>
                <Maybe test={viewingData.poster}>
                  <a
                    href={viewingData.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <VideoPoster poster={viewingData.poster} />
                  </a>
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
