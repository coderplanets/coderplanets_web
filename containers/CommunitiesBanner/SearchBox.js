import React from 'react'

import { ICON_CMD } from '../../config'
import {
  Wrapper,
  InputWrapper,
  InputBar,
  SearchIcon,
} from './styles/search_box'

const SearchBox = ({ value, onChange }) => (
  <Wrapper>
    <InputWrapper>
      <SearchIcon src={`${ICON_CMD}/search.svg`} />
      <InputBar
        placeholder="寻找你感兴趣的社区, 当前共有社区 45 个"
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  </Wrapper>
)

export default SearchBox
