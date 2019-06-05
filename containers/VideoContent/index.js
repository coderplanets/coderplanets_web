/*
 *
 * VideoContent
 *
 */

import React from 'react'
import { Affix } from 'antd'

import { connectStore, makelogger, THREAD } from '@utils'

import ArticleBodyHeader from '@containers/ArticleBodyHeader'
import Comments from '@containers/Comments'
import ArticleAuthorCard from '@containers/ArticleAuthorCard'
import ContentSourceCard from '@components/ContentSourceCard'

import Maybe from '@components/Maybe'
import VideoPoster from '@components/VideoPoster'
import VideoInfoCard from '@components/VideoInfoCard'

import SideCards from './SideCards'

import {
  Wrapper,
  MainWrapper,
  ArticleWrapper,
  BodyHeaderWrapper,
  CommentsWrapper,
  MobileWrapper,
} from './styles'

import { useInit } from './logic'

/* eslint-disable-next-line */
const log = makelogger('C:VideoContent')

const VideoContentContainer = ({ videoContent }) => {
  useInit(videoContent)

  const { curRoute, viewingData } = videoContent
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
              <ArticleAuthorCard
                user={viewingData.author}
                introTitle="发布者"
              />
              <ContentSourceCard data={viewingData} />
            </MobileWrapper>

            <CommentsWrapper>
              <Comments />
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

export default connectStore(VideoContentContainer)
