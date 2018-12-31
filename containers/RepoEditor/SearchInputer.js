import React from 'react'

import { FormItem, Button } from '../../components'
// import { Wrapper } from './styles'

import { InputWrapper } from './styles/search_man'

import { onGithubSearch, searchOnChange } from './logic'

const SearchInputer = ({ value, searching }) => (
  <React.Fragment>
    <InputWrapper>
      <FormItem
        value={value}
        size="large"
        onChange={searchOnChange}
        placeholder="Github 仓库地址，如: https://github.com/coderplanets/coderplanets_web"
        disabled={Boolean(searching)}
      />
    </InputWrapper>

    {searching ? (
      <Button size="default" type="primary" ghost>
        正在搜索..
      </Button>
    ) : (
      <Button size="default" type="primary" ghost onClick={onGithubSearch}>
        Github 搜索
      </Button>
    )}
  </React.Fragment>
)

export default SearchInputer
