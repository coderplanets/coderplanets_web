/*
 *
 * RepoContent
 *
 */

import React from 'react'

import { connectStore, buildLog } from '@/utils'

import Comments from '@/containers/Comments'
import ArticleAuthorCard from '@/containers/ArticleAuthorCard'

import Sticky from '@/components/Sticky'
import ContentSourceCard from '@/components/ContentSourceCard'
import Maybe from '@/components/Maybe'
import MarkDownRender from '@/components/MarkDownRender'

import SideCards from './SideCards'
import RepoStatusCard from './RepoStatusCard'

import {
  Wrapper,
  InnerWrapper,
  MainWrapper,
  SidebarWrapper,
  ArticleWrapper,
  CommentsWrapper,
  MobileWrapper,
  MobileContentCard,
} from './styles'

import { useInit } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:RepoContent')

const RepoContentContainer = ({ repoContent }) => {
  useInit(repoContent)

  const { viewingData } = repoContent

  return (
    <Wrapper>
      <Maybe test={viewingData.id}>
        <InnerWrapper>
          <MainWrapper>
            <ArticleWrapper>
              <MarkDownRender body={viewingData.readme} />
            </ArticleWrapper>
            <MobileWrapper>
              <RepoStatusCard data={viewingData} />
              <MobileContentCard>
                <ArticleAuthorCard user={viewingData.author} />
                <ContentSourceCard data={viewingData} />
              </MobileContentCard>
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

export default connectStore(RepoContentContainer)
