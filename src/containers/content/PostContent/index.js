/*
 *
 * PostContent
 *
 */

import React from 'react'

import { THREAD } from '@/constant'
import { useMedia } from '@/hooks'
import { connectStore, buildLog } from '@/utils'

import ArticleBodyHeader from '@/containers/ArticleBodyHeader'
import Comments from '@/containers/Comments'
// import ArticleAuthorCard from '@/containers/ArticleAuthorCard'

import Sticky from '@/components/Sticky'
import Maybe from '@/components/Maybe'
import MarkDownRender from '@/components/MarkDownRender'
import ContentSourceCard from '@/components/ContentSourceCard'

import SideCards from './SideCards'

import {
  Wrapper,
  InnerWrapper,
  MainWrapper,
  SidebarWrapper,
  ArticleWrapper,
  BodyHeaderWrapper,
  CommentsWrapper,
} from './styles'

import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:PostContent')

const PostContentContainer = ({ postContent: store }) => {
  useInit(store)
  const { mobile } = useMedia()

  const { curRoute, viewingData } = store
  const { mainPath: communityRaw } = curRoute

  return (
    <Wrapper>
      <Maybe test={viewingData.id}>
        <InnerWrapper>
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

            {mobile && <ContentSourceCard data={viewingData} />}

            <CommentsWrapper>
              <Comments ssr />
            </CommentsWrapper>
          </MainWrapper>
          <SidebarWrapper>
            <Sticky offsetTop={30}>
              <SideCards data={viewingData} />
            </Sticky>
          </SidebarWrapper>
        </InnerWrapper>
      </Maybe>
    </Wrapper>
  )
}

export default connectStore(PostContentContainer)
