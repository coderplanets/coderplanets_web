/*
 *
 * PostContent
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'
import { Affix } from 'antd'

import { makeDebugger, storePlug, THREAD } from 'utils'

import ArticleBodyHeader from 'containers/ArticleBodyHeader'
import Comments from 'containers/Comments'
import Maybe from 'components/Maybe'
import MarkDownRender from 'components/MarkDownRender'

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
    const { curRoute, viewingData } = postContent
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
                    thread={THREAD.POST}
                    data={viewingData}
                  />
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
