import { FC, memo } from 'react'

import {
  Wrapper,
  SearchIcon,
  InputWrapper,
  InputSearchIcon,
  Inputer,
  Text,
  CloseIcon,
} from './styles/search_box'

type TProps = {
  searchMode: boolean
  onSearch: (v: string) => void
  closeSearch: () => void
}

const SearchBox: FC<TProps> = ({ searchMode, onSearch, closeSearch }) => {
  if (searchMode) {
    return (
      <InputWrapper>
        <InputSearchIcon />
        <Inputer
          placeholder="搜索内容"
          onChange={(e) => onSearch(e.target.value)}
          autoFocus
        />
        <CloseIcon onClick={() => closeSearch()} />
      </InputWrapper>
    )
  }

  return (
    <Wrapper onClick={() => onSearch('')}>
      <SearchIcon />
      <Text>搜索内容</Text>
    </Wrapper>
  )
}

export default memo(SearchBox)
