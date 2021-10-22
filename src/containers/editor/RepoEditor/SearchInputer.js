import React from 'react'

import { GITHUB_WEB_ADDR } from '@/config'
import Button from '@/widgets/Buttons/Button'
import FormItem from '@/widgets/FormItem'

import { InputWrapper } from './styles/search_man'

import { onGithubSearch, searchOnChange } from './logic'

const SearchInputer = ({ value, searching }) => (
  <>
    <InputWrapper>
      <FormItem
        value={value}
        size="large"
        onChange={searchOnChange}
        placeholder={`Github 仓库地址，如: ${GITHUB_WEB_ADDR}`}
        disabled={Boolean(searching)}
        autoFocus
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
  </>
)

export default React.memo(SearchInputer)
