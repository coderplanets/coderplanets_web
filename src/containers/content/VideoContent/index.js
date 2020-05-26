/*
 *
 * VideoContent
 *
 */

import React from 'react'

import { THREAD } from '@/constant'
import { connectStore, buildLog } from '@/utils'

import ArticleBodyHeader from '@/containers/ArticleBodyHeader'
import Comments from '@/containers/Comments'
import ArticleAuthorCard from '@/containers/ArticleAuthorCard'
import ContentSourceCard from '@/components/ContentSourceCard'

import Sticky from '@/components/Sticky'
import Maybe from '@/components/Maybe'
import VideoPoster from '@/components/VideoPoster'
import VideoInfoCard from '@/components/VideoInfoCard'

import SideCards from './SideCards'

import {
  Wrapper,
  InnerWrapper,
  MainWrapper,
  SidebarWrapper,
  ArticleWrapper,
  BodyHeaderWrapper,
  CommentsWrapper,
  MobileWrapper,
} from './styles'

import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:VideoContent')

const VideoContentContainer = ({ videoContent: store }) => {
  useInit(store)

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
                  thread={THREAD.VIDEO}
                  data={viewingData}
                />
              </BodyHeaderWrapper>
              <Maybe test={viewingData.poster}>
                <a
                  href={viewingData.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <VideoPoster poster={viewingData.poster} />
                </a>
                <VideoInfoCard data={viewingData} />
              </Maybe>
            </ArticleWrapper>

            <MobileWrapper>
              <ArticleAuthorCard user={viewingData.author} />
              <ContentSourceCard data={viewingData} />
            </MobileWrapper>

            <CommentsWrapper>
              <Comments />
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

export default connectStore(VideoContentContainer)
