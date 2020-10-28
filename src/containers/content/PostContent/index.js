/*
 *
 * PostContent
 *
 */

import React from 'react'
import { Waypoint } from 'react-waypoint'

import { useMedia } from '@/hooks'
import { connectStore, buildLog } from '@/utils'

import Comments from '@/containers/unit/Comments'
// import ArticleAuthorCard from '@/containers/unit/ArticleAuthorCard'
import ArticleSticker from '@/containers/tool/ArticleSticker'

import Maybe from '@/components/Maybe'
import MarkDownRender from '@/components/MarkDownRender'
import ContentSourceCard from '@/components/ContentSourceCard'
import ArticleAuthorFooter from '@/components/ArticleAuthorFooter'

// import SideCards from './SideCards'

import {
  Wrapper,
  InnerWrapper,
  MainWrapper,
  SidebarWrapper,
  ArticleWrapper,
  CommentsWrapper,
} from './styles'

import { useInit, articleInAnchor, articleOutAnchor } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:PostContent')

const PostContentContainer = ({ postContent: store }) => {
  useInit(store)
  const { mobile } = useMedia()

  const { viewingData } = store

  return (
    <Wrapper>
      <Maybe test={viewingData.id}>
        <InnerWrapper>
          <MainWrapper>
            <ArticleWrapper>
              <MarkDownRender body={viewingData.body} />
            </ArticleWrapper>
            <ArticleAuthorFooter author={viewingData.author} />
            <Waypoint onEnter={articleInAnchor} onLeave={articleOutAnchor} />

            {mobile && <ContentSourceCard data={viewingData} />}

            <CommentsWrapper>
              <Comments ssr />
            </CommentsWrapper>
          </MainWrapper>
          <SidebarWrapper>
            <ArticleSticker />
            {/* <SideCards data={viewingData} /> */}
          </SidebarWrapper>
        </InnerWrapper>
      </Maybe>
    </Wrapper>
  )
}

export default connectStore(PostContentContainer)
