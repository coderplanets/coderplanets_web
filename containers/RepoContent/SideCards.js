import React from 'react'

import Informer from '../Informer'
import ArticleAuthorCard from '../ArticleAuthorCard'
import ContentSourceCard from '../../components/ContentSourceCard'
import RepoStatusCard from './RepoStatusCard'

import { Wrapper, ReportWrapper } from './styles/side_cards'

const SideCards = ({ data }) => (
  <Wrapper>
    <RepoStatusCard data={data} />
    <ArticleAuthorCard user={data.author} introTitle="发布者" />
    <ContentSourceCard data={data} />
    <ReportWrapper>
      <Informer />
    </ReportWrapper>
  </Wrapper>
)

export default SideCards
