import React from 'react'

import Informer from 'containers/Informer'
import ArticleAuthorCard from 'containers/ArticleAuthorCard'
import ContentSourceCard from 'components/ContentSourceCard'

import { Wrapper, ReportWrapper } from './styles/side_cards'

const SideCards = ({ data }) => (
  <Wrapper>
    <ArticleAuthorCard user={data.author} />
    <ContentSourceCard data={data} />
    <ReportWrapper>
      <Informer />
    </ReportWrapper>
  </Wrapper>
)

export default SideCards
