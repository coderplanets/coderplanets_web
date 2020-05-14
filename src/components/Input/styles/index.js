import styled from 'styled-components'

import Img from '@/Img'
import { cs, theme } from '@/utils'

export const Wrapper = styled.div`
  position: relative;
`
const AddOn = styled.div`
  position: absolute;
  top: 0;
  ${cs.flex('align-both')};
  display: ${({ show }) => (show ? 'flex' : 'none')};
  width: 30px;
  height: 32px;
  z-index: 1;
`
export const PrefixWrapper = styled(AddOn)`
  left: 0;
`
export const SuffixWrapper = styled(AddOn)`
  right: 0;
`
export const Icon = styled(Img)`
  fill: ${({ active }) =>
    active ? theme('button.primary') : theme('thread.articleDigest')};
  width: 14px;
  height: 14px;
  display: block;
  opacity: 0.8;

  ${Wrapper}:hover & {
    opacity: 1;
  }
  transition: opacity 0.25s;
`
const baseInput = `
  outline: none;
  color: #2a867f;
  font-variant: tabular-nums;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  display: inline-block;
  padding: 4px 11px;
  width: 100%;
  height: 32px;
  font-size: 14px;
  line-height: 1.5;
  background-image: none;
  border: 1px solid;
  border-radius: 4px;
  transition: all 0.25s;
  -webkit-appearance: none;
  text-align: left;
`
export const InputWrapper = styled.input`
  ${baseInput};
  padding-left: ${({ hasPrefix }) => (hasPrefix ? '26px' : '8px')};
  padding-right: ${({ hasSuffix }) => (hasSuffix ? '26px' : '8px')};
  background-color: #0e3444;
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
`
export const TextAreaWrapper = styled.textarea`
  ${baseInput};
  background-color: #0e3444;
  border: 1px solid;
  border-color: ${theme('editor.border')};
  min-height: 60px;
  max-height: 30vh;

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
`
