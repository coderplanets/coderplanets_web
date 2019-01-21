import React from 'react'

import ContentSourceCard from 'components/ContentSourceCard'
import Informer from '../Informer'
import ArticleAuthorCard from '../ArticleAuthorCard'

import CompanyCard from './CommunityCard'
import { Wrapper, ReportWrapper } from './styles/side_cards'

const SideCards = ({ data }) => (
  <Wrapper>
    <CompanyCard data={data} />
    <ArticleAuthorCard user={data.author} introTitle="发布者" />
    <ContentSourceCard data={data} />
    <ReportWrapper>
      <Informer />
    </ReportWrapper>
  </Wrapper>
)

export default SideCards
