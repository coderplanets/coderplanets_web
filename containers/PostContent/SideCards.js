import React from 'react'

import ContentSourceCard from 'components/ContentSourceCard'
import Informer from '../Informer'
import ArticleAuthorCard from '../ArticleAuthorCard'

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
