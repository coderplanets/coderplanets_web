import styled from 'styled-components'

import type { TActive } from '@/spec'
// import Img from '@/Img'
import css, { theme } from '@/utils/css'

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`
export const InputWrapper = styled.div`
  position: relative;
  ${css.flex('align-center')};
  margin-bottom: 8px;

  transition: all 0.25s ease-in;

  ${css.media.mobile`
    width: 70%;
    margin-left: 15%;
    padding: 8px;
  `};
`
export const InputMask = styled.div<TActive>`
  ${css.flex('align-both')};
  position: absolute;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  top: 0;
  left: 18px;
  width: 400px;
  height: 40px;
`
export const MaskNumer = styled.span`
  color: #327faf;
  margin-right: 4px;
`
export const InputBar = styled.input.attrs(() => ({
  spellCheck: 'false',
  autoComplete: 'off',
  autoCorrect: 'off',
  autoCapitalize: 'off',
}))`
  text-align: center;
  caret-color: #33b7b3;
  flex-grow: 1;
  height: 100%;
  width: auto;
  min-width: 420px;
  outline: none;
  color: ${theme('thread.articleTitle')};
  font-size: 18px;
  max-height: none;
  background-color: #0b2631;
  padding: 10px 18px;
  border-radius: 15px;
  transition: all 400ms ease;

  border: 1px solid;
  border-color: ${theme('content.cardBg')};
  &:hover {
    opacity: 1;
    border-color: ${theme('button.primary')};
  }

  ::placeholder {
    color: #135868;
  }
`
