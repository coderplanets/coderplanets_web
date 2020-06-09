import React from 'react'
import { isEmpty } from 'ramda'

import CityCard from './CityCard'
import CitySideNote from './CitySideNote'

import {
  Wrapper,
  ListWrapper,
  LoadingWrapper,
  LoadingIcon,
  LoadingText,
  Sidebar,
} from './styles/city_list'

const Loading = () => (
  <LoadingWrapper>
    <LoadingIcon />
    <LoadingText>正在拉取同城社区，请稍等。</LoadingText>
  </LoadingWrapper>
)

const Lists = ({ items }) => (
  <React.Fragment>
    {items.map((community) => (
      <CityCard key={community.raw} community={community} />
    ))}
  </React.Fragment>
)

const CityList = ({ items }) => (
  <Wrapper>
    <ListWrapper>
      {isEmpty(items) ? <Loading /> : <Lists items={items} />}
    </ListWrapper>
    <Sidebar>
      <CitySideNote />
    </Sidebar>
  </Wrapper>
)

export default React.memo(CityList)
