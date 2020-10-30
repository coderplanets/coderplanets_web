/*
 *
 * PostContent
 *
 */

import React from 'react'
import { Waypoint } from 'react-waypoint'

import { connectStore, buildLog } from '@/utils'

import Comments from '@/containers/unit/Comments'
// import ArticleAuthorCard from '@/containers/unit/ArticleAuthorCard'
import ArticleSticker from '@/containers/tool/ArticleSticker'
import ArticleFooter from '@/containers/unit/ArticleFooter'

import Maybe from '@/components/Maybe'
import MarkDownRender from '@/components/MarkDownRender'

// import SideCards from './SideCards'

import {
  Wrapper,
  InnerWrapper,
  MainWrapper,
  SidebarWrapper,
  ArticleWrapper,
  CommentsWrapper,
} from './styles/desktop_view'

import { useInit, articleInAnchor, articleOutAnchor } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:PostContent')

const PostContentContainer = ({ postContent: store }) => {
  useInit(store)

  const { viewingData } = store

  return (
    <Wrapper>
      <Maybe test={viewingData.id}>
        <InnerWrapper>
          <MainWrapper>
            <ArticleWrapper>
              <MarkDownRender body={viewingData.body} />
            </ArticleWrapper>
            <Waypoint onEnter={articleInAnchor} onLeave={articleOutAnchor} />
            <ArticleFooter />
            <CommentsWrapper>
              <Comments ssr />
            </CommentsWrapper>
          </MainWrapper>
          <SidebarWrapper>
            <ArticleSticker />
          </SidebarWrapper>
        </InnerWrapper>
      </Maybe>
    </Wrapper>
  )
}

export default connectStore(PostContentContainer)
