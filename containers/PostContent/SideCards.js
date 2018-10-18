import React from 'react'

import { AuthorCard } from '../../components'
import { Wrapper } from './styles/side_cards'
import SourceCard from './SourceCard'

const SideCards = ({ data }) => {
  // console.log('data author: ', data.author)
  return (
    <Wrapper>
      <AuthorCard user={data.author} />
      <SourceCard data={data} />
    </Wrapper>
  )
}

export default SideCards
