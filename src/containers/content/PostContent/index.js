/*
 *
 * PostContent
 *
 */

import React from 'react'

import { useMedia } from '@/hooks'
import { connectStore, buildLog } from '@/utils'

import Comments from '@/containers/unit/Comments'
// import ArticleAuthorCard from '@/containers/unit/ArticleAuthorCard'

import Sticky from '@/components/Sticky'
import Maybe from '@/components/Maybe'
import MarkDownRender from '@/components/MarkDownRender'
import ContentSourceCard from '@/components/ContentSourceCard'

import ArticleSticker from './ArticleSticker'
// import SideCards from './SideCards'

import {
  Wrapper,
  InnerWrapper,
  MainWrapper,
  SidebarWrapper,
  ArticleWrapper,
  CommentsWrapper,
} from './styles'

import { useInit } from './logic'

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

            {mobile && <ContentSourceCard data={viewingData} />}

            <CommentsWrapper>
              <Comments ssr />
            </CommentsWrapper>
          </MainWrapper>
          <SidebarWrapper>
            <Sticky offsetTop={100}>
              <ArticleSticker />
              {/* <SideCards data={viewingData} /> */}
            </Sticky>
          </SidebarWrapper>
        </InnerWrapper>
      </Maybe>
    </Wrapper>
  )
}

export default connectStore(PostContentContainer)
