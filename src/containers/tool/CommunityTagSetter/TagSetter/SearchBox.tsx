import { FC, memo } from 'react'

import { Wrapper, SearchInput } from '../styles/tag_setter/search_box'

const SearchBox: FC = () => {
  return (
    <Wrapper>
      <SearchInput placeholder="// 输入用户名查找用户" />
    </Wrapper>
  )
}

export default memo(SearchBox)
