import React from 'react'

import { ICON_CMD } from '@config'

import { Wrapper, SearchInput, SearchIcon } from './styles/search_box'

const SearchBox = () => {
  return (
    <Wrapper>
      <SearchInput placeholder="语言或框架名称" />
      <SearchIcon src={`${ICON_CMD}/search.svg`} />
    </Wrapper>
  )
}

export default React.memo(SearchBox)
