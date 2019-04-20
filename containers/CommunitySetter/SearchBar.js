import React from 'react'

import { ICON_CMD } from 'config'
import { Wrapper, SearchInput, SearchIcon } from './styles/search_bar'

import { onSearch } from './logic'

const SearchBar = () => (
  <Wrapper>
    <SearchInput placeholder="搜索需要同步的社区" />
    <div onClick={onSearch}>
      <SearchIcon src={`${ICON_CMD}/search.svg`} />
    </div>
  </Wrapper>
)

export default SearchBar
