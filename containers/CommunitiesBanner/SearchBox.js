import React from 'react'

import { ICON_CMD } from '../../config'
import {
  Wrapper,
  InputWrapper,
  InputBar,
  SearchIcon,
  LoadingIcon,
} from './styles/search_box'

const SearchBox = ({ value, onChange, searching }) => (
  <Wrapper>
    <InputWrapper>
      {searching ? (
        <LoadingIcon src={`${ICON_CMD}/loading_sand.svg`} />
      ) : (
        <SearchIcon src={`${ICON_CMD}/search.svg`} />
      )}
      <InputBar
        placeholder="输入关键字, 寻找你感兴趣的社区.."
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  </Wrapper>
)

export default SearchBox
