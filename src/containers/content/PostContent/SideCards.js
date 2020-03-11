import React from 'react'

import Informer from '@containers/Informer'
import ArticleAuthorCard from '@containers/ArticleAuthorCard'
import ContentSourceCard from '@components/ContentSourceCard'

import { Wrapper, Divider, ReportWrapper } from './styles/side_cards'

const SideCards = ({ data }) => (
  <Wrapper>
    <ArticleAuthorCard user={data.author} />
    <Divider />
    <ContentSourceCard data={data} />
    <ReportWrapper>
      <Informer />
    </ReportWrapper>
  </Wrapper>
)

export default React.memo(SideCards)
