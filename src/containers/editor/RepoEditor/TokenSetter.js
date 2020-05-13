import React from 'react'

import { ISSUE_ADDR } from '@/config'

import { Button } from '@/components/Buttons'
import FormItem from '@/components/FormItem'

import {
  TokeInputWrapper,
  SetTokenDesc,
  SetTokenIssue,
} from './styles/search_man'

import { tokenOnChange, setGithubToken } from './logic'

const TokenSetter = ({ value, searching }) => (
  <React.Fragment>
    <TokeInputWrapper>
      <FormItem
        value={value}
        size="large"
        onChange={tokenOnChange}
        placeholder="github token"
        disabled={Boolean(searching)}
      />
    </TokeInputWrapper>
    <SetTokenDesc>
      Github API 需要使用你的 Github Token, 请
      <SetTokenIssue
        href={`${ISSUE_ADDR}/323`}
        rel="noopener noreferrer"
        target="_blank"
      >
        按照说明步骤
      </SetTokenIssue>
      进行设置。
    </SetTokenDesc>

    <Button type="primary" ghost onClick={setGithubToken}>
      设置 Github Token
    </Button>
  </React.Fragment>
)

export default React.memo(TokenSetter)
