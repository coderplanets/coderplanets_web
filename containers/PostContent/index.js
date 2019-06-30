/*
 *
 * PostContent
 *
 */

import React from 'react'
import { Affix } from 'antd'

import { THREAD } from '@constant'
import { connectStore, buildLog } from '@utils'

import ArticleBodyHeader from '@containers/ArticleBodyHeader'
import Comments from '@containers/Comments'
import Maybe from '@components/Maybe'
import MarkDownRender from '@components/MarkDownRender'

import ArticleAuthorCard from '@containers/ArticleAuthorCard'
import ContentSourceCard from '@components/ContentSourceCard'

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
const log = buildLog('C:PostContent')

const PostContentContainer = ({ postContent }) => {
  useInit()

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

            <MobileWrapper>
              <ArticleAuthorCard
                user={viewingData.author}
                introTitle="发布者"
              />
              <ContentSourceCard data={viewingData} />
            </MobileWrapper>

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

export default connectStore(PostContentContainer)
