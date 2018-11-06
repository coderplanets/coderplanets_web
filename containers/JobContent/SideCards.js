import React from 'react'

import Informer from '../Informer'
import { AuthorCard, ContentSourceCard } from '../../components'
import CompanyCard from './CommunityCard'
import { Wrapper, ReportWrapper } from './styles/side_cards'

const SideCards = ({ data }) => (
  <Wrapper>
    <CompanyCard data={data} />
    <AuthorCard user={data.author} header="发布者" />
    <ContentSourceCard data={data} />
    <ReportWrapper>
      <Informer />
    </ReportWrapper>
  </Wrapper>
)

export default SideCards
