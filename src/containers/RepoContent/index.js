/*
 *
 * RepoContent
 *
 */

import React from 'react'
import { Affix } from 'antd'

import { connectStore, buildLog } from '@utils'

import ArticleAuthorCard from '@containers/ArticleAuthorCard'
import ContentSourceCard from '@components/ContentSourceCard'
import Maybe from '@components/Maybe'
import MarkDownRender from '@components/MarkDownRender'

import Comments from '../Comments'
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
            <Affix offsetTop={30}>
              <SideCards data={viewingData} />
            </Affix>
          </SidebarWrapper>
        </InnerWrapper>
      </Maybe>
    </Wrapper>
  )
}

export default connectStore(RepoContentContainer)
