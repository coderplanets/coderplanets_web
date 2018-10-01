import React from 'react'

import { ICON_CMD } from '../../config'

import { Wrapper, LoadingIcon, LoadingText } from './styles/search_loading'

const SearchLoing = () => (
  <Wrapper>
    <LoadingIcon src={`${ICON_CMD}/loading_sand.svg`} />
    <LoadingText>Searching ...</LoadingText>
  </Wrapper>
)

export default SearchLoing
