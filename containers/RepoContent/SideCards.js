import React from 'react'

import {
  AuthorCard,
  ContentSourceCard,
  BadContentRepot,
} from '../../components'
import { Wrapper, ReportWrapper } from './styles/side_cards'

const SideCards = ({ data }) => (
  <Wrapper>
    <AuthorCard user={data.author} />
    <ContentSourceCard data={data} />
    <ReportWrapper>
      <BadContentRepot />
    </ReportWrapper>
  </Wrapper>
)

export default SideCards
