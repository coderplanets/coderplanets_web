import { FC, memo, useState } from 'react'

import { Wrapper, SearchInput } from '../styles/setter/search_box'

type TProps = {
  onSearch: (username: string) => void
}

const SearchBox: FC<TProps> = ({ onSearch }) => {
  const [name, setName] = useState('')

  return (
    <Wrapper>
      <SearchInput
        placeholder="// 输入用户名查找用户"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
          onSearch(e.target.value)
        }}
      />
    </Wrapper>
  )
}

export default memo(SearchBox)
