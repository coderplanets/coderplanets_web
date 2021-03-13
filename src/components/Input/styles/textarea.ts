import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

import { TTestable } from '@/spec'
import { theme } from '@/utils'

import { baseInput } from './index'

export const Wrapper = styled(TextareaAutosize).attrs(
  ({ testid }: TTestable) => ({
    'data-test-id': testid,
  }),
)<TTestable>`
  ${baseInput};
  background-color: #0b2631;
  border: 1px solid;
  border-color: ${theme('editor.border')};
  resize: none;
  overflow: hidden;
  text-align: left;

  border-color: ${theme('editor.border')};
  ::placeholder {
    color: ${theme('editor.placeholder')};
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
