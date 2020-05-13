import React from 'react'

import Informer from '@/containers/Informer'
import ArticleAuthorCard from '@/containers/ArticleAuthorCard'
import ContentSourceCard from '@/components/ContentSourceCard'

import CompanyCard from './CommunityCard'
import { Wrapper, ReportWrapper } from './styles/side_cards'

const SideCards = ({ data }) => (
  <Wrapper>
    <CompanyCard data={data} />
    <ArticleAuthorCard user={data.author} />
    <ContentSourceCard data={data} />
    <ReportWrapper>
      <Informer />
    </ReportWrapper>
  </Wrapper>
)

export default React.memo(SideCards)
