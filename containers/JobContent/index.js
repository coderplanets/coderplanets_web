/*
 *
 * JobContent
 *
 */

import React from 'react'
import { Affix } from 'antd'

import { THREAD } from '@constant'
import { connectStore, buildLog } from '@utils'

import ArticleBodyHeader from '@containers/ArticleBodyHeader'
import Comments from '@containers/Comments'
import MarkDownRender from '@components/MarkDownRender'
import Maybe from '@components/Maybe'

import ArticleAuthorCard from '@containers/ArticleAuthorCard'
import ContentSourceCard from '@components/ContentSourceCard'

import CompanyCard from './CommunityCard'
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
  MobileContentCard,
} from './styles'

import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:JobContent')

const JobContentContainer = ({ jobContent }) => {
  useInit(jobContent)

  const { curRoute, viewingData } = jobContent
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
                  thread={THREAD.JOB}
                  data={viewingData}
                />
              </BodyHeaderWrapper>
              <MarkDownRender body={viewingData.body} />
            </ArticleWrapper>

            <MobileWrapper>
              <CompanyCard data={viewingData} />
              <MobileContentCard>
                <ArticleAuthorCard
                  user={viewingData.author}
                  introTitle="发布者"
                />
                <ContentSourceCard data={viewingData} />
              </MobileContentCard>
            </MobileWrapper>

            <CommentsWrapper>
              <Comments ssr />
            </CommentsWrapper>
          </MainWrapper>

          <SidebarWrapper>
            <Affix offsetTop={30}>
              <SideCards data={viewingData} />
            </Affix>
          </SidebarWrapper>
        </InnerWrapper>
      </Maybe>
    </Wrapper>
  )
}

export default connectStore(JobContentContainer)
