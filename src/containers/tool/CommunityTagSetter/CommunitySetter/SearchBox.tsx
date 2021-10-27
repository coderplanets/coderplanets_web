import { FC, memo } from 'react'

import type { TTexts } from '../spec'
import { Wrapper, SearchInput } from '../styles/community_setter/search_box'
import { communityOnSearch } from '../logic'

type TProps = {
  searchValue: string
  texts: TTexts
}

const SearchBox: FC<TProps> = ({ searchValue, texts }) => {
  return (
    <Wrapper>
      <SearchInput
        value={searchValue}
        placeholder={texts.searchPlaceholder}
        onChange={communityOnSearch}
      />
    </Wrapper>
  )
}

export default memo(SearchBox)
