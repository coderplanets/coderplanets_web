import styled from 'styled-components'

import { css, theme } from '@/utils'

export const Wrapper = styled.div.attrs((props) => ({
  'data-test-id': props.testId,
}))`
  ${css.flexColumn('align-center', 'justify-start')};
  width: 100%;
  height: 300px;
  color: ${theme('thread.articleDigest')};
`
export const Label = styled.div`
  color: ${theme('thread.articleTitle')};
  font-size: 16px;
  margin-bottom: 15px;
  margin-left: 5px;
`
export const InputBar = styled.input.attrs(() => ({
  spellCheck: 'false',
  autoComplete: 'off',
  autoCorrect: 'off',
  autoCapitalize: 'off',
}))`
  text-align: center;
  padding: 3px 15px;
  caret-color: #33b7b3;
  color: ${theme('thread.articleTitle')};
  height: 45px;
  width: auto;
  min-width: 500px;
  outline: none;
  font-size: 18px;
  max-height: none;
  background-color: transparent;
  border: 2px solid;
  border-color: #10404e;
  border-radius: 5px;
  transition: all 400ms ease;

  ::placeholder {
    color: #135868;
  }
`
export const QuestionHint = styled.div``
