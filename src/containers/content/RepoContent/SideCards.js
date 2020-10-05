import React from 'react'

import Informer from '@/containers/tool/Informer'
import ArticleAuthorCard from '@/containers/ArticleAuthorCard'
import ContentSourceCard from '@/components/ContentSourceCard'

import RepoStatusCard from './RepoStatusCard'

import { Wrapper, ReportWrapper } from './styles/side_cards'

const SideCards = ({ data }) => (
  <Wrapper>
    <RepoStatusCard data={data} />
    <ArticleAuthorCard user={data.author} />
    <ContentSourceCard data={data} />
    <ReportWrapper>
      <Informer />
    </ReportWrapper>
  </Wrapper>
)

export default React.memo(SideCards)
