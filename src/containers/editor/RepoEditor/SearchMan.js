import React from 'react'

import { ISSUE_ADDR } from '@/config'

import { buildLog } from '@/utils'
import SearchInputer from './SearchInputer'
import TokenSetter from './TokenSetter'

import {
  Wrapper,
  SearchTitle,
  FormWrapper,
  Letter,
  Footer,
  SetTokenWrapper,
  SetTokenIssue,
} from './styles/search_man'

import { changeSubView } from './logic'

/* eslint-disable-next-line */
const log = buildLog('C:RepoEditor')

const SearchMan = ({ value, searching, subView, tokenValue }) => (
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
      {subView === 'search' ? (
        <SearchInputer value={value} searhing={searching} />
      ) : (
        <TokenSetter value={tokenValue} />
      )}
    </FormWrapper>
    <Footer>
      若有问题请尝试
      <SetTokenWrapper onClick={changeSubView('token')}>
        重新设置token
      </SetTokenWrapper>
      或{' '}
      <SetTokenIssue
        href={`${ISSUE_ADDR}/323`}
        rel="noopener noreferrer"
        target="_blank"
      >
        报告issue
      </SetTokenIssue>
    </Footer>
  </Wrapper>
)

export default React.memo(SearchMan)
