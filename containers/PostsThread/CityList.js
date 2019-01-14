import React from 'react'

// import { ICON_CMD } from '../../config'
import CityCard from './CityCard'
import CitySideNote from './CitySideNote'
import { Wrapper, ListWrapper, Sidebar } from './styles/city_list'

const CityList = ({ items }) => (
  <Wrapper>
    <ListWrapper>
      {items.map(community => (
        <CityCard key={community.raw} community={community} />
      ))}
    </ListWrapper>
    <Sidebar>
      <CitySideNote />
    </Sidebar>
  </Wrapper>
)

export default CityList
