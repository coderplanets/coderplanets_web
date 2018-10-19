import React from 'react'

import { AuthorCard, ContentSourceCard } from '../../components'
import { Wrapper } from './styles/side_cards'

const SideCards = ({ data }) => (
  <Wrapper>
    <AuthorCard user={data.author} />
    <ContentSourceCard data={data} />
  </Wrapper>
)

export default SideCards
