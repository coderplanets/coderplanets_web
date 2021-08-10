import { FC, memo } from 'react'

import { Wrapper, SearchInput } from '../styles/community_setter/search_box'
import { communityOnSearch } from '../logic'

type TProps = {
  searchValue: string
}

const SearchBox: FC<TProps> = ({ searchValue }) => {
  return (
    <Wrapper>
      <SearchInput
        value={searchValue}
        placeholder="// 要移动到的社区名称"
        onChange={communityOnSearch}
      />
    </Wrapper>
  )
}

export default memo(SearchBox)
