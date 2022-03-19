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
  border-radius: 20px;
  padding: 10px 18px;
  background-color: #fafafa; // to-theme
  margin-bottom: 8px;
  opacity: 0.8;
  border: 1px solid;
  border-color: #e6e6e6;
  &:hover {
    background-color: #fff;
    opacity: 1;
    border-color: ${theme('button.primary')};
  }

  transition: all 0.25s ease-in;

  ${css.media.mobile`
    width: 230px;
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

  ${css.media.mobile`
    width: 230px;
    left: 0px;
  `};
`
export const MaskNumer = styled.span`
  color: #327faf;
  margin-right: 4px;
`
export const InputBar = styled.input`
  text-align: center;
  caret-color: ${theme('banner.title')};
  flex-grow: 1;
  height: 100%;
  width: auto;
  min-width: 420px;
  outline: none;
  color: ${theme('banner.desc')};
  font-size: 1.1rem;
  max-height: none;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  transition: all 400ms ease;
`
