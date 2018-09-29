import React from 'react'

import { FormItem, Button } from '../../components'

import {
  Wrapper,
  SearchTitle,
  InputWrapper,
  FormWrapper,
  Letter,
  Footer,
} from './styles/search_man'

import { makeDebugger } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:RepoEditor')
/* eslint-enable no-unused-vars */

const SearchMan = ({ value, searching, onSearch, onChange }) => (
  <Wrapper>
    <FormWrapper>
      <SearchTitle>
        <Letter color="#2D85EF">G</Letter>
        <Letter color="#F3423D">i</Letter>
        <Letter color="#FFBC35">t</Letter>
        <Letter color="#2D85EF">h</Letter>
        <Letter color="#10A859">u</Letter>
        <Letter color="#F3423D">b</Letter>
      </SearchTitle>
      <InputWrapper>
        <FormItem
          value={value}
          size="large"
          onChange={onChange.bind(this)}
          placeholder="Github 仓库地址，如: https://github.com/coderplanets/coderplanets_web"
          disabled={Boolean(searching)}
        />
      </InputWrapper>

      {searching ? (
        <Button size="default" type="primary" ghost>
          正在搜索..
        </Button>
      ) : (
        <Button
          size="default"
          type="primary"
          ghost
          onClick={onSearch.bind(this)}
        >
          Github 搜索
        </Button>
      )}
    </FormWrapper>
    <Footer>
      搜索使用当前登录的 Github token, 请注意不要意外发布您的私有项目。
    </Footer>
  </Wrapper>
)

export default SearchMan
