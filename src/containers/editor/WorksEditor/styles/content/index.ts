import styled from 'styled-components'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/themes'
import css from '@/utils/css'
import { CONTENT_WIDTH } from '../metric'

export const Wrapper = styled.div.attrs(({ testid }: TTestable) => ({
  'data-test-id': testid,
}))<TTestable>`
  ${css.flexColumn('align-both')};
  height: 100%;
  width: ${`${CONTENT_WIDTH}px`};
`
export const BaseInput = styled.input.attrs(() => ({
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
  background-color: #0b2631;
  border: 2px solid;
  border-color: ${theme('editor.border')};
  border-radius: 15px;
  transition: all 400ms ease;

  ::placeholder {
    color: #135868;
  }
`
