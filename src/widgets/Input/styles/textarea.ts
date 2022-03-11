import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

import type { TTestable } from '@/spec'
import { theme } from '@/utils/css'

import { baseInput } from './index'

type TWrapper = TTestable | { spellCheck: string }

export const Wrapper = styled(TextareaAutosize).attrs(
  ({ testid }: TTestable) => ({
    'data-test-id': testid,
  }),
)<TWrapper>`
  ${baseInput};
  color: ${theme('thread.articleTitle')};
  opacity: 0.9;
  min-height: 56px;
  padding: 10px;
  background-color: #0b2631;
  border: 1px solid;
  border-color: ${theme('editor.border')};
  resize: none;
  overflow: hidden;
  text-align: left;

  border-color: ${theme('editor.border')};
  ::placeholder {
    font-size: 14px;
    color: ${theme('thread.articleDigest')};
    opacity: 0.5;
  }
  &:hover {
    border-color: ${theme('editor.borderActive')};
  }
  &:focus {
    border-color: ${theme('editor.borderActive')};
    box-shadow: -2px 1px 0px 0px rgba(0, 0, 0, 0.2);
  }
  &:active {
    border-color: ${theme('editor.borderActive')};
    box-shadow: -2px 1px 0px 0px rgba(0, 0, 0, 0.2);
  }

  transition: none;
`

export const holder = 1
