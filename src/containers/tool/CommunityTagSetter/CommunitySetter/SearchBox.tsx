import { FC, memo } from 'react'

import { Wrapper, SearchInput } from '../styles/community_setter/search_box'

const SearchBox: FC = () => {
  return (
    <Wrapper>
      <SearchInput placeholder="// 要移动到的社区名称" />
    </Wrapper>
  )
}

export default memo(SearchBox)
