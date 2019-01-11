/*
 *
 * PostContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import { MarkDownRender, Maybe, Affix } from '../../components'

import ArticleBodyHeader from '../ArticleBodyHeader'
import Comments from '../Comments'
import SideCards from './SideCards'

import {
  Wrapper,
  MainWrapper,
  ArticleWrapper,
  BodyHeaderWrapper,
  CommentsWrapper,
} from './styles'

import * as logic from './logic'
import { makeDebugger, storePlug, THREAD } from '../../utils'

/* eslint-disable-next-line */
const debug = makeDebugger('C:PostContent')

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
    const { viewingData } = postContent

    return (
      <Wrapper>
        <Maybe test={viewingData.id}>
          <React.Fragment>
            <MainWrapper>
              <ArticleWrapper>
                <BodyHeaderWrapper>
                  <ArticleBodyHeader data={viewingData} thread={THREAD.POST} />
                </BodyHeaderWrapper>
                <MarkDownRender body={viewingData.body} />
              </ArticleWrapper>
              <CommentsWrapper>
                <Comments ssr />
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

export default inject(storePlug('postContent'))(observer(PostContentContainer))
