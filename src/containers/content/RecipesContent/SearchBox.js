import React from 'react'

import { ICON_CMD } from '@/config'

import { Wrapper, SearchInput } from './styles/search_box'

const SearchBox = () => {
  return (
    <Wrapper>
      <SearchInput
        placeholder="语言或框架名称"
        suffixIcon={`${ICON_CMD}/search.svg`}
        testid="filter-searchbox"
      />
    </Wrapper>
  )
}

export default React.memo(SearchBox)
