/*
 *
 * VideoContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Comments from '../Comments'
import { Maybe, VideoPoster } from '../../components'
import InfoBoard from './InfoBoard'
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
    const { viewingVideoData } = videoContent

    return (
      <Wrapper>
        <Maybe test={viewingVideoData.id}>
          <React.Fragment>
            <MainWrapper>
              <ArticleWrapper>
                <Maybe test={viewingVideoData.poster}>
                  <VideoPoster poster={viewingVideoData.poster} />
                  <InfoBoard data={viewingVideoData} />
                </Maybe>
              </ArticleWrapper>
              <CommentsWrapper>
                <Comments />
              </CommentsWrapper>
            </MainWrapper>
            <SideCards data={viewingVideoData} />
          </React.Fragment>
        </Maybe>
      </Wrapper>
    )
  }
}

export default inject(storePlug('videoContent'))(
  observer(VideoContentContainer)
)
