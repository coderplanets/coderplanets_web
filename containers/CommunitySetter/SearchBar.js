import React from 'react'

import { ICON_CMD } from 'config'
import { Wrapper, SearchInput, SearchIcon } from './styles/search_bar'

import { onSearch, onSearchPress, onSearchChange } from './logic'

const SearchBar = ({ value }) => (
  <Wrapper>
    <SearchInput
      placeholder="搜索需要同步的社区"
      value={value}
      onChange={onSearchChange}
      onKeyPress={onSearchPress}
    />
    <div onClick={onSearch}>
      <SearchIcon src={`${ICON_CMD}/search.svg`} />
    </div>
  </Wrapper>
)

export default SearchBar
