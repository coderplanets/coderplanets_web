/*
 *
 * PostContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import Comments from '../Comments'
import { MarkDownRender, Maybe } from '../../components'

import { Wrapper, MainWrapper, ArticleWrapper, CommentsWrapper } from './styles'

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

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { postContent } = this.props
    const { viewingPostData } = postContent

    return (
      <Wrapper>
        <Maybe test={viewingPostData.id}>
          <React.Fragment>
            <MainWrapper>
              <ArticleWrapper>
                <MarkDownRender body={viewingPostData.body} />
              </ArticleWrapper>
              <CommentsWrapper>
                <Comments ssr />
              </CommentsWrapper>
            </MainWrapper>
            <SideCards data={viewingPostData} />
          </React.Fragment>
        </Maybe>
      </Wrapper>
    )
  }
}

export default inject(storePlug('postContent'))(observer(PostContentContainer))
