import styled from 'styled-components'

import type { TActive } from '@/spec'
// import Img from '@/Img'
import { theme } from '@/utils/themes'
import css from '@/utils/css'

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`
export const InputWrapper = styled.div<{ noRound: boolean }>`
  position: relative;
  ${css.flex('align-center')};
  border-radius: ${({ noRound }) => (noRound ? '6px' : '20px')};
  padding: 10px 18px;
  background-color: ${theme('content.cardBg')};
  margin-bottom: 8px;
  opacity: 0.8;
  border: 1px solid;
  border-color: ${theme('content.cardBg')};
  &:hover {
    background-color: ${theme('content.cardBg')};
    opacity: 1;
    border: 1px solid #1e6184;
  }

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
  color: #33b7b3;
  font-size: 1.1rem;
  max-height: none;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  transition: all 400ms ease;

  ::placeholder {
    color: #135868;
  }
`
