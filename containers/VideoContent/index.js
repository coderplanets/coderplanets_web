/*
 *
 * VideoContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import R from 'ramda'

import Comments from '../Comments'

import {
  Container,
  MainWrapper,
  ArticleWrapper,
  CommentsWrapper,
} from './styles'

import SideCards from './SideCards'

import { makeDebugger, storePlug } from '../../utils'

import * as logic from './logic'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:VideoContent')
/* eslint-enable no-unused-vars */

class VideoContentContainer extends React.Component {
  constructor(props) {
    super(props)
    const { videoContent } = props
    logic.init(videoContent)
  }

  render() {
    const { videoContent } = this.props
    const { viewingVideoData } = videoContent

    return (
      <Container>
        {R.isNil(viewingVideoData.id) ? null : (
          <React.Fragment>
            <MainWrapper>
              <ArticleWrapper>xxx video</ArticleWrapper>
              <CommentsWrapper>
                <Comments />
              </CommentsWrapper>
            </MainWrapper>
            <SideCards data={viewingVideoData} />
          </React.Fragment>
        )}
      </Container>
    )
  }
}

export default inject(storePlug('videoContent'))(
  observer(VideoContentContainer)
)
