import { FC, memo } from 'react'

import { Wrapper, SearchIcon, Text } from './styles/search_box'

const SearchBox: FC = () => {
  return (
    <Wrapper>
      <SearchIcon />
      <Text>搜索内容</Text>
    </Wrapper>
  )
}

export default memo(SearchBox)
