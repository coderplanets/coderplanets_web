/*
 *
 * PostContent
 *
 */

import React from 'react'
import { Waypoint } from 'react-waypoint'

import { pluggedIn, buildLog } from '@/utils'

import Comments from '@/containers/unit/Comments'
// import ArticleAuthorCard from '@/containers/unit/ArticleAuthorCard'
import ArticleFooter from '@/containers/unit/ArticleFooter'

import Maybe from '@/components/Maybe'
import MarkDownRender from '@/components/MarkDownRender'

import {
  Wrapper,
  InnerWrapper,
  MainWrapper,
  ArticleWrapper,
  CommentsWrapper,
} from './styles/mobile_view'

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
        </InnerWrapper>
      </Maybe>
    </Wrapper>
  )
}

export default pluggedIn(PostContentContainer)
