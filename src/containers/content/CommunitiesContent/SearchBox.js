import React from 'react'

import { Wrapper, InputWrapper, InputBar } from './styles/search_box'

const SearchBox = ({ value, onChange }) => (
  <Wrapper>
    <InputWrapper>
      <InputBar
        placeholder="输入关键字, 寻找你感兴趣的社区.."
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  </Wrapper>
)

export default SearchBox
