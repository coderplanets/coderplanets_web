import React from 'react'

import {
  AuthorCard,
  ContentSourceCard,
  BadContentRepot,
} from '../../components'

import CompanyCard from './CommunityCard'

import { Wrapper, ReportWrapper } from './styles/side_cards'

const SideCards = ({ data }) => (
  <Wrapper>
    <CompanyCard data={data} />
    <AuthorCard user={data.author} header="发布者" />
    <ContentSourceCard data={data} />
    <ReportWrapper>
      <BadContentRepot />
    </ReportWrapper>
  </Wrapper>
)

export default SideCards
