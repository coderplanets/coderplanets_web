/*
 *
 * PostContent
 *
 */

import React from 'react'
import R from 'ramda'
import { inject, observer } from 'mobx-react'

import Comments from '../Comments'
import { MarkDownRender } from '../../components'

import {
  Container,
  MainWrapper,
  ArticleWrapper,
  CommentsWrapper,
} from './styles'

import SideCards from './SideCards'

import * as logic from './logic'
import { makeDebugger, storePlug } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:PostContent')
/* eslint-enable no-unused-vars */

class PostContentContainer extends React.Component {
  componentDidMount() {
    const { postContent } = this.props
    logic.init(postContent)
  }

  render() {
    const { postContent } = this.props
    const { viewingPostData } = postContent

    return (
      <Container>
        {R.isNil(viewingPostData.id) ? null : (
          <React.Fragment>
            <MainWrapper>
              <ArticleWrapper>
                <MarkDownRender body={viewingPostData.body} />
              </ArticleWrapper>
              <CommentsWrapper>
                <Comments />
              </CommentsWrapper>
            </MainWrapper>
            <SideCards data={viewingPostData} />
          </React.Fragment>
        )}
      </Container>
    )
  }
}

export default inject(storePlug('postContent'))(observer(PostContentContainer))
